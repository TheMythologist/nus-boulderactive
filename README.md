# NUS BoulderActive 2026 — Competition Website

Official website for **NUS BoulderActive**, Singapore's premier bouldering competition,
presented by the NUS Climbing Club.

## Overview

The 2026 edition is presented in a fresh visual identity derived from the NUS Climbing Club
brand book. The site teases the upcoming competition (dates & venue to be announced) while
keeping the evergreen rules, formats and contact information available year-round.

## Brand & design system

The look is built directly from the brand book:

- **Palette** — Electric Blue `#012BFC`, Lime `#D0F537`, Off-white `#FEFFF2`, Ink `#0B0B0C`.
  Sections are colour-blocked (cream → blue → cream → ink) for a high-contrast, sporty rhythm.
- **Typography** — a single heavy grotesque, [Archivo](https://fonts.google.com/specimen/Archivo),
  weight-contrasted between oversized uppercase display headings and clean body copy.
- **Motifs** — the four-point **sparkle** graphic, numbered `(00X)` section indices, scrolling
  marquee tickers, brutalist hard-bordered cards, and duotone (grayscale + blue cast) photography.

Shared brand primitives live in `components/brand/` (`Sparkle`, `Marquee`, `SectionHeading`).
Design tokens and utilities are defined in `app/globals.css`.

## Tech stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI primitives**: shadcn/ui
- **Fonts**: `next/font` (Archivo)
- **Deployment**: Vercel

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Updating for the live event

When 2026 details are confirmed, update:

- `components/hero-section.tsx` — date / venue status line and CTAs.
- `components/event-info-section.tsx` — the "Dropping Soon" schedule teaser → full day-by-day schedule.
- `components/location-section.tsx` — replace the "Venue To Be Announced" panel with the confirmed venue (and map).
- `components/notification-manager.tsx` — registration reminders and their display window.
- `app/rules-and-formats/page.tsx` — confirm rule details for the edition.
