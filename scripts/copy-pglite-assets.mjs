import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Nitro bundles @electric-sql/pglite into one file and drops the sibling
// wasm/data the module loads via import.meta.url. Preview (no DATABASE_URL)
// boots PGLite and crashes without them. Neon deploys never open these files.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const destDir = join(root, ".vercel/output/functions/__server.func/_libs");
const srcDir = join(root, "node_modules/@electric-sql/pglite/dist");

if (!existsSync(destDir)) {
  console.log("[pglite] no server bundle yet, skip");
  process.exit(0);
}

for (const name of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
  const from = join(srcDir, name);
  if (!existsSync(from)) {
    console.error(`[pglite] missing ${from}`);
    process.exit(1);
  }
  copyFileSync(from, join(destDir, name));
}

console.log("[pglite] copied wasm and data next to the server bundle");
