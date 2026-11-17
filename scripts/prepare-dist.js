const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
const excludedNames = new Set([
  '.env',
  '.git',
  '.gitignore',
  '.vercel',
  'dist',
  'node_modules',
  'public',
  'package-lock.json',
  'package.json',
  'README.md',
  'scripts',
  'src',
  'vercel.json'
]);
const excludedExtensions = new Set(['.log']);

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (excludedNames.has(entry.name)) continue;
  if (entry.name.startsWith('.env.')) continue;
  if (excludedExtensions.has(path.extname(entry.name).toLowerCase())) continue;
  fs.cpSync(path.join(root, entry.name), path.join(output, entry.name), { recursive: true });
}
