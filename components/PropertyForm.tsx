'use client';

export default function PropertyForm() {
  return (
    <form className="mt-8 divide-y">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 pb-6">
        <label htmlFor="type">Property Type</label>
        <select
          name="type"
          id="type"
          defaultValue="Please select a type"
          className="sm:col-span-2 max-w-md border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        >
          <option disabled>Please select a type</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Room">Room</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Cozy Bungaloo, Modern City Apartment"
          className="sm:col-span-2 max-w-xl border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          name="street"
          id="street"
          className="sm:col-span-2 max-w-xl border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          className="sm:col-span-2 max-w-lg border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="state">State&nbsp;/&nbsp;Province</label>
        <input
          type="text"
          name="state"
          id="state"
          className="sm:col-span-2 max-w-md border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="zipcode">Zip&nbsp;/&nbsp;Postal&nbsp;code</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          className=" sm:col-span-2 max-w-md border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="">Description</label>
        <textarea
          rows={5}
          name="zipcode"
          id="zipcode"
          className="sm:col-span-2 max-w-xl border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          className="sm:col-span-2 border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="beds">Beds</label>
        <input
          type="text"
          name="beds"
          id="beds"
          className="sm:col-span-2 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="baths">Baths</label>
        <input
          type="text"
          name="baths"
          id="baths"
          className="sm:col-span-2 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <label htmlFor="squareFeet">Square Feet</label>
        <input
          type="text"
          name="squareFeet"
          id="squareFeet"
          className="sm:col-span-2 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <p>Amenities:</p>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
        <p>Images:</p>
      </div>
      <div className="grid pt-6">
        <button className="block w-full sm:inline-block sm:w-auto sm:ms-auto rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">
          Add property
        </button>
      </div>
    </form>
  );
}
