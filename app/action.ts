'use server';

import { auth, signIn, signOut } from '@/auth';
import { db } from '@/drizzle';
import { eq } from 'drizzle-orm';
import { properties } from '@/schema';
import { notFound } from 'next/navigation';
import { v2 as cloudinary } from 'cloudinary';

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
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  });

  const images = formData.getAll('file-upload') as File[];
  const imagePublicIds: string[] = [];

  for (const image of images) {
    cloudinary.uploader
      .upload_stream(
        { folder: 'next-property', resource_type: 'image' },
        (error, result) => {
          if (!error && result) {
            imagePublicIds.push(result.public_id);
          } else {
            console.log(error);
          }
        }
      )
      .end(Buffer.from(await image.arrayBuffer()));
  }
}
