import { getProfileBookmarks } from '@/app/action';
import Link from 'next/link';

export default async function Bookmarks() {
  const bookmarks = await getProfileBookmarks();
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 className="leading-7 font-semibold text-base text-gray-900">
        Your Bookmarks
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-500 max-w-lg">
        This is a list of properties you have bookmarked to view at any time.
      </p>

      <dl className="mt-8 border-t border-gray-200 text-sm leading-6 space-y-6 divide-y divide-gray-100">
        {bookmarks ? (
          bookmarks?.map((bookmark) => (
            <div key={bookmark.propertyId} className="pt-6 sm:flex">
              <Link
                href={`/property/${bookmark.propertyId}`}
                className="text-rose-400 hover:text-rose-500"
              >
                <dt className="font-medium sm:flex-none sm:w-64 sm:pe-6">
                  {bookmark.propertyInfo.name}
                </dt>
              </Link>
              <dd className="mt-1 sm:mt-0 sm:flex-auto">
                <p>{bookmark.propertyInfo.street}</p>
              </dd>
            </div>
          ))
        ) : (
          <div className="pt-6 sm:flex">
            <p>You have no bookmarks</p>
          </div>
        )}
      </dl>
    </div>
  );
}
