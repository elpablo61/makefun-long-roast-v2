import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (text.length === 0 || text.length > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${text.length}`);
}
writeFileSync(join(outDir, "entry.txt"), text + "\n");
