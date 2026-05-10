# tamazyan-hovik — Rebrand Design Spec

**Date:** 2026-05-10
**Project:** Personal site rebrand for Hovik Tamazyan (Product Leader)
**Source site:** https://tamazyanhovik.pm
**Target deploy:** `tamazyan-hovik.ashoon.online` (initial), `tamazyanhovik.pm` + `tamazyanhovik.com` (custom domains added later — app must be URL-agnostic)
**Repo:** `Hovakimyan/tamazyan-hovik`

---

## 1. Goal

Rebuild Hovik's existing personal site under a new brand identity ("Human-Centered Leader") while preserving the substance (expertise, certifications, contact). Match the locked-in `/websites/` convention so deploy and tooling stay identical to siblings (`travel-with-liana`, `khachatryans`, `gharibyan_photo`).

**Out of scope:**
- The `/chat` page from the existing site (Google OAuth + AI assistant). Dropped this iteration.
- Form-based contact (no Resend/email backend yet — mailto + booking link only).
- Multi-language. English only.
- CMS. Content lives in code.

---

## 2. Brand system

Sourced verbatim from the user-provided brand board.

### Concept
**Human-Centered Leader.** Empathy. Collaboration. Meaningful products.

### Voice
Confident, thoughtful, and human. Clear and direct. No fluff, just value. First-person ("I lead…", "I bring…").

### Typography
| Role | Font | Weights | Source |
|---|---|---|---|
| Display / headings | **Playfair Display** | 400, 500, 600, 700 | `next/font/google` |
| Body / UI | **Manrope** | 300, 400, 500, 600, 700 | `next/font/google` |

Heading scale (mobile → desktop, fluid via `clamp`):
- `h1` 40 → 72px, Playfair 600, tracking tight
- `h2` 30 → 48px, Playfair 600
- `h3` 22 → 28px, Playfair 500
- Body 16 → 18px, Manrope 400, line-height 1.6
- Eyebrow / kicker 12px Manrope 600 uppercase, tracking 0.16em, coral

### Color tokens
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F9F7F4` | Page background (cream) |
| `--bg-alt` | `#FFFFFF` | Card surfaces |
| `--divider` | `#E2E8F0` | Hairlines, card borders |
| `--ink` | `#0F172A` | Primary text, dark sections |
| `--ink-2` | `#64748B` | Secondary text |
| `--accent` | `#FF6B6B` | Coral — CTAs, eyebrows, underlines, focus rings |
| `--accent-soft` | `#FFE7E4` | Coral tint for badges/highlights |
| `--success` | `#22C55E` | Green — used sparingly for positive metrics |

Dark sections (rare, used for contrast moments like a single quote panel) flip: `--ink` background, cream text, coral accent kept.

### Iconography
Single-stroke line icons (~1.5px), rounded caps. No filled glyphs, no emoji in production copy. Library: inline SVGs (no extra dependency). Brand-kit shows: target / users / compass / chart / shield — used as section markers.

### Imagery
- Existing portrait reused (`/public/images/hovik-portrait.jpg`), framed in a soft cream card with coral underline.
- No stock photos this round. Whitespace + typography do the heavy lifting.

### Components (matches the brand kit)
- **Primary button:** coral fill, white text, 8px radius, weight 600, 14px tracking 0.02em
- **Secondary button:** ink outline 1px, ink text, hover → ink fill / cream text
- **Card:** white surface, 1px `--divider`, 16px radius, 32px padding, optional coral or green icon chip top-left
- **Badge / tag:** soft pill, coral / slate / green variants
- **Step indicator:** numbered circles connected by hairline (Discover → Align → Build → Scale)
- **Link:** coral with arrow → on hover, underline offset 4px

---

## 3. Information architecture

```
/                     Home
/expertise            Expertise (4 capabilities, expanded)
/certifications       Certifications timeline (2019–2024)
/contact              Contact (email + booking)
```

**Removed from the source site:** `/chat`. Nav stays clean with 4 entries.

**SiteHeader nav:** Home · Expertise · Certifications · Contact + a coral "Let's talk" CTA on the right (links to `/contact`).
**SiteFooter:** Name + role · email link · LinkedIn placeholder (anchor exists, real URL added when provided) · year + "Built in Yerevan".

