# Changelog

All notable versions of **Lucas Igreja — Graphic Design & UI/UX Portfolio** are documented here.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses pre-launch minor versions (`0.1`, `0.2`, ...) leading up to the public `1.0` launch. Every released version is archived as an immutable, runnable snapshot in [`Versions/`](./Versions/README.md) and mirrored by an annotated Git tag (`vX.Y`).

---

## [0.3.1] - 2026-11-20

- **Git Tag:** [`v0.3.1`](https://github.com/lucasigreja5/Design-Portfolio/releases/tag/v0.3.1)
- **Archived Snapshot:** [`Versions/v0.3.1/`](./Versions/v0.3.1/VERSION_INFO.md)

### Fixed
- **Monotonic Projects Counter Scrolling (`js/motion/animations.js`):** Replaced the threshold-based `IntersectionObserver` with a `requestAnimationFrame`-throttled monotonic scroll-anchor scan across all `.project-card` elements plus a `240ms` directional vertical glide on `#stickyCounterNum`, eliminating back-and-forth counter jumps on Tablet and Mobile.

### Changed
- **Projects Rail Cleanup (`index.html`, `css/components.css`, `js/components/portfolio.js`, `js/motion/animations.js`):** Removed the `.rail-era` subtitle (`"2026 · DIGITAL PRODUCT"`, `"2019–2022 · BRAND SYSTEMS"`, `"2015–2018 · CAMPAIGNS & PRINT"`) from the Projects index rail (preserving `era` inside Case-Study Modals), tuned desktop `--rail-block-h` to `190px`, compacted the tablet/mobile sticky HUD to 2 clean rows, and updated asset cache-bust query strings to `?v=0.3.1`.

---

## [0.3] - 2026-11-20

- **Git Tag:** [`v0.3`](https://github.com/lucasigreja5/Design-Portfolio/releases/tag/v0.3)
- **Archived Snapshot:** [`Versions/v0.3/`](./Versions/v0.3/VERSION_INFO.md)

### Changed
- **Borderless Hamburger & Clean Slide-Out Drawer (`<= 1023px`):** Removed the square outline from `#mobileMenuBtn` leaving a bold 3-bar icon, updated the right-to-left drawer close button to a matching borderless bold `X` icon, and removed the `NAVIGATION` header label and drawer Brasília/BRT footer.
- **Sticky Mobile Projects Index HUD (`<= 1023px`):** Kept `.projects-rail` pinned directly below `.site-header` while project cards scroll underneath, updating `01 / 09`, active era/title, and `#D4FF00` progress bar dynamically.
- **Contact & Language Switcher Refinements:** Removed the `COPY EMAIL` button from `#contact`, hardened `#langToggle` clicks across both options and `/`, and added `?v=0.3` cache-busting query strings to CSS/JS tags in `index.html`.
- **Cleaner Projects & Disciplines:** Removed the centered `VIEW CASE` hover badge inside project frames and the floating `VIEW CASE` custom cursor tooltip on project cards; removed `// DISCIPLINES //` and the deliverables subtext beneath `#disciplineCopy`.

### Added (Temporary Pre-v1.0 QA)
- Added [`js/dev/viewport-toggle.js`](./js/dev/viewport-toggle.js) (`QA | WEB | TABLET 820 | MOBILE 390` floating preview switcher) — scheduled for removal before `v1.0`.

---

## [0.2] - 2026-11-20

- **Git Tag:** [`v0.2`](https://github.com/lucasigreja5/Design-Portfolio/releases/tag/v0.2)
- **Archived Snapshot:** [`Versions/v0.2/`](./Versions/v0.2/VERSION_INFO.md)

### Changed
- **Top Nav `EN / PT` Switcher:** Styled the language toggle to match top navigation links (`Clash Display`, borderless) using the Disciplines transition—active language renders in `#D4FF00` with a subtle shift, inactive in `#2E2E2E`.
- **Hero Cleanup:** Removed the 4-column secondary metadata strip above the hero headline and the `SCROLL TO EXPLORE ↓` overlay CTA inside the hero image.
- **About Cleanup:** Removed the tool tag pills (`FIGMA`, `ILLUSTRATOR`, `INDESIGN`, `PHOTOSHOP`, `MOTION`) and `BEHANCE ARCHIVE ↗` button beneath the About statement, keeping `CAREER EVOLUTION`.
- **Projects Layout:** Removed the discipline category filter bar above the projects stack, removed the `ACTIVE INDEX` subtitle, and bottom-aligned the sticky `01–09` index rail with the project cards to match the Figma layout.

---

## [0.1] - 2026-11-19

- **Git Tag:** [`v0.1`](https://github.com/lucasigreja5/Design-Portfolio/releases/tag/v0.1)
- **Archived Snapshot:** [`Versions/v0.1/`](./Versions/v0.1/VERSION_INFO.md)

### Added — Phase 1: Design System v2.0
- Formalized **Design System v2.0** in [`design.md`](./design.md), [`css/tokens.css`](./css/tokens.css), and [`css/base.css`](./css/base.css) with pure `#000000` monochrome surfaces, `#282828` hairlines, `#2E2E2E` dim display text, `#FFFFFF` pill CTAs, single surgical `#D4FF00` accent, ALL-CAPS `Clash Display` (`Syne` fallback) + `Inter` + `JetBrains Mono`, and `0px` sharp frames vs `9999px` pills.
- Built [`design-system.html`](./design-system.html) interactive specimen with click-to-copy color swatches, 12-col/4-col Grid Overlay toggle, `EN / PT` language switcher, live `BRT` clock, and motion demos.

### Added — Phase 2: Full Portfolio & Cross-Machine Handoff
- Implemented [`index.html`](./index.html), [`css/components.css`](./css/components.css), [`css/modal.css`](./css/modal.css), [`js/data/projects.js`](./js/data/projects.js), [`js/components/portfolio.js`](./js/components/portfolio.js), [`js/motion/animations.js`](./js/motion/animations.js), and [`js/main.js`](./js/main.js) from Figma [`Desktop - 1` (`node-id=10:57`)](https://www.figma.com/design/RTPAVFPcYYvESGK77dI0XJ/Portfolio-Page?node-id=10-57&t=sjIMgLu0z6p0BB1K-1).
- Migrated all **9 Behance projects** (*Sonar BSB*, *Olivia's Coffee Beans*, *GDF UnDF*, *GDF Secretaria de Economia*, *GDF Clube de Desconto*, *GDF Fábrica Social*, *Champion Volvo Novo XC60*, *Champion Volvo Brasília Design*, *CAU/BR Informes Publicitários*) with bilingual `EN / PT-BR` parity, discipline filtering, sticky `01–09` rail, Case-Study Modal, Career Evolution Modal (6 milestones), and GSAP ScrollTrigger choreography.
- Downloaded local ambient hero artwork to [`assets/hero-ambient.png`](./assets/hero-ambient.png) (`146,551` bytes) with zero temporary external asset URLs.
- Added cross-machine handoff documentation ([`HANDOFF.md`](./HANDOFF.md), [`README.md`](./README.md), [`docs/`](./docs/CONVERSATION_HISTORY.md)), local preview servers ([`scripts/serve.sh`](./scripts/serve.sh), [`scripts/serve.ps1`](./scripts/serve.ps1)), and versioning automation ([`VERSION`](./VERSION), [`Versions/`](./Versions/README.md), [`scripts/release-version.sh`](./scripts/release-version.sh)).
