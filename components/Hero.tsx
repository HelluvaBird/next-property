import Image from 'next/image';
import { HiChevronRight, HiStar } from 'react-icons/hi';

export default function Hero() {
  return (
    <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="mt-20">
            <div>
              <a href="#" className="inline-flex space-x-4">
                <span className="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  New Deal
                </span>
                <span className="inline-flex items-center text-sm font-medium text-rose-500 space-x-1">
                  <span>Rent one get your next rental 50% off</span>
                  <HiChevronRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">A better way to</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-600 sm:pb-5">
                  rent property
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Whether you&apos;re looking to rent for 1 day or 1 year
                NextProperty has got you covered.
              </p>
            </div>
            <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="hero-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Enter a location"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex-shrink-0 flex pr-5">
                  <HiStar
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <HiStar
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <HiStar
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <HiStar
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <HiStar
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">
                    Rated 5 stars
                  </span>{' '}
                  by over{' '}
                  <span className="font-medium text-rose-500">
                    500 beta users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
            <svg
              className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              />
            </svg>
          </div>
          <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none h-96 lg:h-full lg:pl-12">
            <Image
              priority
              fill
              sizes="33vw"
              className="lg:ml-12 w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none object-cover"
              src="/images/d3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
