import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const schemaValidationUrl =
  process.env.DATABASE_URL ??
  "postgresql://validation_user:validation_password@localhost:5432/english_learning_platform";
const prismaCliPath = fileURLToPath(
  new URL("../node_modules/prisma/build/index.js", import.meta.url),
);

execFileSync(process.execPath, [prismaCliPath, "validate"], {
  env: { ...process.env, DATABASE_URL: schemaValidationUrl },
  stdio: "inherit",
});
