import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Notfound() {
  return (
    <div className="grid grid-cols-1 gap-8 py-24 sm:py-64 w-full max-w-7xl mx-auto">
      <p className="text-rose-500 font-semibold">404</p>
      <h1 className="text-5xl font-bold tracking-tight">Page not found</h1>
      <p className=" text-gray-600">
        Sorry, we couldn&apos;t find the page you were looking for
      </p>
      <div>
        <Link
          href="/"
          className="text-rose-500 text-sm font-semibold inline-flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
}