---

## 4. Page-by-page content + layout

### 4.1 Home `/`

Sections, top-down:

1. **Hero**
   - Eyebrow: "HELLO, I'M" (coral, kicker style)
   - H1: `Hovik Tamazyan` (Playfair, ink)
   - Subtitle: `Human-Centered Product Leader` (Manrope 500, ink-2)
   - Lead paragraph: *"Empathy. Collaboration. Meaningful products. I lead cross-functional teams to turn complex problems into products that create real value for people and businesses."*
   - Primary CTA: "Let's talk" → `/contact`
   - Secondary: "See expertise" → `/expertise`
   - Right side (desktop) / below (mobile): portrait card — soft cream background, photo with thin ink border, small leaf/plant motif (CSS-only ornament) bottom-left, coral underline beneath
2. **Brand essence quote panel** (dark)
   - Ink background, cream text
   - Large Playfair italic: *"Great products start with **people** and solve real problems."* (the word "people" coral)
   - Attribution mark: coral horizontal rule
3. **Expertise tiles (4)** — short summaries, links to `/expertise`
   - Product Strategy & Development · Market Intelligence & Positioning · Launch Excellence · User-Centric Design
   - Each: line icon (coral) → h3 → 1-sentence pitch → "Learn more →"
4. **Process band** — 4 numbered steps with hairline connector
   - 1. Discover · 2. Align · 3. Build · 4. Scale
5. **Brand values strip**
   - Eyebrow "WHAT I STAND FOR"
   - 5 values: Human · Collaborative · Approachable · Trustworthy · Impactful
   - Each: small icon + name + 1-line explainer (lifted from brand kit verbatim)
6. **Stats row** (3 cards)
   - `100+` partners served · `+17%` conversion lift · `+15%` user satisfaction
   - Cream cards, Playfair big number, Manrope label
7. **CTA banner** — "Got a product vision? Let's build it." → `/contact`

### 4.2 Expertise `/expertise`

- Page header: eyebrow "EXPERTISE" · H1 "What I bring to the table" · lead paragraph (verbatim from source)
- 4 capability sections (each is a wide card, alternating accent: coral → green → coral → green icon chip):
  1. **Product Strategy & Development** — full body copy from source · tags: `OKRs`, `Roadmaps`, `Agile`, `Multi-module platforms`
  2. **Market Intelligence & Positioning** — full body copy · tags: `Customer Dev`, `Competitive Analysis`, `Market Sizing`
  3. **Launch Excellence** — full body copy · tags: `GTM`, `Cross-functional`, `Mobile`, `New Markets`
  4. **User-Centric Design** — full body copy · tags: `Research`, `Workshops`, `Conversion Optimization`
- Closing CTA: "Discuss your product →" → `/contact`

### 4.3 Certifications `/certifications`

- Page header: eyebrow "CERTIFICATIONS" · H1 "Always learning, always growing" · lead paragraph from source
- Timeline component: vertical hairline (coral on desktop), 6 entries reverse-chronological:
  | Year | Certification | Issuer |
  |---|---|---|
  | 2024 | PSPO II – Professional Scrum Product Owner | Scrum.org |
  | 2024 | AI in Product Management | EPAM University |
  | 2023 | PSPO I – Professional Scrum Product Owner | Scrum.org |
  | 2022 | Product Management | EPAM University |
  | 2020–2021 | Product Management | Armenian Code Academy |
  | 2019 | Agile Project Management | IAB International Academy of Business |
- Each entry: year badge (coral) · cert title (Playfair) · issuer · 1-line summary (verbatim from source)
- Closing CTA: "Want to discuss how my experience can help your product succeed? Let's connect →"

### 4.4 Contact `/contact`

- Page header: eyebrow "GET IN TOUCH" · H1 "Let's build something amazing" · lead paragraph from source
- Two-card row:
  - **Schedule a meeting** — calendar icon · "Book a 30-minute call to discuss your project, challenges, and how we can work together to build something exceptional." · Primary CTA "Book a call" (link to placeholder Cal.com / Calendly URL — exposed as `BOOKING_URL` constant for easy swap; default `#booking`)
  - **Email me** — envelope icon · "Prefer email? Drop me a message and I'll get back within 24 hours." · `tamazyan.hovik@gmail.com` (mailto link)
