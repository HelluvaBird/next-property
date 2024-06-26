'use client';

import { addBookmark, deleteBookmark } from '@/app/action';
import { SelectBookmarks } from '@/schema';
import { useOptimistic } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function Bookmark({
  bookmarks,
  propertyId,
}: {
  bookmarks: SelectBookmarks[] | null;
  propertyId: number;
}) {
  const isActive = bookmarks?.find(
    (bookmark) => bookmark.propertyId === propertyId
  );

  const [optimisticIsActive, toggleOptimisticIsActive] = useOptimistic(
    !!isActive,
    (state) => !state
  );

  const toggleActive = async () => {
    toggleOptimisticIsActive(!isActive);
    if (isActive) {
      await deleteBookmark(propertyId);
    } else {
      await addBookmark(propertyId);
    }
  };
  return (
    <form action={toggleActive}>
      <button className=" bg-white size-10 rounded-full flex items-center justify-center hover:bg-gray-50">
        {optimisticIsActive ? (
          <FaBookmark className="size-5 fill-rose-500" />
        ) : (
          <FaRegBookmark className="size-5" />
        )}
      </button>
    </form>
  );
}
