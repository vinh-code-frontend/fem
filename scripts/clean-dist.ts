import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';

const cleanDist = () => {
  const target = process.argv;
  const flag = target[2];

  const dir = flag ? path.join('dist', flag) : 'dist';

  if (!fs.existsSync(dir)) {
    console.log(chalk.yellow(`Folder "${dir}" does not exist.`));
    process.exit(1);
  }
  console.log(chalk.blue(`Cleaning folder "${dir}"..............`));
  console.time(chalk.green(`Folder "${dir}" was removed in`));
  fs.rmSync(dir, { recursive: true, force: true });
  console.timeEnd(chalk.green(`Folder "${dir}" was removed in`));
};

cleanDist();
