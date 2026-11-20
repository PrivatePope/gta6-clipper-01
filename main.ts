// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: a GTA 6 clip cut by an AI
// agent that uses a GTA 6 moment as its hook and then pitches make.fun to
// the viewer, on screen, in the clip. This program does the one thing the
// grader needs — it copies VIDEO.json from the repository root to /output,
// where the gate reads the video's address and the house reads the video's
// views through the YouTube Data API. Nothing this program writes about
// the video is scored; the video is the entry.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