- "What we can discuss" — 5 line items as a clean checklist with coral check marks:
  - Product strategy & roadmaps
  - Go-to-market planning
  - Team leadership & agile coaching
  - Technical debt & architecture
  - User research & UX optimization
- Footer-adjacent: location chip "Yerevan, Armenia · Open to remote"

### 4.5 not-found `/404`

Short branded page: Playfair "Page not found", Manrope copy, coral CTA back home.

---

## 5. Technical architecture

### Project layout (mirrors `travel-with-liana/`)

```
tamazyan-hovik/
├── app/
│   ├── layout.tsx            ← html shell, fonts (Playfair Display + Manrope), <SiteHeader/>, <SiteFooter/>, <Interactivity/>
│   ├── page.tsx              ← Home (server component composing section components)
│   ├── globals.css           ← brand tokens + @import "tailwindcss"
│   ├── icon.svg              ← favicon (coral monogram "HT")
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── components/
│   │   ├── SiteHeader.tsx    ← client (usePathname, mobile menu, scroll-aware bg)
│   │   ├── SiteFooter.tsx    ← server
│   │   ├── MobileMenu.tsx    ← client (slide panel, focus trap, scroll lock)
│   │   ├── Interactivity.tsx ← client island, scroll reveals via IntersectionObserver
│   │   ├── Reveal.tsx        ← server wrapper that adds `data-reveal` attribute
│   │   ├── Icon.tsx          ← inline SVG icons (target, users, compass, chart, shield, mail, calendar, arrow, check)
│   │   ├── Eyebrow.tsx       ← styled kicker
│   │   ├── ProcessSteps.tsx  ← 4-step indicator
│   │   └── ValueRow.tsx      ← brand values strip
│   ├── (sections)/           ← home sections, server components
│   │   ├── Hero.tsx
│   │   ├── Quote.tsx
│   │   ├── ExpertiseTiles.tsx
│   │   ├── Values.tsx
│   │   ├── Stats.tsx
│   │   └── CtaBanner.tsx
│   ├── expertise/page.tsx
│   ├── certifications/page.tsx
│   └── contact/page.tsx
├── lib/
│   ├── content.ts            ← typed content constants (EXPERTISE, CERTIFICATIONS, VALUES, STATS, NAV)
│   └── seo.ts                ← buildMetadata helper using a single SITE_NAME constant
├── public/
│   └── images/
│       └── hovik-portrait.jpg
└── (root configs identical to travel-with-liana)
    package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
    eslint.config.mjs, open-next.config.ts, wrangler.jsonc, .gitignore
```

### URL-agnostic constraint

Because final domains (`tamazyanhovik.pm`, `tamazyanhovik.com`) and the deploy domain (`tamazyan-hovik.ashoon.online`) all serve the same app, the codebase must NOT bake a hostname anywhere user-visible:

- All `<Link>`s use root-relative paths (`/expertise`, never `https://...`).
- `sitemap.ts` and `robots.ts` derive base URL from request headers (`host` header) at runtime, not from a hardcoded constant.
- `metadata.metadataBase` defaults to `process.env.NEXT_PUBLIC_SITE_URL` if set, otherwise omitted (Next.js falls back to relative OG URLs which work fine).
- OG image is served from `/og.png` (relative).
- No canonical URLs hardcoded.

### Stack pinning (matches `travel-with-liana/package.json` verbatim except `name`)

```json
"next": "^16.2.5",
"react": "^19.2.4",
"react-dom": "^19.2.4",
"@opennextjs/cloudflare": "^1.19.5",
"@tailwindcss/postcss": "^4",
"tailwindcss": "^4",
"wrangler": "^4.87.0"
```
Engines: `node >=24`.

### Tailwind v4 config

Done via `@theme` block in `app/globals.css` (Tailwind v4 pattern, no `tailwind.config.js`). Tokens:

