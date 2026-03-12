/**
 * setup-uswds.mjs
 *
 * Copies USWDS static assets (CSS, JS, fonts, images) from node_modules
 * into the public/uswds directory so they are available at build and dev time.
 *
 * Run: node scripts/setup-uswds.mjs
 */

import { cpSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const uswdsDist = resolve(root, "node_modules/@uswds/uswds/dist");
const publicUswds = resolve(root, "public/uswds");

const copies = [
  { src: `${uswdsDist}/css/uswds.min.css`, dest: `${publicUswds}/css/uswds.min.css` },
  { src: `${uswdsDist}/js/uswds-init.min.js`, dest: `${publicUswds}/js/uswds-init.min.js` },
  { src: `${uswdsDist}/js/uswds.min.js`, dest: `${publicUswds}/js/uswds.min.js` },
  { src: `${uswdsDist}/fonts`, dest: `${publicUswds}/fonts`, recursive: true },
  { src: `${uswdsDist}/img`, dest: `${publicUswds}/img`, recursive: true },
];

for (const { src, dest, recursive } of copies) {
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, recursive ? { recursive: true } : undefined);
  console.log(`Copied: ${src.replace(root, ".")} → ${dest.replace(root, ".")}`);
}

console.log("✅  USWDS assets ready in public/uswds/");
