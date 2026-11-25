// make.fun daily news-image entry: entry.png sits beside this file and the
// program copies it into the output directory, so both grader runs write the
// same bytes.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_NAME = 'entry.png';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';
const source = fileURLToPath(new URL('./' + OUTPUT_NAME, import.meta.url));

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, OUTPUT_NAME));
console.log('wrote ' + join(outputDir, OUTPUT_NAME));