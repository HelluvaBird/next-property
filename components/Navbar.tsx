import { HiHome } from 'react-icons/hi';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ProfileDropdown from './ProfileDropdown';
import { auth } from '@/auth';
import { navigation } from '@/navigation';
import { signin } from '@/app/action';
import { FaGoogle } from 'react-icons/fa6';

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-8 md:max-w-7xl md:mx-auto">
        <div>
          <Link href="/" className="flex">
            <span className="sr-only">NextProperty</span>
            <div className="flex-shrink-0 flex items-center justify-center size-8 sm:size-10 rounded-md bg-rose-500 text-white">
              <HiHome className="size-6 sm:size-8" aria-hidden="true" />
            </div>
          </Link>
        </div>
        <MobileMenu user={session?.user} />
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center md:ml-12">
            {session ? (
              <ProfileDropdown user={session.user!} />
            ) : (
              <form action={signin}>
                <button className="ml-8 inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600">
                  <FaGoogle />
                  <span>Login with Google</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
