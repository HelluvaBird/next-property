import { getProperty } from '@/app/action';
import { notFound } from 'next/navigation';

export default async function PropertyPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return <pre>{JSON.stringify(property, null, 2)}</pre>;
}
