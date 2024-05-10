'use server';

import { signIn, signOut } from '@/auth';
import { db } from '@/drizzle';

export async function signin() {
  await signIn('google');
}

export async function signout() {
  await signOut();
}

export async function getAllProperties() {
  return await db.query.properties.findMany();
}
