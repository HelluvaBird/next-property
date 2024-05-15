'use client';

export default function PropertyForm() {
  return (
    <form className="space-y-4 mt-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        >
          <option selected disabled>
            Please select a type
          </option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Room">Room</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="zipcode">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="">Description</label>
        <textarea
          rows={5}
          name="zipcode"
          id="zipcode"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="beds">Beds</label>
        <input
          type="text"
          name="beds"
          id="beds"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="baths">Baths</label>
        <input
          type="text"
          name="baths"
          id="baths"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] items-center sm:gap-4">
        <label htmlFor="squareFeet">Square Feet</label>
        <input
          type="text"
          name="squareFeet"
          id="squareFeet"
          className="border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
        />
      </div>
      <div>
        <p>Amenities:</p>
      </div>
      <div>
        <p>Images:</p>
      </div>
      <div className="grid">
        <button className="block w-full sm:inline-block sm:w-auto sm:ms-auto rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">
          Add property
        </button>
      </div>
    </form>
  );
}
