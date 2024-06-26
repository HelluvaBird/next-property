import {
  InferInsertModel,
  InferSelectModel,
  relations,
  sql,
} from 'drizzle-orm';
import {
  pgTable,
  text,
  integer,
  timestamp,
  primaryKey,
  serial,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core';
import { AdapterAccount } from 'next-auth/adapters';

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const properties = pgTable('property', {
  id: serial('id').notNull().primaryKey(),
  ownerId: text('owner_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  name: varchar('name').notNull(),
  type: varchar('type').notNull(),
  description: text('description').notNull(),
  street: varchar('street').notNull(),
  city: varchar('city').notNull(),
  state: varchar('state').notNull(),
  zipcode: varchar('zipcode').notNull(),
  beds: integer('beds').notNull(),
  baths: integer('baths').notNull(),
  squareFeet: integer('square_feet').notNull(),
  amenities: text('amenities')
    .array()
    .default(sql`'{}'::text[]`),
  images: text('images')
    .array()
    .default(sql`'{}'::text[]`),
  nightlyRate: integer('nightly_rate'),
  weeklyRate: integer('weekly_rate'),
  monthlyRate: integer('monthly_rate'),
  isFeatured: boolean('is_featured').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const bookmarks = pgTable(
  'bookmarks',
  {
    userId: text('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    propertyId: integer('property_id')
      .references(() => properties.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (bookmark) => ({
    pk: primaryKey({ columns: [bookmark.userId, bookmark.propertyId] }),
  })
);

export const bookmarkPropertyInfo = relations(bookmarks, ({ one }) => ({
  propertyInfo: one(properties, {
    fields: [bookmarks.propertyId],
    references: [properties.id],
  }),
}));

export const propertyOwnerInfo = relations(properties, ({ one }) => ({
  ownerInfo: one(users, {
    fields: [properties.ownerId],
    references: [users.id],
  }),
}));

export const propertyBookmarks = relations(properties, ({ many }) => ({
  bookmarks: many(bookmarks),
}));

export type SelectProperty = InferSelectModel<typeof properties>;
export type InsertProperty = InferInsertModel<typeof properties>;
export type SelectBookmarks = InferSelectModel<typeof bookmarks>;
