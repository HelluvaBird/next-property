import { createNewProperty, updateProperty } from '@/app/action';
import { FaImage } from 'react-icons/fa6';
import PropertyFormSubmitButton from './PropertyFormSubmitButton';
import { SelectProperty } from '@/schema';

const amenities = [
  'Wifi',
  'High-Speed Internet',
  'Full kitchen',
  'Washer & Dryer',
  'Free Parking',
  'Beach Access',
  'Swimming Pool',
  'Hot Tub',
  '24/7 Security',
  'Wheelchair Accessible',
  'Elevator Access',
  'Dishwasher',
  'Gym/Fitness Center',
  'Air Conditioning',
  'Balcony/Patio',
  'Outdoor Grill/BBQ',
  'Fireplace',
  'Smart TV',
  'Coffee Maker',
  'Pet-Friendly',
  'Mountain View',
  'Hiking Trails Access',
  'Ski Equipment Storage',
];

type PropertyFormProps = {
  editProperty?: SelectProperty;
};

export default function PropertyForm({ editProperty }: PropertyFormProps) {
  const updatePropertyWithImages = updateProperty.bind(null, {
    images: editProperty?.images as string[],
    propertyId: editProperty?.id as number,
  });
  return (
    <form
      className="mt-8"
      action={editProperty ? updatePropertyWithImages : createNewProperty}
    >
      <div className="divide-y">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 pb-6">
          <label htmlFor="type">Property Type</label>
          <select
            name="type"
            id="type"
            defaultValue={editProperty?.type ?? ''}
            required
            className="sm:col-span-2 max-w-md w-full border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          >
            <option value="" disabled>
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
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={editProperty?.name ?? ''}
            required
            placeholder="Cozy Bungaloo, Modern City Apartment"
            className="sm:col-span-2 max-w-xl w-full border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            name="street"
            id="street"
            defaultValue={editProperty?.street ?? ''}
            required
            className="sm:col-span-2 max-w-xl w-full border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={editProperty?.city ?? ''}
            required
            className="sm:col-span-2 max-w-md w-full border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="state">State&nbsp;/&nbsp;Province</label>
          <input
            type="text"
            name="state"
            id="state"
            defaultValue={editProperty?.state ?? ''}
            required
            className="sm:col-span-2 max-w-md justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="zipcode">Zip&nbsp;/&nbsp;Postal&nbsp;code</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            defaultValue={editProperty?.zipcode ?? ''}
            required
            className=" sm:col-span-2 max-w-md justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="description" className=" self-start">
            Description
          </label>
          <textarea
            rows={5}
            name="description"
            id="description"
            defaultValue={editProperty?.description ?? ''}
            required
            className="sm:col-span-2 max-w-xl justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
          <p className="self-start">Rates</p>
          <div className="sm:col-span-2 grid gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="nightly">Nightly</label>
              <input
                type="text"
                name="nightly"
                id="nightly"
                defaultValue={editProperty?.nightlyRate ?? ''}
                className="flex-1 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="weekly">Weekly</label>
              <input
                type="text"
                name="weekly"
                id="weekly"
                defaultValue={editProperty?.weeklyRate ?? ''}
                required
                className="flex-1 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="monthly">Monthly</label>
              <input
                type="text"
                name="monthly"
                id="monthly"
                defaultValue={editProperty?.monthlyRate ?? ''}
                className="flex-1 max-w-sm border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="beds">Beds</label>
          <input
            type="text"
            name="beds"
            id="beds"
            defaultValue={editProperty?.beds ?? ''}
            required
            className="sm:col-span-2 max-w-sm justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="baths">Baths</label>
          <input
            type="text"
            name="baths"
            id="baths"
            defaultValue={editProperty?.baths ?? ''}
            required
            className="sm:col-span-2 max-w-sm justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center justify-items-start sm:gap-4 py-6">
          <label htmlFor="squareFeet">Square Feet</label>
          <input
            type="text"
            name="squareFeet"
            id="squareFeet"
            defaultValue={editProperty?.squareFeet ?? ''}
            required
            className="sm:col-span-2 max-w-sm justify-self-stretch border border-gray-300 rounded-md p-2 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none focus:border-rose-500 focus:ring-rose-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
          <p className=" self-start">Amenities</p>
          <div className="sm:col-span-2 flex flex-wrap gap-4">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 bg-rose-100 px-3 py-1 rounded-lg"
              >
                <input
                  type="checkbox"
                  name="amenities"
                  id={amenity.toLowerCase()}
                  defaultChecked={editProperty?.amenities?.includes(amenity)}
                  value={amenity}
                  className="size-4 accent-rose-500 outline-none ring-2 ring-offset-2 ring-offset-transparent ring-transparent focus-visible:ring-rose-500 focus-visible:ring-offset-rose-100"
                />
                <label
                  htmlFor={amenity.toLowerCase()}
                  className="text-rose-950"
                >
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 items-center sm:gap-4 py-6">
          <p>Images:</p>
          <div className="sm:col-span-2">
            <div className="max-w-2xl border border-dashed border-rose-500 h-80 rounded-lg bg-gray-100 grid place-items-center">
              <div>
                <FaImage className="size-10 fill-rose-500 mx-auto" />
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-gray-100 font-semibold text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-500 focus-within:ring-offset-2 hover:text-rose-500"
                >
                  <span>Upload images</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    className="sr-only"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid pt-6">
          <PropertyFormSubmitButton
            text={editProperty ? 'Update property' : 'Add property'}
          />
        </div>
      </div>
    </form>
  );
}
