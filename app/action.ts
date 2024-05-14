'use server';

import { signIn, signOut } from '@/auth';
import { db } from '@/drizzle';
import { eq } from 'drizzle-orm';
import { properties } from '@/schema';
import { notFound } from 'next/navigation';

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
