'use client';

import { useFormStatus } from 'react-dom';

export default function PropertyFormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="block w-full sm:ms-auto sm:max-w-52 rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10 disabled:bg-gray-500"
    >
      {pending ? (
        <div className="h-[24px] w-[24px] rounded-full border-[4px] border-t-rose-500 animate-spin max-w-7xl mx-auto"></div>
      ) : (
        'Add property'
      )}
    </button>
  );
}
