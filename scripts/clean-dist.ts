import fs from 'node:fs';
const target = process.argv;
// console.log(fs);
console.log(target);
fs.rmSync('dist', { recursive: true, force: true });

throw new Error('hehe');
