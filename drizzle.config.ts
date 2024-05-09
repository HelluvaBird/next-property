import './envConfig';

import type { Config } from 'drizzle-kit';
export default {
  schema: './schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.AUTH_DRIZZLE_URL!,
  },
} satisfies Config;
