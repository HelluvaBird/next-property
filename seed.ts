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

    images: ['a1.jpg', 'a2.jpg', 'a3.jpg'],
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

    images: ['b1.jpg', 'b2.jpg', 'b3.jpg'],
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

    images: ['c1.jpg', 'c2.jpg', 'c3.jpg'],
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

    images: ['d1.jpg', 'd2.jpg', 'd3.jpg'],
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

    images: ['e1.jpg', 'e2.jpg', 'e3.jpg'],
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

    images: ['f1.jpg', 'f2.jpg', 'f3.jpg'],
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

    images: ['g1.jpg', 'g2.jpg', 'g3.jpg'],
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

    images: ['h1.jpg', 'h2.jpg', 'h3.jpg'],
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

    images: ['i1.jpg', 'i2.jpg', 'i3.jpg'],
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

    images: ['j1.jpg', 'j2.jpg', 'j3.jpg'],
    isFeatured: false,
  },
];

async function seedDB() {
  await db.delete(drizzleProperties);

  await db.execute(sql`alter sequence property_id_seq restart with 1`);

  await db.insert(drizzleProperties).values(properties);
}

seedDB();
