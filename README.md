# Karis Technologies — Front End

Production front end for Karis Technologies Limited — _"Building intelligent systems for Africa."_
Next.js (App Router) + TypeScript + Tailwind CSS, built as modular components driven by typed data.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Node 18.17+ (or 20+) recommended.

## Architecture

```
app/
  layout.tsx          Root layout, font links, metadata
  page.tsx            Homepage — composes sections in order
  globals.css         Design tokens (CSS variables) + base styles
components/            Reusable UI, one section per file
  Nav, Hero, StatsBand, PlatformsGrid, PlatformPreview, SectorsStrip,
  Consulting, Insights, Footer (+ CtaBanner), Section, Button, Icon, mocks
data/                 Content as typed data — no copy hardcoded in JSX
  platforms.ts        The five platforms (grid)
  previews.ts         Tabbed platform-preview items + mock payloads
  content.ts          Stats, sectors, consulting, insights
lib/
  useCountUp.ts       IntersectionObserver count-up hook
tailwind.config.ts    Design tokens mapped to Tailwind utilities
```

### Design tokens — single source of truth

Colors, type, and spacing live as CSS variables in `app/globals.css` and are
mapped into Tailwind utilities in `tailwind.config.ts`. Change a token in those
two places and it propagates everywhere. The palette is intentionally limited to
the **cyan/teal family plus navy/paper neutrals** — no gold/purple/coral.

### Modularity

Platforms, preview tabs, sectors, consulting practices, and insights are all
defined as typed arrays in `data/`. Adding, removing, or reordering an item is a
**data edit only** — the shared components map over the arrays, so there is no
per-item JSX to touch.

### Client interactivity (only where needed)

Everything is server-rendered except three client islands marked `"use client"`:

- **`Nav`** — mobile hamburger toggle
- **`StatsBand`** — count-up numbers, triggered once on scroll into view via
  `IntersectionObserver`, eased (easeOutCubic), with a reduced-motion fallback
  that jumps to the final value
- **`PlatformPreview`** — the tabbed preview; single active tab, arrow-key
  navigation with roving `tabIndex`, `min-height` reserved on the panel so
  swapping tabs does not shift layout

### Accessibility

One `<h1>` (hero), `<h2>` per section, semantic `role="tablist"/"tab"/"tabpanel"`
wiring on the preview, visible focus rings on all interactive elements, and a
`prefers-reduced-motion` fallback for the counter and transitions.

### Responsive

Platform grid 5 → 3 → 2 → 1; stats 4 → 2; sector pills always wrap; preview
2-column → 1-column with the mockup below the text; mobile nav below 640px.

## Assumptions made

- **Homepage only** for this deliverable. Nav links use in-page anchors; the
  route folders `/platforms`, `/industries`, `/consulting` are referenced in the
  data (`href`) and can be added as `app/*/page.tsx` without touching components.
- **Fonts** (`Space Grotesk`, `Inter`) load via a `<link>` to Google Fonts.
  `optimizeFonts` is disabled in `next.config.mjs` so the build does not require
  network access; in a normal environment you can switch to `next/font/google`
  for self-hosting if preferred.
- **Copy** for a few supporting lines (preview feature bullets, insight
  headlines, footer blurb, CTA subline) was written to match the brief's tone.
  The Consulting section is deliberately kept grounded and practical.
- **Placeholder links** (`#`) on footer and CTA where no destination was
  specified. Contact email `info@karistech.com` carried over from the reference.
- The reference prototype's older five-color palette and two-column hero were
  **not** carried over — the prompt's spec (single accent family, text-only
  centered hero) governs.
- Next pinned to `14.2.35` (patched) rather than the reference's `14.2.5`.
```
