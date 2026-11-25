# Project Handoff — Lucas Igreja Portfolio

> **Current Status:** **Phase 1 (Design System v2.0)** & **Phase 2 (Full Portfolio from Figma `10:57`)** are **complete and browser-verified**.  
> **Current Version:** `v0.9.3` (Archived at [`Versions/v0.9.3/`](./Versions/v0.9.3/VERSION_INFO.md) & Git tag `v0.9.3`; prior `v0.9.2`, `v0.9.1`, `v0.9`, `v0.8.2`, `v0.8.1`, `v0.8`, `v0.7.2`, `v0.7.1`, `v0.7`, `v0.6`, `v0.5.1`, `v0.5`, `v0.4.3`, `v0.4.1`, `v0.4`, `v0.3.1`, `v0.3`, `v0.2`, and `v0.1` preserved under [`Versions/`](./Versions/README.md))  
> **Runtime Requirement:** **Zero build dependencies.** Pure static HTML5 + CSS3 Custom Properties + Vanilla JS (`window.PORTFOLIO_DATA` / `window.PortfolioUI` / `window.PortfolioMotion`) + GSAP CDN with graceful fallback. Works via local HTTP server (`scripts/serve.ps1` / `scripts/serve.sh`), static hosts, or direct `file://`.

---

## Quick Resume Prompt (For Future AI Sessions on Any Machine)

Paste this prompt if you open this repository in a fresh AI conversation on another computer:

> *"Read `HANDOFF.md`, `design.md`, and `docs/CONVERSATION_HISTORY.md` before making any edits. This is Lucas Igreja's zero-build bilingual (`EN / PT-BR`) portfolio adhering strictly to Design System v2.0 (pure `#000000` monochrome + single surgical `#D4FF00` accent, ALL-CAPS `Clash Display`, `0px` sharp frames vs `9999px` pill CTAs, and Brasília referenced strictly as homebase metadata)."*

---

## Source-of-Truth References

