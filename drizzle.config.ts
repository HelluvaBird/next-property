import './envConfig';

import type { Config } from 'drizzle-kit';
export default {
  schema: './schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL!,
  },
} satisfies Config;
