import './envConfig';
import { db } from './drizzle';

import { properties as drizzleProperties } from './schema';
import { sql } from 'drizzle-orm';

const ownerId = process.env.SEED_DB_OWNERID ?? 'ENTER YOUR OWNERID HERE';

const properties = [
  {
    ownerId,
    name: 'Boston Commons Retreat',
    type: 'Apartment',
    description:
      'This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.',
    street: '120 Tremont Street',
    city: 'Boston',
    state: 'MA',
    zipcode: '02108',

    beds: 2,
    baths: 1,
    squareFeet: 1500,
    amenities: [
      'Wifi',
      'Full kitchen',
      'Washer & Dryer',
      'Free Parking',
      'Hot Tub',
      '24/7 Security',
      'Wheelchair Accessible',
      'Elevator Access',
      'Dishwasher',
      'Gym/Fitness Center',
      'Air Conditioning',
      'Balcony/Patio',
      'Smart TV',
      'Coffee Maker',
    ],

    weeklyRate: 1100,
    monthlyRate: 4200,

    images: [
      'next-property/property-1-1_kzwyks',
      'next-property/property-1-2_r5nfkj',
      'next-property/property-1-3_ti925u',
      'next-property/property-1-4_zkv2lx',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Cozy Downtown Loft',
    type: 'Apartment',
    description: 'A cozy downtown loft with great city views.',
    street: '45 Main Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    beds: 1,
    baths: 1,
    squareFeet: 1800,
    amenities: [
      'Wifi',
      'Full kitchen',
      'Washer & Dryer',
      'Free Parking',
      'Hot Tub',
      '24/7 Security',
      'Wheelchair Accessible',
      'Elevator Access',
      'Dishwasher',
      'High-Speed Internet',
      'Air Conditioning',
      'Smart TV',
      'Outdoor Grill/BBQ',
    ],

    weeklyRate: 1000,
    monthlyRate: 4000,

    images: [
      'next-property/property-2-1_p7taha',
      'next-property/property-2-2_wvl4vl',
      'next-property/property-2-3_hk00bd',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Luxury Condo with a View',
    type: 'Condo',
    description:
      'Experience luxury in this stunning condo with breathtaking views.',

    street: '500 Lux Lane',
    city: 'Los Angeles',
    state: 'CA',
    zipcode: '90001',

    beds: 3,
    baths: 2,
    squareFeet: 2200,
    amenities: [
      'Wifi',
      'Full kitchen',
      'Washer & Dryer',
      'Free Parking',
      'Hot Tub',
      '24/7 Security',
      'Wheelchair Accessible',
      'Elevator Access',
      'Dishwasher',
      'Swimming Pool',
      'Gym/Fitness Center',
      'Air Conditioning',
      'Smart TV',
      'Coffee Maker',
    ],

    nightlyRate: 200,
    weeklyRate: 750,
    monthlyRate: 3300,

    images: [
      'next-property/property-3-1_pbo846',
      'next-property/property-3-2_kbsgbc',
      'next-property/property-3-3_b9ahuu',
      'next-property/property-3-4_ue46lb',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Charming Cottage Getaway',
    type: 'Cottage Or Cabin',
    description: 'Escape to this charming cottage for a peaceful retreat.',
    street: '123 Countryside Lane',
    city: 'Austin',
    state: 'TX',
    zipcode: '78701',

    beds: 1,
    baths: 1,
    squareFeet: 900,
    amenities: [
      'Fireplace',
      'Outdoor Grill/BBQ',
      'Balcony/Patio',
      'Coffee Maker',
    ],
    weeklyRate: 2000,

    images: [
      'next-property/property-4-1_zf1qco',
      'next-property/property-4-2_nyj8g1',
      'next-property/property-4-3_bb4zjn',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Modern Downtown Studio',
    type: 'Studio',
    description: 'Stay in style in this modern downtown studio apartment.',
    street: '75 Urban Avenue',
    city: 'Chicago',
    state: 'IL',
    zipcode: '60601',

    beds: 1,
    baths: 1,
    squareFeet: 900,
    amenities: [
      'High-Speed Internet',
      'Smart TV',
      'Air Conditioning',
      'Gym/Fitness Center',
      'Outdoor Grill/BBQ',
    ],

    weeklyRate: 1100,
    monthlyRate: 4200,

    images: [
      'next-property/property-5-1_lwgiuq',
      'next-property/property-5-2_j67zoz',
      'next-property/property-5-3_vxp1lq',
      'next-property/property-5-4_lvhhhj',
    ],
    isFeatured: true,
  },
  {
    ownerId,
    name: 'Seaside Retreat',
    type: 'House',
    description: 'Escape to this seaside house for a relaxing getaway.',

    street: '456 Oceanfront Drive',
    city: 'Miami',
    state: 'FL',
    zipcode: '33101',

    beds: 4,
    baths: 3,
    squareFeet: 2800,
    amenities: [
      'Beach Access',
      'Swimming Pool',
      'Balcony/Patio',
      'Smart TV',
      'Outdoor Grill/BBQ',
    ],

    nightlyRate: 500,
    weeklyRate: 2500,

    images: [
      'next-property/property-6-1_f4l07h',
      'next-property/property-6-2_t0n3xb',
      'next-property/property-6-3_yute5y',
    ],
    isFeatured: true,
  },
  {
    ownerId,
    name: 'Rustic Cabin in the Woods',
    type: 'Cottage Or Cabin',
    description: 'Experience nature in this cozy rustic cabin.',

    street: '789 Forest Lane',
    city: 'Denver',
    state: 'CO',
    zipcode: '80201',

    beds: 2,
    baths: 1,
    squareFeet: 1100,
    amenities: [
      'Fireplace',
      'Outdoor Grill/BBQ',
      'Hiking Trails Access',
      'Pet-Friendly',
    ],

    nightlyRate: 475,
    weeklyRate: 2000,

    images: [
      'next-property/property-7-1_ysdnkh',
      'next-property/property-7-2_f9hbt3',
      'next-property/property-7-3_j5m6vc',
      'next-property/property-7-4_ep6a1k',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Ski-In/Ski-Out Chalet',
    type: 'Chalet',
    description: 'Hit the slopes from this cozy ski-in/ski-out chalet.',

    street: '321 Mountain Road',
    city: 'Aspen',
    state: 'CO',
    zipcode: '81611',

    beds: 3,
    baths: 2,
    squareFeet: 1800,
    amenities: [
      'Ski Equipment Storage',
      'Fireplace',
      'Balcony/Patio',
      'Smart TV',
    ],

    nightlyRate: 300,
    weeklyRate: 1100,

    images: [
      'next-property/property-8-1_ygo6lp',
      'next-property/property-8-2_w89pxn',
      'next-property/property-8-3_vgxp4u',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Mountain View Retreat',
    type: 'House',
    description: 'Enjoy stunning mountain views from this spacious retreat.',

    street: '600 Summit Drive',
    city: 'Boulder',
    state: 'CO',
    zipcode: '80301',

    beds: 4,
    baths: 3,
    squareFeet: 2400,
    amenities: [
      'Mountain View',
      'Hiking Trails Access',
      'Air Conditioning',
      'Smart TV',
      'Outdoor Grill/BBQ',
    ],

    weeklyRate: 1000,
    monthlyRate: 3800,

    images: [
      'next-property/property-9-1_kq3ega',
      'next-property/property-9-2_jgsrkt',
      'next-property/property-9-3_qpxxnn',
    ],
    isFeatured: false,
  },
  {
    ownerId,
    name: 'Historic Downtown Loft',
    type: 'Apartment',
    description:
      'Step back in time with a stay in this historic downtown loft.',

    street: '123 History Lane',
    city: 'Philadelphia',
    state: 'PA',
    zipcode: '19101',

    beds: 2,
    baths: 1,
    squareFeet: 1200,
    amenities: [
      'High-Speed Internet',
      'Air Conditioning',
      'Smart TV',
      'Coffee Maker',
    ],

    weeklyRate: 550,
    monthlyRate: 2100,

    images: [
      'next-property/property-10-1_teq07k',
      'next-property/property-10-2_oiky8i',
      'next-property/property-10-3_hzazr0',
    ],
    isFeatured: false,
  },
];

async function seedDB() {
  await db.delete(drizzleProperties);

  await db.execute(sql`alter sequence property_id_seq restart with 1`);

  await db.insert(drizzleProperties).values(properties);
}

seedDB();
