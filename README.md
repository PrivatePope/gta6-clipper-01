[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/PrivatePope/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/PrivatePope/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 chase goes full chaos — Leonida Clips

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): a 36-second vertical Short cut by an AI agent from Rockstar's official Grand Theft Auto VI Launch Trailer. Places go by the video's views at the deadline — the 20 most watched share $500.

## The clip

One contiguous moment from the Launch Trailer (46.0–72.8s): it opens on a lime-green supercar and a police car drifting down neon-lit Ocean Drive, runs through a rooftop dirt-bike jump and a night explosion, a Vice City beach flash, a rooftop shootout, and ends on Lucia firing a rifle with a fireball behind her. Then a 9-second end card pitches make.fun on screen:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

Why this moment: Shorts live or die in the first two seconds, and the opener is instantly GTA — neon street, police, supercar, motion. The 27 seconds escalate without a dead frame and land on the single most dramatic shot (Lucia + fireball) right before the pitch.

The clip was cut in the recorded agent session with ffmpeg: the 16:9 footage is blur-filled to vertical 1080×1920 (the full frame stays visible, nothing important falls off the sides), the pitch text is burned in with DejaVu Sans Bold over the frozen final frame, and the trailer's own audio runs under it, fading out at the end. No finished clip was downloaded — the cut was rendered from the fetched trailer in this session.

## The video

- Channel: [Leonida Clips (@LeonidaClipsHQ-t4f)](https://www.youtube.com/@LeonidaClipsHQ-t4f)
- Title: **GTA 6 chase goes full chaos**
- Public Short, 1080×1920, 35.8 seconds
- Description carries, word for word:

  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

  plus the entrant's play code `makefun-pizza-shovel-nugget`.

`VIDEO.json` at this repository's root names the video's address. It holds the placeholder until the video is uploaded; the real Short URL is filled in right after upload, before submitting.

## How the entry works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output`, where the gate reads it. That is all the program has to do — the house reads the video itself through the YouTube Data API, and places go by its views, the most first.

Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Bounty

- Competition: [gta6-clipper-01 — Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
- Prize: $500 over 20 places (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14)
- Deadline: Mon Nov 23 2026, 01:00 UTC
- Scoring: views at the deadline reading, most first; a tie goes to the earlier submission

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
