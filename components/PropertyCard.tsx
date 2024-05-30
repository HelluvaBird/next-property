import { FaParking } from 'react-icons/fa';
import { FaBath, FaWifi } from 'react-icons/fa6';
import { IoIosBed } from 'react-icons/io';
import Link from 'next/link';
import PropertyCardImage from './PropertyCardImage';
import { getPrice, getPriceText } from '@/utils/utils';
import { SelectProperty } from '@/schema';
import Bookmark from './Bookmark';
import { getPropertyCardSaves, getUserBookmarks } from '@/app/action';

export default async function PropertyCard({
  property,
}: {
  property: SelectProperty;
}) {
  const [saves, bookmarks] = await Promise.all([
    getPropertyCardSaves(property.id),
    getUserBookmarks(),
  ]);
  return (
    <div className="relative">
      <Link href={`/property/${property.id}`}>
        <div className="p-4 grid gap-2 ring-1 ring-black ring-opacity-5 shadow-lg hover:shadow-xl hover:ring-opacity-10 transition-shadow rounded-lg">
          <div className="h-[300px] relative">
            {property.images && property.images.length > 0 ? (
              <PropertyCardImage src={`${property.images[0]}`} />
            ) : (
              <div className="bg-gray-500 h-full rounded-lg"></div>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="py-1 px-2 bg-blue-100 rounded-lg">
                {property.type}
              </span>
              <span className="py-1 px-2 bg-green-100 rounded-lg">
                Saved: {saves[0].value}
              </span>
            </div>
            <div className="flex mt-2">
              <div className="space-y-1 flex-1 max-w-72 mr-auto">
                <p className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  {property.name}
                </p>
                <p className="text-sm font-light whitespace-nowrap overflow-hidden text-ellipsis">{`${property.street}, ${property.city}, ${property.state}`}</p>
                <p className="space-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  <span className="text-rose-500 font-semibold text-xl">{`${getPrice(
                    property
                  )!.toLocaleString('en-US', {
                    currency: 'USD',
                    style: 'currency',
                  })}`}</span>
                  <span className="font-light text-sm">
                    per {getPriceText(property)}
                  </span>
                </p>
              </div>
              <div className="text-center">
                <p className="font-semibold">{property.squareFeet}</p>
                <p className="text-sm">
                  FT<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t flex items-center justify-between pt-2">
            <div className="text-center">
              <div className="flex items-center gap-1">
                <IoIosBed className="size-6" />
                <span className="font-semibold">{property.beds}</span>
              </div>
              <span>Beds</span>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1">
                <FaBath className="size-6" />
                <span className="font-semibold">{property.baths}</span>
              </div>
              <span>Baths</span>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1">
                <FaParking className="size-6" />
                <span className="font-semibold">Free</span>
              </div>
              <span>Parking</span>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1">
                <FaWifi className="size-6" />
                <span className="font-semibold">Yes</span>
              </div>
              <span>Wifi</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute z-[1] top-6 right-6">
        <Bookmark bookmarks={bookmarks} propertyId={property.id} />
      </div>
    </div>
  );
}
