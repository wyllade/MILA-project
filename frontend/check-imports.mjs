import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const srcDir = new URL("src", import.meta.url).pathname;
let failed = false;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry !== "node_modules") walk(full);
    } else if (full.endsWith(".jsx") || full.endsWith(".js")) {
      checkFile(full);
    }
  }
}

function checkFile(file) {
  const src = readFileSync(file, "utf-8");
  const importRegex = /import\s*\{\s*([^}]+)\s*\}\s*from\s*["']react-icons\/fi["']/g;
  let match;
  while ((match = importRegex.exec(src)) !== null) {
    const names = match[1].split(",").map(n => n.trim()).filter(Boolean);
    const importLine = match[0];
    for (const name of names) {
      if (!src.slice(0, match.index).includes(name) && !src.slice(match.index + importLine.length).includes(name)) {
        console.error(`ERROR: ${file}: '${name}' imported but never used`);
        failed = true;
      }
    }
  }
}

walk(srcDir);
if (failed) process.exit(1);
