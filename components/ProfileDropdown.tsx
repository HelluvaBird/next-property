'use client';
import { signout } from '@/app/action';
import { Menu, Transition } from '@headlessui/react';
import { User } from 'next-auth';
import Image from 'next/image';
import { Fragment } from 'react';
import { HiOutlineBell } from 'react-icons/hi';

export const defaultImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const userNavigation = [
  { name: 'Add Property', href: '/property/add' },
  { name: 'Your Profile', href: '/profile' },
];

export default function ProfileDropdown({ user }: { user: User }) {
  return (
    <div className="hidden sm:ml-8 sm:flex sm:items-center">
      <button
        type="button"
        className="bg-white p-1 rounded-full text-gray-400 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
      >
        <span className="sr-only">View notifications</span>
        <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
            <span className="sr-only">Open user menu</span>
            <Image
              width={32}
              height={32}
              className="rounded-full"
              src={user.image ?? defaultImage}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              </Menu.Item>
            ))}
            <Menu.Item>
              <form action={signout}>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sign out
                </button>
              </form>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
