import { getProperty } from '@/app/action';
import PropertyForm from '@/components/PropertyForm';

export default async function EditPropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const editProperty = await getProperty(params.id);
  return (
    <div>
      <h1 className="text-5xl font-bold">Edit Property</h1>
      <PropertyForm editProperty={editProperty} />
    </div>
  );
}
