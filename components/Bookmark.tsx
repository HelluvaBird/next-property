'use client';

import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function Bookmark() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <button
      onClick={toggleActive}
      className=" bg-white size-10 rounded-full flex items-center justify-center hover:bg-gray-50"
    >
      {active ? (
        <FaBookmark className="size-5 fill-rose-500" />
      ) : (
        <FaRegBookmark className="size-5" />
      )}
    </button>
  );
}
