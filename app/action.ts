'use server';

import { auth, signIn, signOut } from '@/auth';
import { db } from '@/drizzle';
import { eq } from 'drizzle-orm';
import { InsertProperty, properties } from '@/schema';
import { notFound, redirect } from 'next/navigation';
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function signin() {
  await signIn('google');
}

export async function signout() {
  await signOut();
}

export async function getAllProperties() {
  return await db.query.properties.findMany();
}

export async function getProperty(id: string) {
  if (isNaN(Number(id))) {
    notFound();
  }
  return await db.query.properties.findFirst({
    where: eq(properties.id, Number(id)),
    with: {
      ownerInfo: {
        columns: {
          name: true,
        },
      },
    },
  });
}

export async function createNewProperty(formData: FormData) {
  const session = await auth();

  if (!session) {
    return await signin();
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  });

  const images = formData.getAll('file-upload') as File[];
  const type = formData.get('type') as string;
  const name = formData.get('name') as string;
  const street = formData.get('street') as string;
  const city = formData.get('city') as string;
  const state = formData.get('state') as string;
  const zipcode = formData.get('zipcode') as string;
  const description = formData.get('description') as string;
  const nightly = formData.get('nightly') as string;
  const weekly = formData.get('weekly') as string;
  const monthly = formData.get('monthly') as string;
  const beds = formData.get('beds') as string;
  const baths = formData.get('baths') as string;
  const squareFeet = formData.get('squareFeet') as string;
  const amenities = formData.getAll('amenities') as string[];
  let imagePublicIds: string[] = [];

  if (images.length > 0) {
    const imagePromises: Promise<string>[] = [];

    for (const image of images) {
      imagePromises.push(
        new Promise(async (resolve) => {
          cloudinary.uploader
            .upload_stream(
              { folder: 'next-property', resource_type: 'image' },
              (error, result) => {
                if (!error && result) {
                  resolve(result.public_id);
                } else {
                  console.log(error);
                }
              }
            )
            .end(Buffer.from(await image.arrayBuffer()));
        })
      );
    }

    imagePublicIds = await Promise.all(imagePromises);
  }

  const newProperty: InsertProperty = {
    ownerId: session.user?.id!,
    type,
    name,
    street,
    city,
    state,
    zipcode,
    description,
    nightlyRate: Number(nightly),
    weeklyRate: Number(weekly),
    monthlyRate: Number(monthly),
    beds: Number(beds),
    baths: Number(baths),
    squareFeet: Number(squareFeet),
    images: imagePublicIds,
    amenities,
  };

  await db.insert(properties).values(newProperty);
  revalidatePath('/properties');
  redirect('/properties');
}
