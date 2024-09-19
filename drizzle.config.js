/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-content_owner:q0r9WDbvMGae@ep-orange-bonus-a56upmkm.us-east-2.aws.neon.tech/AI-content-generator?sslmode=require',
    }
  };