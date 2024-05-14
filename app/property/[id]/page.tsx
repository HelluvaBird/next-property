import { getProperty } from '@/app/action';
import PropertyCardImage from '@/components/PropertyCardImage';
import { getPrice, getPriceText } from '@/utils/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaBath, FaChevronLeft, FaRulerCombined } from 'react-icons/fa6';
import { IoIosBed } from 'react-icons/io';

export default async function PropertyPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <div>
      <Link href="/properties" className="inline-flex items-center group">
        <FaChevronLeft className="size-6 text-gray-500 group-hover:text-gray-900" />
        <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
          Back to properties
        </span>
      </Link>
      <div className="grid sm:grid-cols-3 gap-2 mt-8">
        {property.images?.map((image) => (
          <div key={image} className="relative h-96">
            <PropertyCardImage src={`next-property/${image}`} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_min-content] gap-12 mt-8">
        <div className="space-y-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="space-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="text-rose-500 font-semibold text-4xl">{`${getPrice(
                  property
                )!.toLocaleString('en-US', {
                  currency: 'USD',
                  style: 'currency',
                })}`}</span>
                <span className="font-light text-lg">
                  per {getPriceText(property)}
                </span>
              </p>
              <p className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{`${property.street}, ${property.city}, ${property.state}`}</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="grid flex-1">
                <div className="flex items-center gap-1">
                  <IoIosBed className="size-10" />
                  <span className="font-semibold text-2xl">
                    {property.beds}
                  </span>
                </div>
                <span className="text-lg">Beds</span>
              </div>
              <div className="grid flex-1">
                <div className="flex items-center gap-1">
                  <FaBath className="size-10" />
                  <span className="font-semibold text-2xl">
                    {property.baths}
                  </span>
                </div>
                <span className="text-lg">Baths</span>
              </div>
              <div className="grid flex-1">
                <div className="flex items-center gap-1">
                  <FaRulerCombined className="size-10" />
                  <span className="font-semibold text-2xl">
                    {property.squareFeet}
                  </span>
                </div>
                <p className="text-lg">
                  FT<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <span className="inline-block px-4 py-1 bg-blue-100 font-semibold rounded-lg">
              {property.type}
            </span>
            <h1 className="text-5xl font-bold">{property.name}</h1>
            <p>{property.description}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Amenities:</p>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {property.amenities?.map((amenity) => (
                <div
                  key={amenity}
                  className="px-2 py-1 bg-rose-100 text-rose-950 font-semibold rounded-lg"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm">
            Property last updated on:{' '}
            {property.updatedAt?.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="min-w-64">
          <div className="p-5 border rounded-lg space-y-1">
            <button
              type="submit"
              className="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
            >
              Contact owner
            </button>
            <p className="text-xs text-center">
              owner: {property.ownerInfo.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