```css
@theme {
  --color-bg: #F9F7F4;
  --color-bg-alt: #FFFFFF;
  --color-divider: #E2E8F0;
  --color-ink: #0F172A;
  --color-ink-2: #64748B;
  --color-accent: #FF6B6B;
  --color-accent-soft: #FFE7E4;
  --color-success: #22C55E;
  --font-display: var(--font-playfair);
  --font-sans: var(--font-manrope);
}
```

### Fonts (next/font/google)

```ts
import { Playfair_Display, Manrope } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const manrope  = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
```

Applied on `<html>` via `${playfair.variable} ${manrope.variable}` and `font-sans` (Manrope default body).

### Cloudflare wrangler.jsonc

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tamazyan-hovik",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-04-01",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "observability": { "enabled": true }
}
```

Custom domains (`tamazyanhovik.pm`, `tamazyanhovik.com`) added in the Cloudflare dashboard after first deploy — no code change required.

---

## 6. Accessibility & performance

- All interactive elements ≥ 44×44 hit target on mobile.
- Color contrast: ink-on-cream meets WCAG AA. Coral CTA on cream — verified AA at 18px+ Manrope 600.
- Focus rings: 2px coral outline with 2px offset.
- Mobile menu: focus trap, body scroll lock, ESC to close, restore focus on close.
- Reveal-on-scroll: respects `prefers-reduced-motion` (instant render, no animation).
- Portrait `<img>` uses `next/image` with `priority` on Home hero, lazy elsewhere.
- LCP target: < 1.8s on Cloudflare edge.

---

## 7. SEO

- `metadata` per page (title + description + OG).
- Site title: `Hovik Tamazyan — Human-Centered Product Leader`
- Per-page descriptions written into `lib/seo.ts`.
- `sitemap.ts` enumerates the 4 routes, derives base URL from request `host` header.
- `robots.ts` allows all, points at sitemap.
- One OG image at `/public/og.png` (designed at `1200×630`, cream bg + Playfair name + coral accent + portrait).

---

## 8. Build sequence

1. Scaffold root files copying from `travel-with-liana/` (package.json, tsconfig, next.config, postcss, eslint, open-next, wrangler, .gitignore). Update `name` fields.
2. `npm install`. Verify clean install.
3. `app/layout.tsx` with fonts + globals + chrome.
4. `app/globals.css` with brand tokens.
5. Reusable primitives: `Eyebrow`, `Icon`, `Reveal`, `Interactivity`, `SiteHeader`, `SiteFooter`, `MobileMenu`.
6. Content constants in `lib/content.ts`.
7. Home sections in `app/(sections)/`.
8. `app/page.tsx` composes Home.
9. `/expertise`, `/certifications`, `/contact`, `/not-found` pages.
10. `sitemap.ts`, `robots.ts`, `icon.svg`, `og.png`.
11. Download portrait from existing site → `public/images/hovik-portrait.jpg`.
12. `npm run build` — type-check passes.
13. `npm run dev` — visual QA at 360, 768, 1440 widths.
14. `git init`, initial commit.
15. (Deferred to user) `gh repo create Hovakimyan/tamazyan-hovik --source=. --private --push`.
16. (Deferred to user) Cloudflare Workers Builds setup + custom domain wiring.
17. (Deferred to user) Add to `ashoon-online`'s `DEMOS` portfolio with hero screenshot.

---

## 9. Acceptance criteria

- [ ] All 4 pages render with no console errors / no hydration warnings.
- [ ] `npm run build` succeeds with TypeScript strict.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- [ ] No hardcoded production hostname appears in source — site renders identically under any domain.
- [ ] Mobile menu traps focus and locks scroll.
- [ ] Reveal animations respect `prefers-reduced-motion`.
- [ ] All copy from source site preserved (no facts lost — only voice/tone uplift where it matched the new brand).
- [ ] Email link opens `mailto:tamazyan.hovik@gmail.com`.
- [ ] Booking link is a single constant (`BOOKING_URL` in `lib/content.ts`) — easy to swap.

---

## 10. Open items / deferred

- Real LinkedIn URL (footer placeholder until provided).
- Real booking URL (Cal.com or Calendly).
- Optional `/journal` or `/case-studies` page later — content not provided this round.
- A real OG image render (placeholder sufficient for v1; can be tightened with a Figma export).
- Newsletter / form-based contact (would need Resend + a Worker route — not in this scope).
