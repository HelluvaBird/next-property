'use client';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiHome, HiMenu, HiOutlineBell, HiX } from 'react-icons/hi';
import { navigation } from '@/navigation';
import { FaGoogle } from 'react-icons/fa';
import { defaultImage, userNavigation } from './ProfileDropdown';
import Image from 'next/image';
import { User } from 'next-auth';
import { signin, signout } from '@/app/action';

export default function MobileMenu({ user }: { user: User | undefined }) {
  return (
    <Popover className="-mr-2 -my-2 md:hidden">
      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
        <span className="sr-only">Open menu</span>
        <HiMenu className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="sr-only">NextProperty</span>
                  <div className="flex-shrink-0 flex items-center justify-center size-8 rounded-md bg-rose-500 text-white">
                    <HiHome className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Close menu</span>
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {navigation.map((item) => (
                    <Popover.Button
                      as={Link}
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-rose-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              {user ? (
                <>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full"
                        src={user.image ?? defaultImage}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Popover.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        {item.name}
                      </Popover.Button>
                    ))}
                    <form action={signout} className="grid">
                      <Popover.Button
                        type="submit"
                        className="text-left py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        Sign out
                      </Popover.Button>
                    </form>
                  </div>
                </>
              ) : (
                <form action={signin}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600">
                    <FaGoogle />
                    <span>Login with Google</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
