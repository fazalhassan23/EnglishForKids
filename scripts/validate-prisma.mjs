import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const schemaValidationUrl =
  process.env.DATABASE_URL?.trim() || "postgresql://localhost:5432/schema_validation";
const prismaCliPath = fileURLToPath(
  new URL("../node_modules/prisma/build/index.js", import.meta.url),
);

execFileSync(process.execPath, [prismaCliPath, "validate"], {
  env: { ...process.env, DATABASE_URL: schemaValidationUrl },
  stdio: "inherit",
});