- **Behance Profile:** [`https://www.behance.net/lucasigreja`](https://www.behance.net/lucasigreja) (All 9 public galleries cataloged in [`js/data/projects.js`](./js/data/projects.js))
- **Figma Mockup:** [`Portfolio-Page` (`Desktop - 1`, `node-id=10:57`)](https://www.figma.com/design/RTPAVFPcYYvESGK77dI0XJ/Portfolio-Page?node-id=10-57&t=sjIMgLu0z6p0BB1K-1)
- **Visual References Audited:**
  - [`https://nextwave-template.webflow.io/home`](https://nextwave-template.webflow.io/home) (Monochrome sharpness, `0px` media corners, white pill CTAs, sticky `01–04` rail, oversized discipline switcher)
  - [`https://portx.framer.ai/`](https://portx.framer.ai/) (`Clash Display` ALL-CAPS scale, rolling-text hovers, `//` technical markers, `#2E2E2E` dim inactive display type)

---

## Locked Design System v2.0 & Content Constraints

Do **not** deviate from these user-confirmed rules without explicit approval:
1. **Color Polarity & Single Surgical Accent:** Pure `#000000` canvas (`--bg-canvas`), `#0E0E0E`/`#141414` elevated surfaces, `#282828` structural `1px` hairlines, `#2E2E2E` dim inactive discipline text, `#8A8A8A` secondary text, `#FFFFFF` primary ink & pill CTA fill, and **only ONE accent color** (`#D4FF00` Electric Lime) for the availability dot, `:focus-visible` ring, active progress rail, and subtle markers. *(Cobalt Blue and `Instrument Serif` from v1.0 were intentionally retired.)*
2. **Typography:** `Clash Display` (Fontshare CDN, `Syne` Google Fonts fallback) for ALL-CAPS display headings; `Inter` for sentence-case body copy; `JetBrains Mono` for uppercase indices, timestamps, and metadata.
3. **Corner Geometry:** `--radius-sharp: 0px` on all project frames, showcase banners, cards, rows, and modals. `--radius-pill: 9999px` / `--radius-circle: 50%` reserved strictly for CTAs, filter pills, status dots, language toggle, and skill chips.
4. **Copy Rule (Homebase Only):** Keep **Brasília, Brazil** strictly as factual homebase/location metadata (`BRASÍLIA, BR · <LIVE BRT TIME>`, bio location, and the existing *Champion Volvo — Brasília Design* Behance project title). Do **not** use Brasília architecture/modernism as an overarching creative theme.
5. **Bilingual Parity (`EN / PT-BR`):** Defaults to English (`en`), toggling cleanly to Portuguese (`pt`) across static `[data-i18n]` elements, dynamic project cards, disciplines switcher, footer links, and open modals.
6. **Zero-Build Browser Compatibility:** JS modules attach to `window` (`PORTFOLIO_DATA`, `PortfolioUI`, `PortfolioMotion`) instead of ES `import`/`export` so opening `index.html` directly via `file://` never hits CORS module errors.

---

## Complete File Manifest

| File | Purpose |
| :--- | :--- |
| [`index.html`](./index.html) | Main bilingual portfolio page matching Figma `10:57` |
| [`design-system.html`](./design-system.html) | Interactive Design System v2.0 specimen (color copy, Grid Overlay, motion playground) |
| [`design.md`](./design.md) | Complete Design System v2.0 specification & Figma checklist |
| [`VERSION`](./VERSION) | Active project version (`0.9.3`) |
| [`CHANGELOG.md`](./CHANGELOG.md) | Release notes and version history (`0.1`, `0.2`, ...) |
| [`Versions/`](./Versions/README.md) | Immutable runnable release snapshots (`Versions/v0.1/`, ...) & rollback guide |
| [`css/tokens.css`](./css/tokens.css) | CSS Custom Properties matching `design.md` v2.0 1:1 |
| [`css/base.css`](./css/base.css) | Reset, `.font-display`, `.font-mono`, `.micro-grid-bg`, sharp focus & reduced-motion guards |
| [`css/components.css`](./css/components.css) | Header, Hero, About, sticky `01–09` Projects + bespoke covers, Disciplines band, asymmetric `OTHER`, CTA, Footer |
| [`css/modal.css`](./css/modal.css) | Sharp `0px` Case-Study Modal & Career Evolution Modal styles |
| [`js/data/projects.js`](./js/data/projects.js) | Bilingual `copy` (`en`/`pt`), all 9 Behance projects, 3 disciplines, and 6 career evolution milestones |
| [`js/components/portfolio.js`](./js/components/portfolio.js) | Rendering engine, filters, art-directed covers, modals, live `BRT` clock, `EN / PT` toggle |
| [`js/motion/animations.js`](./js/motion/animations.js) | GSAP + ScrollTrigger reveals/zoom, sticky rail `IntersectionObserver`, custom desktop cursor |
| [`js/main.js`](./js/main.js) | Entry bootstrap, mobile drawer, Back-to-Top scroll |
| [`assets/hero-banner.png`](./assets/hero-banner.png) | Bespoke `2752×1536` Hero dark UI & brand showcase collage |
| [`assets/discipline-uiux.png`](./assets/discipline-uiux.png) | `2752×1536` atmospheric wireframe glass background (`01 UI/UX DESIGN`) |
| [`assets/discipline-branding.png`](./assets/discipline-branding.png) | `2752×1536` sculptural obsidian monoliths background (`02 BRAND IDENTITY`) |
| [`assets/discipline-direction.png`](./assets/discipline-direction.png) | `2752×1536` chiaroscuro light-beam background (`03 ART DIRECTION`) |
| [`assets/hero-ambient.png`](./assets/hero-ambient.png) | Original Figma ambient curve artwork (`146,551` bytes, kept for reference) |
| [`assets/projects/README.md`](./assets/projects/README.md) | Instructions for swapping bespoke covers with high-res Behance/Figma PNG/WebP exports |
| [`assets/projects/*-mockup.png`](./assets/projects/) | Bespoke 16:9 3D device, stationery suite (`03–06`), and campaign print (`07–08`) studio mockups |
| [`assets/projects/behance/`](./assets/projects/behance/) | Pulled full-resolution Behance gallery images & live demo capture across projects `01`–`09` |
| [`scripts/release-version.sh`](./scripts/release-version.sh) | Archives a new immutable `Versions/vX.Y/` snapshot and updates `VERSION` |
| [`scripts/serve.ps1`](./scripts/serve.ps1) | Zero-dependency Windows PowerShell static HTTP server (`localhost:4173`) |
| [`scripts/serve.sh`](./scripts/serve.sh) | Portable macOS/Linux static HTTP server script |
| [`docs/CONVERSATION_HISTORY.md`](./docs/CONVERSATION_HISTORY.md) | Human- & agent-readable chronological decision log |
| [`docs/history/conversation_log.json`](./docs/history/conversation_log.json) | Sanitized machine-readable JSON log of all `USER_INPUT` & `PLANNER_RESPONSE` turns |
| [`docs/implementation_plan.md`](./docs/implementation_plan.md) | Portable v2.0 implementation plan |
| [`docs/walkthrough.md`](./docs/walkthrough.md) | Portable Phase 1 & Phase 2 walkthrough with embedded visual evidence |
| [`docs/evidence/`](./docs/evidence/) | Verification screenshots (`hero-desktop-1440.png`, `design-system-v2.png`, `figma-mockup-reference.png`) |

---

## Technical Invariants & Known Gotchas

1. **Preserve `overflow-x: clip` (Never `overflow-x: hidden`):** `css/base.css` (`body`) and `css/components.css` (`.projects-section`, `.other-section`) intentionally use `overflow-x: clip`. Changing this back to `overflow-x: hidden` will break `position: sticky` on the left `01`–`09` `.projects-rail` in Chromium.
2. **Edge-Bleed Alignment Math:** `.projects-bleed-layout` and `.other-asymmetric-grid` rely on `--page-gutter: max(var(--container-pad), calc((100% - var(--container-max)) / 2 + var(--container-pad)))` so right/left edge-bleed cards align with `.container` boundaries without creating horizontal overflow.
3. **Never Reintroduce Temporary Figma Asset URLs:** Always store images locally in `assets/`. Temporary `figma.com/api/mcp/asset/...` URLs expire after 7 days.
4. **Dynamic DOM Re-render on Language Toggle:** Calling `toggleLanguage()` in `js/components/portfolio.js` re-renders `[data-i18n]` nodes, project cards, disciplines, footer project links, and any open modal, then calls `PortfolioMotion.refreshSticky()` so the `IntersectionObserver` re-attaches to the newly created `.project-card` elements.
5. **Versioning Discipline:** Keep every prior `Versions/vX.Y/` directory immutable. When cutting a new version (`0.2`, `0.3`, ...), run `./scripts/release-version.sh <ver> "<summary>"`, update `CHANGELOG.md` and `Versions/README.md`, commit, create an annotated tag (`git tag -a v<ver> -m "..."`), and push via `git push origin main --follow-tags`.
6. **Non-Destructive Project Visibility Toggle:** Each entry in `PORTFOLIO_DATA.projects` supports `visible: false` (currently set on `gdf-fabrica` and `caubr-editorial`) so projects can be hidden without deleting Behance gallery data or local mockup/asset files. Visible numbering (`01`–`07`) updates dynamically via `getVisibleProjects()` in `js/components/portfolio.js`.
7. **Secrets & Environment Files:** Keep local `.env` and `.env.local` git-ignored (never committed or included in handoff archives).

---

## Pre-v1.0 Ship Checklist

- **Remove QA Viewport Toggle:** Before releasing `v1.0`, remove `<script defer src="js/dev/viewport-toggle.js"></script>` from [`index.html`](./index.html) and delete [`js/dev/viewport-toggle.js`](./js/dev/viewport-toggle.js).

---

## Suggested Phase 3 Next Steps

1. **Completed — Real Behance Imagery & Studio Mockups (`v0.9`–`v0.9.3`):** All 9 Behance galleries are downloaded in `assets/projects/behance/` and wired with bespoke 16:9 device (`01`–`02`), stationery suite (`03`–`06`), and campaign print (`07`–`08`) mockups (`gdf-fabrica` and `caubr-editorial` toggled `visible: false` with full assets preserved).
2. **Optional `09 CAU/BR` Editorial Magazine Mockup:** If restoring `caubr-editorial` (`visible: true`), optionally swap `01-eleicoes-caubr.jpg` with a custom open-magazine spread mockup.
3. **Custom Domain, Favicon & Social OG Image:** Add an SVG/PNG favicon and `og:image` meta tag inside [`index.html`](./index.html).
4. **Deploy Statically:** Push via **GitHub Desktop** to `https://github.com/lucasigreja5/Design-Portfolio.git` and host on GitHub Pages, Netlify, Vercel, or Cloudflare Pages—no build command needed (publish root `.`).
5. **Optional Contact Form:** Wire a lightweight form service (Formspree, Web3Forms, or Netlify Forms) inside the Closing CTA or a contact drawer alongside `mailto:` and WhatsApp.
