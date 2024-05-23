import ActiveProfileLink from '@/components/ActiveProfileLink';
import { FaBookmark, FaCircleUser, FaHouse } from 'react-icons/fa6';

type ProfileLayoutProps = {
  profile: React.ReactNode;
};

export default function ProfileLayout({ profile }: ProfileLayoutProps) {
  return (
    <div className="lg:flex gap-16">
      <h1 className="sr-only">Your Profile</h1>
      <aside className="py-4 lg:py-20 flex overflow-x-auto border-b border-gray-900/5 lg:block lg:border-b-0 lg:flex-none lg:w-64">
        <nav className="px-4 sm:px-6 lg:px-0 flex-none">
          <ul
            role="list"
            className="flex lg:flex-col whitespace-nowrap gap-x-3 gap-y-1"
          >
            <li>
              <ActiveProfileLink href="/profile" active={null}>
                <FaCircleUser className="size-6 shrink-0" />
                Profile
              </ActiveProfileLink>
            </li>
            <li>
              <ActiveProfileLink href="/profile/properties" active="properties">
                <FaHouse className="size-6 shrink-0" />
                Properties
              </ActiveProfileLink>
            </li>
            <li>
              <ActiveProfileLink href="/profile/bookmarks" active="bookmarks">
                <FaBookmark className="size-6 shrink-0" />
                Bookmarks
              </ActiveProfileLink>
            </li>
          </ul>
        </nav>
      </aside>
      <article className="py-16 lg:py-20 lg:flex-auto">{profile}</article>
    </div>
  );
}
