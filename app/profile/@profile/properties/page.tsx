import { deleteProperty, getProfileProperties } from '@/app/action';
import Link from 'next/link';

export default async function PropertiesPage() {
  const myProperties = await getProfileProperties();
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 className="leading-7 font-semibold text-base text-gray-900">
        Your Properties
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-500 max-w-lg">
        This is a list of properties you have up for rent. You may edit the
        properties and remove them at any time.
      </p>

      <dl className="mt-8 border-t border-gray-200 text-sm leading-6 space-y-6 divide-y divide-gray-100">
        {myProperties?.map((property) => {
          const deletePropertyWithId = deleteProperty.bind(null, property.id);
          return (
            <div key={property.id} className="pt-6 sm:flex">
              <dt className="font-medium sm:flex-none sm:w-64 sm:pe-6 text-gray-900">
                {property.name}
              </dt>
              <dd className="mt-1 sm:mt-0 sm:flex-auto flex justify-between gap-x-6">
                <p>{property.street}</p>

                <div className="flex gap-6">
                  <Link
                    href={`/property/edit/${property.id}`}
                    className="text-sky-600 font-semibold transition-colors hover:text-sky-700"
                  >
                    Edit
                  </Link>
                  <form action={deletePropertyWithId}>
                    <button
                      type="submit"
                      className="text-red-600 font-semibold transition-colors hover:text-red-700"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
