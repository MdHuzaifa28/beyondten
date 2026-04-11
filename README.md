# beyondten

Enterprise-grade engineering studio website. Single-page React + Vite + Tailwind v4, built on a centralized design system.

---

## Quick start

```bash
npm install
npm run dev
```

> **Important — copy your image assets:**
> Drop the original `LibraOS.png`, `dotnovexure.png`, and `logo.png` from your old `public/` folder into this project's `public/` folder. They are referenced from `Work.jsx` and the navbar. The build will work without them (graceful fallback shows the project name in mono type), but the case-study cards look better with the screenshots in place.

---

## What changed

This is a complete revamp from the previous codebase. Same business, repositioned and rebuilt.

### Positioning
- **Before:** "Launch your SaaS website/app in 10 days" (speed-first, indie energy)
- **After:** "Engineering velocity for ambitious product teams" (quality-first, enterprise gravity, with the 10-day MVP intact as a structural proof point in the hero stat panel and process timeline)

### Visual direction
IBM Carbon meets Salesforce Lightning meets Stripe. Specifically:
- **Typography:** IBM Plex Sans (display + body) and IBM Plex Mono (technical accents). Loaded from Google Fonts in `index.html`.
- **Color:** Deep ink navy (`#0a0e1a`) primary, Carbon-blue accent (`#0f62fe`), warm off-white background (`#fafbfc`). No purple gradients, no soft pastels.
- **Layout:** Wide 1280px container with 12-col grids. The old site was mobile-card-width (~512px) which read indie. This reads enterprise.
- **Geometry:** Sharp 2–8px corner radii instead of the old 40px blob radii. Hairline borders (1px subtle) instead of soft drop shadows.
- **Texture:** Architectural grid background in the hero and contact sections, subtle and masked.

### Structure
```
Hero          → Headline + stat-panel sidebar
TrustBar      → Quality / Expertise / Velocity pillars + stack marquee
Capabilities  → Web Platform + Mobile MVP cards (replaces WhatWeBuild)
Process       → 10-day sprint timeline as engineering schedule
Work          → Case studies as window-chrome cards (LibraOS, dotnovexure)
Testimonials  → Client quotes in editorial format (replaces ClientReviews)
FAQ           → Two-column accordion with mono-numbered questions
Contact       → Dark inverse with channel list (replaces Footer's CTA role)
Footer        → Slim legal footer
```

The original `OnGoing.jsx` "current sprint" tracker was folded into the hero stat panel — it lives there as the slot capacity meter, which keeps it visible from the first screen instead of needing a dedicated section.

---

## Design system

A single source of truth lives in two places:

### 1. CSS variables — `src/index.css`
All colors, spacing, typography, radii, shadows, motion. Used by every component via `var(--bt-*)`.

```css
--bt-ink-900: #0a0e1a       /* primary text */
--bt-accent-500: #0f62fe    /* primary CTA / Carbon blue */
--bt-surface-page: #fafbfc  /* page background */
--bt-border-subtle: #e6e8ec /* hairline borders */
--bt-radius-sm: 4px         /* default radius */
--bt-font-display: "IBM Plex Sans"
--bt-font-mono: "IBM Plex Mono"
```

Plus utility classes: `.bt-container`, `.bt-section`, `.bt-eyebrow`, `.bt-display-1/2/3`, `.bt-lead`, `.bt-card`, `.bt-mono`, `.bt-grid-bg`.

### 2. JS tokens — `src/lib/tokens.js`
Mirror of the CSS tokens, for cases where a JS value is needed (e.g., chart colors). Prefer CSS vars for actual styling.

### Primitives — `src/components/ui/`
- **`Button.jsx`** — variants: `primary | secondary | ghost | inverse | inverseGhost`, sizes: `sm | md | lg`, with icon slots
- **`Layout.jsx`** — `<Container>`, `<Section tone="page|sunken|raised|inverse">`, `<Eyebrow>`, `<SectionHeader eyebrow title description />`
- **`Badge.jsx`** — variants: `neutral | accent | success | warning | inverse | outline`, optional `withDot` and `pulse`

### Hook — `src/hooks/useReveal.js`
Replaces the duplicated `IntersectionObserver` blocks that were in every section of the old codebase.

```jsx
const { ref, isVisible } = useReveal();
return <div ref={ref} className={isVisible ? "..." : "..."} />;
```

Use `staggerDelay(index)` for staggered child reveals.

---

## Adding a new section

1. Create `src/components/sections/MySection.jsx`
2. Use `<Section id="my-section" tone="page">` and `<Container>`
3. Use `<SectionHeader eyebrow="Eyebrow text" title="..." description="..." />`
4. Use the `useReveal` hook for entrance animations
5. Use `<Button>`, `<Badge>`, and `.bt-card` instead of inline classes
6. Import in `App.jsx`
7. Add the section ID to `src/hooks/usePageSEO.js`

Never hard-code colors, font sizes, or spacing — always use CSS variables.

---

## Stack

- React 19, Vite 8, Tailwind CSS v4
- `lucide-react` for icons, `react-icons` for brand marks
- IBM Plex Sans / Mono via Google Fonts

---

## File map

```
beyondten/
├── index.html                          ← font links + SEO meta + JSON-LD
├── package.json
├── vite.config.js
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── LibraOS.png         ← copy from old project
│   ├── dotnovexure.png     ← copy from old project
│   └── logo.png            ← copy from old project
└── src/
    ├── main.jsx
    ├── App.jsx                         ← root composition
    ├── index.css                       ← DESIGN SYSTEM (single source of truth)
    ├── lib/
    │   └── tokens.js                   ← JS-side tokens (mirrors CSS vars)
    ├── hooks/
    │   ├── useReveal.js                ← centralized scroll-reveal
    │   └── usePageSEO.js               ← per-section title/meta updates
    └── components/
        ├── Navbar.jsx
        ├── ui/
        │   ├── Button.jsx              ← Button primitive
        │   ├── Layout.jsx              ← Container, Section, Eyebrow, SectionHeader
        │   └── Badge.jsx               ← Badge primitive
        └── sections/
            ├── Hero.jsx
            ├── TrustBar.jsx
            ├── Capabilities.jsx
            ├── Process.jsx
            ├── Work.jsx
            ├── Testimonials.jsx
            ├── FAQ.jsx
            ├── Contact.jsx
            └── Footer.jsx
```
