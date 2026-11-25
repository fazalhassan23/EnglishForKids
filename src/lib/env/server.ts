import "server-only";
import { z } from "zod";

const serverEnvironmentSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(32),
});

export function getServerEnvironment() {
  return serverEnvironmentSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
  });
}
