'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type ActiveProfileLinkProps = {
  children: React.ReactNode;
  href: string;
  active: string | null;
};

export default function ActiveProfileLink({
  children,
  href,
  active,
}: ActiveProfileLinkProps) {
  const segment = useSelectedLayoutSegment('profile');
  const activeLink = segment === active ? 'bg-gray-50 text-rose-500' : '';

  return (
    <Link
      href={href}
      className={`${activeLink} flex gap-3 rounded-lg py-2 ps-2 pe-3 text-sm leading-6 font-semibold transition-colors hover:bg-gray-50 hover:text-rose-500`}
    >
      {children}
    </Link>
  );
}
