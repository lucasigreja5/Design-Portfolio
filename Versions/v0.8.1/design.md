# Design System v2.0 — Lucas Igreja Portfolio

> **Version:** 2.0 (Aligned with Nextwave & Portx Reference Audit)  
> **Live Specimen:** [`design-system.html`](./design-system.html)  
> **CSS Tokens:** [`css/tokens.css`](./css/tokens.css)  
> **Author:** Lucas Igreja (`UI/UX Design | Graphic Design`, Brasília, Brazil)

---

## 1. Brand & Aesthetic Principles

**"Stark Monochrome Architecture + One Surgical Accent."**

Synthesized from the visual audit of [Nextwave](https://nextwave-template.webflow.io/home) and [Portx](https://portx.framer.ai/), this design system pairs monolithic geometric display typography and pure `#000000` architectural rigor with one surgical digital accent (`#D4FF00`), letting Lucas Igreja's 9 graphic and UI/UX case studies supply the visual color.

1. **Pure Monochrome Frame:** Pure `#000000` canvas, `#0E0E0E`/`#141414` elevated dark surfaces, and crisp `1px solid #282828` hairline dividers keep the interface gallery-quiet.
2. **Monolithic ALL-CAPS Display:** `Clash Display` (with `Syne` fallback) set in uppercase with tight `-0.03em` tracking and `0.92–0.96` leading anchors heroes and section transitions—contrasted with clean sentence-case `Inter` copy and `JetBrains Mono` indices.
3. **Sharp Architectural Geometry (`0px` vs `9999px`):** Project frames, cards, rows, inputs, and modals use razor-sharp `0px` corners. Full pill (`9999px`) and circle (`50%`) radii are reserved strictly for CTAs, filter pills, status dots, and arrow icon chips.
4. **One Surgical Accent:** Electric Lime (`#D4FF00`) appears exclusively on the live availability pulse, `:focus-visible` outlines, UI/UX highlight markers, and active progress rails—echoing the *Sonar BSB* flagship case study.
5. **Copy Principle (Homebase-Only Location):** Keep Brasília strictly as factual homebase/location metadata (`BASED IN: BRASÍLIA, BR · <LIVE BRT TIME>` and footer contact info), rather than using it as an overarching visual theme or creative narrative.

---

## 2. Color Tokens

### Surfaces, Micro-Grid & Hairlines

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--bg-canvas` | `#000000` | Primary pure black canvas |
| `--bg-surface` | `#0E0E0E` | Cards, specimen panels, case-study preview surfaces |
| `--bg-elevated` | `#141414` | Mega-menus, modals, elevated hover states |
| `--bg-glass` | `rgba(0, 0, 0, 0.80)` | Sticky `84px` navigation bar (`backdrop-filter: blur(16px)`) |
| `--grid-line` | `rgba(255, 255, 255, 0.04)` | Subtle `32px × 32px` architectural micro-grid in Hero |
| `--border-subtle` | `#282828` | Structural `1px` top lines, row dividers, metadata underlines |
| `--border-strong` | `#4A4A4A` | Hover borders, active inputs, outlined skill pills |
| `--border-inverse` | `rgba(255, 255, 255, 0.35)` | Hairline rules layered over full-bleed dark photography |
| `--border-focus` | `#D4FF00` | Keyboard `:focus-visible` outline (`2px solid`, `0px` radius) |

### Typography Ink & Interactive Surfaces

| Token | Hex | Contrast on `#000000` | Usage |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#FFFFFF` | `21.0:1` (AAA) | Display headings, active disciplines, primary copy, nav links |
| `--text-secondary` | `#8A8A8A` | `6.1:1` (AA+) | Descriptions, labels, inactive nav links, captions |
| `--text-muted` | `#5C5C5C` | `3.1:1` (Large/Meta) | Indices (`01`–`09`), dates, non-critical metadata |
| `--text-dim` | `#2E2E2E` | Decorative / Inactive | Unselected oversized discipline headings in Switcher band |
| `--text-inverse` | `#000000` | `21.0:1` on `#FFFFFF` | Text & leading `●` dot inside white pill CTAs |
| `--cta-bg` | `#FFFFFF` | `21.0:1` against canvas | Primary pill CTA fill (`● LET'S TALK`) & sharp `VIEW CASE` hover badge |

### Single Surgical Accent

| Token | Hex / Value | Contrast on `#000000` | Usage |
| :--- | :--- | :--- | :--- |
| `--accent-lime` | `#D4FF00` | `17.4:1` (AAA) | Live availability dot, `:focus-visible`, active progress line, UI/UX marker |
| `--accent-lime-dim` | `rgba(212, 255, 0, 0.12)` | — | Subtle tag/highlight background tint |

---

## 3. Typography System

### Font Stack
- **Display (Monolithic ALL-CAPS):** `'Clash Display', 'Syne', -apple-system, sans-serif` (Weights: `500`, `600`, `700`; loaded via Fontshare CDN with Google Fonts `Syne` fallback)
- **Body & UI:** `'Inter', sans-serif` (Weights: `400`, `500`, `600`)
- **Metadata & Indices:** `'JetBrains Mono', monospace` (Weights: `400`, `500`)

### Type Scale

| Role | Token | Size (Fluid) | Line Height | Tracking | Transform / Font |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Mega Display** | `--text-hero` | `clamp(3.25rem, 9vw, 8.25rem)` (`52px–132px`) | `0.92` | `-0.03em` | `UPPERCASE` · `Clash Display 600` |
| **Disciplines Switcher** | `--text-display` | `clamp(2.5rem, 6.5vw, 6rem)` (`40px–96px`) | `0.96` | `-0.03em` | `UPPERCASE` · `Clash Display 600` |
| **Section H1** | `--text-h1` | `clamp(2.25rem, 4.5vw, 4rem)` (`36px–64px`) | `1.04` | `-0.03em` | `UPPERCASE` · `Clash Display 600` |
| **Section H2 / Statement** | `--text-h2` | `clamp(1.75rem, 3vw, 2.75rem)` (`28px–44px`) | `1.08` | `-0.02em` | Sentence / Upper · `Inter 500` or `Clash` |
| **Project / Row Title H3** | `--text-h3` | `clamp(1.25rem, 1.8vw, 1.625rem)` (`20px–26px`) | `1.15` | `-0.015em` | `UPPERCASE` · `Clash Display 500/600` |
| **Lead Body** | `--text-body-lg` | `clamp(1.0625rem, 1.2vw, 1.25rem)` (`17px–20px`) | `1.6` | `0` | Sentence · `Inter 400` |
| **Body Standard** | `--text-body` | `1rem` (`16px`) | `1.6` | `0` | Sentence · `Inter 400` |
| **Small UI / CTA** | `--text-sm` | `0.875rem` (`14px`) | `1.4` | `0.02em` | `UPPERCASE` on CTAs · `Inter 500/600` |
| **Metadata / Index / Clock** | `--text-meta` | `0.75rem` (`12px`) | `1.2` | `+0.08em` | `UPPERCASE` · `JetBrains Mono` |

---

## 4. Layout Grid, Spacing & Geometry Rules

### Container & Breakpoints
- **Max Container Width:** `1360px` (`--container-max`)
- **Horizontal Padding:** `clamp(1.25rem, 3.5vw, 2.5rem)` (`20px` mobile → `40px` desktop)
- **Desktop (`>= 1024px`):** 12 columns, `24px` (`--grid-gutter`) gap
- **Tablet (`768px–1023px`):** 8 columns, `20px` gap (4-col hero strip collapses to `2×2`)
- **Mobile (`390px–767px`):** 4 columns, `16px` gap

### Spatial Rhythm (`4px / 8px` Base)
`--space-1` (`4px`), `--space-2` (`8px`), `--space-3` (`12px`), `--space-4` (`16px`), `--space-6` (`24px`), `--space-8` (`32px`), `--space-12` (`48px`), `--space-16` (`64px`), `--space-24` (`96px`), `--space-32` (`128px`).

### Corner Radius Discipline
- **`--radius-sharp: 0px`:** Project media frames, showcase banners, metric cards, case-study modals, award/evolution rows, and form inputs.
- **`--radius-pill: 9999px` / `--radius-circle: 50%`:** Primary white pill CTAs, filter pills, `EN / PT` toggle, outlined skill pills, arrow icon chips (`→` / `↗`), and availability dot.

---

## 5. Section & Component Specs (Figma Blueprint)

### A. Sticky Minimal Navigation (`84px`)
- Surface: `--bg-glass` (`rgba(0, 0, 0, 0.80)`) + `backdrop-filter: blur(16px)` + `1px solid #282828` bottom border.
- Left: `LUCAS IGREJA®` wordmark in `Clash Display 600` uppercase + subtle availability indicator.
- Right: Uppercase links (`WORK`, `DISCIPLINES`, `EVOLUTION`, `ABOUT`, `CONTACT`) + `EN / PT` pill toggle.

### B. Hybrid Hero Section
1. **4-Column Hairline Metadata Strip:** Each cell (`1fr`) displays a muted `JetBrains Mono` label (`SPECIALTY`, `AVAILABILITY`, `EXPERIENCE`, `BASED IN`), uppercase value (`UI/UX & GRAPHIC DESIGN`, `OPEN FOR WORK`, `12+ YEARS`, `BRASÍLIA, BR · <LIVE BRT TIME>`), top-right `↗` icon, and `1px solid #282828` bottom hairline.
2. **Asymmetric Headline + CTA:** Massive stacked ALL-CAPS `Clash Display` title left + `#FFFFFF` dual-label rolling-text pill CTA (`● LET'S TALK`) aligned bottom-right.
3. **Full-Container Showcase Frame:** `0px` sharp-edged visual showcase directly below over `.micro-grid-bg` (`32px` grid), scaling subtly on scroll.

### C. Interactive Oversized Disciplines Switcher (`// DISCIPLINES //`)
- Top `1px` hairline + `// DISCIPLINES //` label.
- Two-column band: Left anchors the active discipline description + `#FFFFFF` pill CTA; Right stacks giant ALL-CAPS items (`UI/UX DESIGN`, `BRAND IDENTITY`, `ART DIRECTION`, `MOTION & PROTOTYPING`).
- Active item renders in `#FFFFFF` with a `#D4FF00` index marker; inactive siblings sit in `#2E2E2E`. Hovering or clicking swaps the active description and subtle backdrop visual.

### D. Selected Works — Sticky `01`–`09` Counter Showcase (`// SELECTED WORKS //`)
- Header: `// SELECTED WORKS //` + discipline filter pills (`ALL 09`, `UI/UX 02`, `BRANDING 04`, `EDITORIAL 03`).
- Two-column sticky layout:
  - **Left Rail (Sticky):** Giant `01` / `09` counter in `Clash Display` + vertical `1px` hairline progress indicator (`#282828` track with `#D4FF00` fill) + current project Era (`2026 PRODUCT & UI/UX`, `2019–2022 GDF SYSTEMS`, `2015–2018 PRINT & OOH`).
  - **Right Stack:** Full-width `16:10` sharp `0px` project frames. Hovering reveals a centered `#FFFFFF` sharp `0px` `VIEW CASE` button overlay; single-line title + category tags sit cleanly below the frame.

### E. Case-Study Modal (Sharp `0px`)
- Max-width `960px`, `--bg-elevated` (`#141414`), `1px solid #4A4A4A`, `0px` corners.
- Sticky header (`Title`, `Role`, `Year`, `Tools`, `Behance Link`, `ESC` close button) → Hero media → 3-column Context / Approach / Outcome breakdown → Prev / Next project footer.

### F. Evolution & Experience Rows + Minimal Footer
- `// EVOLUTION 2013–2026 //`: Full-width `1px`-divided horizontal rows (`01`–`05`) with index left, uppercase role/milestone center, and timeframe/organization right.
- Closing 3-line ALL-CAPS CTA + underlined `CONTACT NOW ↗` + minimal hairline-divided typographic footer (`LUCAS IGREJA®`, `BRASÍLIA — BRAZIL`, social links `BEHANCE ↗`, `LINKEDIN ↗`, `EMAIL ↗`, `BACK TO TOP ↑`).

---

## 6. Motion Tokens & Signature Micro-Interactions

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--ease-editorial` | `cubic-bezier(0.22, 1, 0.36, 1)` | Section fades, image zoom, sticky transitions |
| `--ease-snappy` | `cubic-bezier(0.16, 1, 0.3, 1)` | Discipline switcher color shift, filter pills |
| `--ease-roll` | `cubic-bezier(0.76, 0, 0.24, 1)` | Dual-label rolling-text hover inside CTAs & links |
| `--duration-micro` | `180ms` | Border, opacity, and tag shifts |
| `--duration-roll` | `360ms` | Vertical rolling-text swap on hover |
| `--duration-ui` | `420ms` | Card media scale (`1.03`) and modal transitions |
| `--duration-reveal` | `800ms` | Hero headline & `1px` hairline draw-in reveals |

**Signature Behaviors:**
1. **Dual-Label Rolling-Text Hover:** Primary pills and section links wrap two identical text labels inside an `overflow: hidden` mask; hover translates both `-100%` along `Y` over `--duration-roll`.
2. **Animated `1px` Hairlines:** Horizontal dividers draw from `scaleX(0)` to `scaleX(1)` (`transform-origin: left`) on scroll entry.
3. **Scroll-Zoom Showcase & Sticky Counter:** Hero showcase smoothly eases scale on scroll, while the Works left rail syncs `01`–`09` to the active viewport card.
4. **Accessibility:** All animations and transforms collapse cleanly under `@media (prefers-reduced-motion: reduce)`.

---

## 7. Figma Setup Checklist (Before You Draw)

1. **Install / Enable Fonts:** Download **Clash Display** (Fontshare — weights `500`, `600`, `700`) and enable **Inter** (`400`, `500`, `600`) + **JetBrains Mono** (`400`, `500`).
2. **Figma Variables (`Colors`):**
   - `bg/canvas`: `#000000` · `bg/surface`: `#0E0E0E` · `bg/elevated`: `#141414`
   - `border/subtle`: `#282828` · `border/strong`: `#4A4A4A`
   - `text/primary`: `#FFFFFF` · `text/secondary`: `#8A8A8A` · `text/muted`: `#5C5C5C` · `text/dim`: `#2E2E2E`
   - `accent/lime`: `#D4FF00` · `cta/bg`: `#FFFFFF` · `cta/text`: `#000000`
3. **Layout Grids:**
   - Desktop frame `1440px` wide (`1360px` content container, `40px` side padding, `12` columns, `24px` gutter).
   - Mobile frame `390px` wide (`20px` side padding, `4` columns, `16px` gutter).
4. **Radius Check:** Keep `Corner Radius = 0` on all project cards, showcase frames, rows, and modals; use `9999` only on pill CTAs, filter pills, and circle icon buttons.
