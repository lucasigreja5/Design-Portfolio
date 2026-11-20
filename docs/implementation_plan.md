# Implementation Plan v2.0 — Lucas Igreja Portfolio & Design System

## Goal Description
Build a modern, motion-driven portfolio website for **Lucas Igreja** (`UI/UX Design | Graphic Design`, Brasília, Brazil) in the `DesignPortfolio` workspace.

Following an audit of [Nextwave](https://nextwave-template.webflow.io/home) and [Portx](https://portx.framer.ai/), the Design System ([`design.md`](../design.md), [`css/tokens.css`](../css/tokens.css), [`design-system.html`](../design-system.html)) and Phase 2 Implementation Plan were refined into **v2.0**:
- **Phase 1 — Design System v2.0:** Stark monochrome architecture (`#000000` canvas, `#FFFFFF` primary ink & white pill CTAs), monolithic ALL-CAPS `Clash Display` typography, sharp `0px` frame geometry (`9999px` pills reserved strictly for CTAs/chips), and one surgical accent (`#D4FF00`, echoing *Sonar BSB*).
- **Phase 2 — Portfolio Build (Post-Figma):** Inspected Lucas's Figma mockup (`node-id=10:57`) via Figma MCP and built the full bilingual (`EN / PT-BR`) site migrating all **9 Behance projects** into a 2-line ALL-CAPS Hero, right-aligned About, sticky `01`–`09` Works Showcase, full-bleed Disciplines Switcher, asymmetric `OTHER` section, closing CTA, and 4-column footer.

---

## Finalized Architecture & Design Decisions (v2.0)

| Decision | Selection |
| :--- | :--- |
| **Tech Stack** | Zero-build Static (`HTML5` + `CSS3 Custom Properties` + `Vanilla JS` + `GSAP CDN`) |
| **Design System Deliverables** | `design.md` (v2.0) + `css/tokens.css` + `css/base.css` + interactive `design-system.html` specimen |
| **Color Polarity & Palette** | Stark Monochrome (`#000000` canvas, `#0E0E0E` / `#141414` surfaces, `#FFFFFF` ink & pill CTAs, `#282828` hairlines) + **One Surgical Accent** (`#D4FF00` Electric Lime) |
| **Typography Pairing** | Monolithic ALL-CAPS Geometric Display (`Clash Display` via Fontshare / `Syne` fallback) + `Inter` (Body) + `JetBrains Mono` (Indices, metadata & live clock) |
| **Corner Geometry** | Nextwave Architectural Sharpness: `0px` sharp corners on project frames, showcase banners, rows & modals; `9999px` pills strictly for CTAs, filter pills & arrow chips |
| **Hero Composition** | 4-col hairline metadata strip (with live `BRT` clock) → Monumental 2-line ALL-CAPS `Clash Display` headline → Full-bleed edge-to-edge scroll-zooming ambient showcase (`assets/hero-ambient.png`) |
| **Works & Disciplines Layout** | Nextwave Sticky `01`–`09` Counter Vertical Showcase (with discipline filter pills) + Full-bleed 3-row Disciplines Switcher (`UI/UX DESIGN`, `BRAND IDENTITY`, `ART DIRECTION`) |
| **Language & Copy Scope** | Bilingual `EN / PT-BR` toggle (defaults to English); Brasília referenced strictly as homebase/location metadata rather than a creative theme |

---

## Phase 1: Design System v2.0 (`design.md` + `tokens.css` + `design-system.html`)

### Design System Specification — [`design.md`](../design.md)
1. **Stark Monochrome + One Surgical Accent:** Pure `#000000` gallery frame, `#282828` structural `1px` hairlines, `#2E2E2E` inactive display type, `#FFFFFF` pill CTAs, and `#D4FF00` surgical highlights.
2. **Monolithic Typography Scale:** `Clash Display` uppercase (`--text-hero`, `--text-display`, `--text-h1`), `Inter` sentence-case body (`16px`), and `JetBrains Mono` metadata (`12px`).
3. **Sharp `0px` Geometry vs `9999px` Pills:** Clear rules for Figma frame radii and 12-column (`1360px` max) / 4-column (`390px` mobile) layout grids.
4. **Component & Motion Specs:** Dual-label rolling-text buttons, animated `1px` hairline dividers, oversized Disciplines Switcher, sticky `01`–`09` rail + `VIEW CASE` hover badge, and sharp `0px` Case-Study Modal.

### Token Implementation & Live Specimen — [`css/tokens.css`](../css/tokens.css), [`css/base.css`](../css/base.css), [`design-system.html`](../design-system.html)
- CSS Custom Properties matching v2.0 tokens (`--bg-canvas: #000000`, `--text-dim: #2E2E2E`, `--accent-lime: #D4FF00`, `--radius-sharp: 0px`, `--ease-roll`, `--font-display: 'Clash Display', 'Syne', sans-serif`).
- Interactive v2.0 specimen with click-to-copy sharp swatches, live `BRT` clock, toggleable 12-col/4-col Grid Overlay, `EN / PT` switcher, interactive Disciplines Switcher, sharp `0px` *Sonar BSB* preview card, and Motion Language playground.

---

## Phase 2: Full Portfolio Build (From Figma Mockup `10:57`)

1. Inspected Figma frames (`10:57`) via Figma MCP and downloaded [`assets/hero-ambient.png`](../assets/hero-ambient.png).
2. Implemented [`index.html`](../index.html), [`css/components.css`](../css/components.css), [`css/modal.css`](../css/modal.css), [`js/data/projects.js`](../js/data/projects.js), [`js/components/portfolio.js`](../js/components/portfolio.js), [`js/motion/animations.js`](../js/motion/animations.js), and [`js/main.js`](../js/main.js).
3. Migrated all **9 Behance projects**: *Sonar BSB*, *Olivia's Coffee Beans*, *GDF UnDF*, *GDF Secretaria de Economia*, *GDF Clube de Desconto*, *GDF Fábrica Social*, *Champion Volvo Novo XC60*, *Champion Volvo Brasília Design*, and *CAU/BR Informes Publicitários*.

---

## Verification Plan & Status

- **Phase 1 (`design-system.html`):** Verified across Desktop (`1440×900`), Tablet (`623×900`), and Mobile (`390×844`) — zero horizontal overflow, zero console errors, all interactive controls verified. See [`design-system-v2.png`](./evidence/design-system-v2.png).
- **Phase 2 (`index.html`):** Verified across Desktop (`1440×900`) and Mobile (`390×844`) — zero horizontal overflow, zero console/network errors, all 9 case-study modals, filters, sticky rail, Disciplines switcher, Career Evolution modal, and `EN / PT` toggle verified. See [`hero-desktop-1440.png`](./evidence/hero-desktop-1440.png).
