import { getProfileDetails } from '@/app/action';

export default async function Hello() {
  const user = await getProfileDetails();
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 className="leading-7 font-semibold text-base text-gray-900">
        Profile
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <dl className="mt-8 border-t border-gray-200 text-sm leading-6 space-y-6 divide-y divide-gray-100">
        <div className="pt-6 sm:flex">
          <dt className="font-medium sm:flex-none sm:w-64 sm:pe-6 text-gray-900">
            Full name
          </dt>
          <dd className="mt-1 sm:mt-0 sm:flex-auto">{user?.name}</dd>
        </div>
        <div className="pt-6 sm:flex">
          <dt className="font-medium sm:flex-none sm:w-64 sm:pe-6 text-gray-900">
            Email
          </dt>
          <dd className="mt-1 sm:mt-0 sm:flex-auto">{user?.email}</dd>
        </div>
      </dl>
    </div>
  );
}
