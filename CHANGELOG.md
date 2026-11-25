# Changelog

All notable versions of **Lucas Igreja — Graphic Design & UI/UX Portfolio** are documented here.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses pre-launch minor versions (`0.1`, `0.2`, ...) leading up to the public `1.0` launch. Every released version is archived as an immutable, runnable snapshot in [`Versions/`](./Versions/README.md) and mirrored by an annotated Git tag (`vX.Y`).

---

## [0.9.5] - 2026-11-25

**Git Tag:** `v0.9.5` · **Archive:** [`./Versions/v0.9.5/`](./Versions/v0.9.5/VERSION_INFO.md)

### Changed
- **Contact Links Row & Centered Minimal Footer (`index.html`, `css/components.css`):**
  - Replaced the single `#contact` CTA button with a centered horizontal **`EMAIL / BEHANCE / LINKEDIN`** row (`E-MAIL / BEHANCE / LINKEDIN` in `PT`) separated by muted `/` dividers (`.closing-cta-sep`), styled in scaled-up `Clash Display` (`clamp(1.5rem, 3vw, 2.75rem)`) with `#D4FF00` hover spotlight and `0.4` sibling dimming with zero horizontal shift.
  - Stacked the 3 links vertically centered below `768px` (with `/` dividers hidden) for clean `>= 44px` mobile tap targets.
  - Removed `ul.footer-list` from `<footer>` so contact links live solely in `#contact`, and centered the remaining single-line copyright notice (`.footer-bar`) across desktop and mobile.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.9.5`.

---

## [0.9.4] - 2026-11-24

**Git Tag:** `v0.9.4` · **Archive:** [`./Versions/v0.9.4/`](./Versions/v0.9.4/VERSION_INFO.md)

### Added
- **New Project `03` — GDF — Capital Ibero-Americana das Culturas (`js/data/projects.js`, `assets/projects/behance/gdf-cic/`, `assets/projects/gdf-cic-mockup.png`):**
  - Pulled high-resolution Behance artwork (`01-brand-board.png`) from [Behance gallery `258989415`](https://www.behance.net/gallery/258989415/GDF-Logomarca-Capital-Ibero-Americana-das-Culturas).
  - Generated matching 16:9 dark-slate studio **stationery suite mockup** (`gdf-cic-mockup.png`) featuring the `BSB 2022` / Athos Bulcão modular identity across folder, letterhead, envelope, embossed notebook, and business cards.
  - Added full bilingual (`EN / PT`) case-study copy, 2-slide modal gallery, and updated catalog numbering (`01`–`10`, with `01`–`08` active visible) and filter counts (`ALL (10)` / `BRANDING (05)`).

### Changed
- **Discipline-Only Project Subtitles (`js/components/portfolio.js`):** Removed the creation year from `.project-caption-meta` on project cards so subtitles display strictly the discipline label.
- **Single-Line Desktop Project Captions (`css/components.css`, `js/components/portfolio.js`):** Set `.project-caption-bar` to `flex-wrap: nowrap`, kept `.project-caption-meta` unshrunk (`flex-shrink: 0`), and applied `text-overflow: ellipsis` truncation on `.project-caption-title` so numbered titles and discipline subtitles stay on the same single line on desktop while preserving the 2-line stacked mobile layout (`<= 767px`).
- **Active Section Lime Highlight in Top Nav (`css/components.css`, `js/motion/animations.js`, `js/components/portfolio.js`):** Added `.nav-link.is-active` / `.mobile-drawer-link.is-active` (`#D4FF00`) driven by `initNavScrollSpy()` in `PortfolioMotion`, highlighting whichever section (`ABOUT`, `PROJECTS`, `CAREER`, `CONTACT`) is currently in view (with no link highlighted at the Hero).
- **Cache Busting & Counter (`index.html`):** Updated stylesheet/script query strings to `?v=0.9.4` and `#stickyCounterTotal` initial label to `/ 08`.

---

## [0.9.3] - 2026-11-24

**Git Tag:** `v0.9.3` · **Archive:** [`./Versions/v0.9.3/`](./Versions/v0.9.3/VERSION_INFO.md)

### Changed
- **Full 9-Project Behance Galleries (`assets/projects/behance/`, `js/data/projects.js`):**
  - Pulled high-resolution Behance artwork across projects `03`–`09`: **03 GDF — UnDF**, **04 GDF — Secretaria de Economia**, **05 GDF — Clube de Desconto**, **06 GDF — Fábrica Social**, **07 Champion Volvo — Novo XC60**, **08 Champion Volvo — Brasília Design**, and **09 CAU/BR — Informes Publicitários**.
  - Wired multi-image modal galleries (`gallery` arrays) across every remaining project so all `01`–`09` case studies feature real Behance imagery.
- **Branding Stationery & Print Campaign Mockups (`assets/projects/*-mockup.png`, `js/data/projects.js`):**
  - Generated bespoke 16:9 dark-slate studio **stationery suite mockups** for all four branding identities (`gdf-undf-mockup.png`, `gdf-economia-mockup.png`, `gdf-clube-mockup.png`, `gdf-fabrica-mockup.png`) and **campaign/print mockups** for `volvo-xc60-mockup.png` and `volvo-selekt-mockup.png` (with `09 CAU/BR` displaying its pulled print ad cover).
- **Non-Destructive Project Visibility Toggle (`js/data/projects.js`, `js/components/portfolio.js`, `index.html`):**
  - Added per-project `visible` flag (`visible !== false`) so projects can be toggled off cleanly while preserving all gallery data and asset files (`gdf-fabrica` and `caubr-editorial` toggled to `visible: false`, keeping 7 active sequential projects `01`–`07`).
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.9.3`.

---

## [0.9.2] - 2026-11-24

**Git Tag:** `v0.9.2` · **Archive:** [`./Versions/v0.9.2/`](./Versions/v0.9.2/VERSION_INFO.md)

### Changed
- **Disambiguated Modal Project vs. Gallery Navigation (`css/modal.css`, `js/components/portfolio.js`, `js/data/projects.js`):**
  - Relabeled the modal header project stepper on desktop to explicit **`PREV PROJECT / NEXT PROJECT`** (`EN`) and **`PROJETO ANT. / PRÓX. PROJETO`** (`PT`), with single-line ellipsis safety on `.modal-title`; on mobile (`<= 767px`), replaced bare arrows with an inline `01/09` monospaced project counter between arrows.
  - Tuned in-image gallery chevrons to rest quietly (`opacity: 0.28`) on hover-capable desktops and reveal cleanly (`opacity: 1`) on `.modal-hero-stage` hover/focus, while remaining visible (`opacity: 0.85`) alongside native horizontal touch-swipe (`>= 40px`) on touch devices.
  - Updated modal keyboard navigation so `ArrowLeft` / `ArrowRight` cycle the project's image gallery on multi-image projects (`Shift + ArrowLeft/Right` switches projects), while preserving direct `ArrowLeft` / `ArrowRight` project switching on single-cover projects.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.9.2`.

---

## [0.9.1] - 2026-11-24

**Git Tag:** `v0.9.1` · **Archive:** [`./Versions/v0.9.1/`](./Versions/v0.9.1/VERSION_INFO.md)

### Changed
- **Modal Image Carousel Controls (`css/modal.css`, `js/components/portfolio.js`):**
  - Added borderless overlay `#modalGalleryPrevBtn` and `#modalGalleryNextBtn` (`44px × 44px` on desktop, `38px × 38px` on mobile) with `#D4FF00` hover/focus highlight inside `.modal-hero-stage`, synced seamlessly with the thumbnail strip.
- **Streamlined Modal Gallery & Tools/Demo Column (`css/modal.css`, `js/components/portfolio.js`, `js/data/projects.js`):**
  - Removed the gallery caption subtitle (`#modalGalleryCaption`), slide counter (`#modalGalleryCounter`), and `VIEW FULL GALLERY ON BEHANCE` CTA row from the case-study modal.
  - Moved the `OPEN LIVE DEMO` / `OPEN FIGMA PROTOTYPE` action into `.modal-tools-col` directly beneath `.modal-tools-list`, matched in scale to the `TOOLS` heading (`var(--text-h3)`) with borderless `EN / PT`-style hover shift and no trailing arrow icon.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.9.1`.

---

## [0.9] - 2026-11-24

**Git Tag:** `v0.9` · **Archive:** [`./Versions/v0.9/`](./Versions/v0.9/VERSION_INFO.md)

### Changed
- **Pilot Behance Assets & Pixel-Faithful 3D Product Mockups (Projects `01`–`02`):**
  - Pulled high-resolution Behance gallery assets for **01 Sonar BSB** (`assets/projects/behance/sonar-bsb/`) and **02 Olivia's Coffee Beans** (`assets/projects/behance/olivias-coffee/`), plus captured live interactive demo screen `06-live-demo-modal.png` from `https://lucasigreja5.github.io/Sonar-BSB/`.
  - Added bespoke 16:9 3D product mockups (`assets/projects/sonar-bsb-mockup.png` and `assets/projects/olivias-coffee-mockup.png`) set against project-native indigo/lime and forest-green/gold backdrops as carousel covers and modal slide `01`.
- **Interactive Modal Gallery & Demo / Prototype CTAs (`css/modal.css`, `js/components/portfolio.js`, `js/data/projects.js`):**
  - Added `.modal-hero-showcase`, `.modal-hero-stage` (`object-fit: contain`), caption/counter bar (`01 / 08`), and sharp `0px` `.modal-gallery-strip` thumbnails with `#D4FF00` active highlight and live slide switching inside `openProjectModal`.
  - Added bilingual `OPEN LIVE DEMO ↗` (`ABRIR DEMO AO VIVO ↗`) and `OPEN FIGMA PROTOTYPE ↗` (`ABRIR PROTÓTIPO FIGMA ↗`) primary pills alongside `VIEW FULL GALLERY ON BEHANCE ↗` (`VER PROJETO NO BEHANCE ↗`) in `.modal-cta-row`.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.9`.

---

## [0.8.2] - 2026-11-24

**Git Tag:** `v0.8.2` · **Archive:** [`./Versions/v0.8.2/`](./Versions/v0.8.2/VERSION_INFO.md)

### Changed
- **Disciplines Unselected Text Readability (`css/components.css`):**
  - Elevated unselected `.discipline-tab .word-primary` (`rgba(255, 255, 255, 0.56)`) and `.word-secondary` (`rgba(255, 255, 255, 0.34)`) contrast over the 3 full-bleed PNG backgrounds while preserving the two-tone hierarchy against active `#FFFFFF` / `#D4FF00` lime tabs.
  - Added a subtle dark `text-shadow` on `.discipline-tab` and deepened `.disciplines-scrim` (`0.90` left → `0.56` center → `0.84` right) for crisp legibility across all 3 atmospheric layers.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.8.2`.

---

## [0.8.1] - 2026-11-23

**Git Tag:** `v0.8.1` · **Archive:** [`./Versions/v0.8.1/`](./Versions/v0.8.1/VERSION_INFO.md)

### Changed
- **Mobile Single-Line Project Card Titles (`css/components.css`):**
  - Under `@media (max-width: 767px)`, stacked `.project-caption-bar` vertically (`flex-direction: column; align-items: flex-start; gap: 4px;`) so `.project-caption-title` spans full card width on a single line with `...` ellipsis truncation (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`), while `.project-caption-meta` (year and discipline) sits cleanly on the second line below.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.8.1`.

---

## [0.8] - 2026-11-23

**Git Tag:** `v0.8` · **Archive:** [`./Versions/v0.8/`](./Versions/v0.8/VERSION_INFO.md)

### Changed
- **Bespoke Hero Banner (`index.html`, `css/components.css`, `js/motion/animations.js`, `assets/hero-banner.png`):**
  - Replaced `assets/hero-ambient.png` in `#heroMediaFrame` with a custom `2752×1536` dark obsidian & `#D4FF00` UI/UX and brand showcase collage (`assets/hero-banner.png`), paired with GSAP scroll-zoom and subtle desktop mouse parallax.
- **3-Layer Crossfading Disciplines Backgrounds (`index.html`, `css/components.css`, `js/components/portfolio.js`):**
  - Added 3 distinct `2752×1536` atmospheric PNG layers (`assets/discipline-uiux.png`, `assets/discipline-branding.png`, `assets/discipline-direction.png`) that crossfade smoothly (`650ms` editorial ease) when hovering or clicking `UI/UX DESIGN`, `BRAND IDENTITY`, and `ART DIRECTION`.
- **Silent Language Switching (`js/components/portfolio.js`):** Removed the bottom-right toast notification when toggling between `EN` and `PT`.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.8`.

---

## [0.7.2] - 2026-11-23

**Git Tag:** `v0.7.2` · **Archive:** [`./Versions/v0.7.2/`](./Versions/v0.7.2/VERSION_INFO.md)

### Changed
- **Sticky Modal Header Stepper (`js/components/portfolio.js`, `css/modal.css`, `js/data/projects.js`):**
  - Replaced the `.modal-carousel-controls` buttons below `TOOLS` with a compact `← PREV / NEXT →` (`ANT / PRÓX` in PT) rolling-text stepper inside `.modal-header`, separated from the bold `X` close icon by a `1px` vertical divider.
  - Styled with `Clash Display` uppercase, `.roll-wrap` vertical hover roll, `#D4FF00` lime hover/focus state, and `3px` directional arrow glide; hides text labels on mobile (`<= 767px`) leaving compact arrow icons + `X`.
  - Added infinite project looping (`01 ↔ 09`), `ArrowLeft` / `ArrowRight` keyboard navigation while the modal is open, scroll-to-top reset, and focus preservation on the active stepper button.
- **Projects Carousel Stepper Consistency (`index.html`, `css/components.css`):**
  - Applied the same `← PREV / NEXT →` (`ANT / PRÓX` in PT) rolling-text stepper to `#projectsPrevBtn` / `#projectsNextBtn` in `.projects-rail` across Desktop and Tablet (`>= 768px`), keeping compact arrow-only controls on Mobile (`<= 767px`).
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.7.2`.

---

## [0.7.1] - 2026-11-21

**Git Tag:** `v0.7.1` · **Archive:** [`./Versions/v0.7.1/`](./Versions/v0.7.1/VERSION_INFO.md)

### Changed
- **Project Popup Typography & Navigation (`js/data/projects.js`, `js/components/portfolio.js`, `css/modal.css`):**
  - Removed the `01 /` and `02 /` prefixes from `OVERVIEW` (`VISÃO GERAL`) and `TOOLS` (`FERRAMENTAS`) headings and styled `.modal-narrative-col h4` in **Card Title H3** (`Clash Display`, `var(--text-h3)`, `--accent-lime` `#D4FF00`).
  - Updated `.modal-tools-list li` to **Body Standard** (`Inter`, `var(--text-body)`, `line-height: 1.6`, sentence case).
  - Added `.modal-carousel-controls` (`#modalPrevBtn` / `#modalNextBtn`) directly below `.modal-tools-list` reusing `.carousel-nav-btn` borderless `56×56px` / `32×32px` SVG arrow styling and `#D4FF00` lime hover to jump between projects inside the modal.
- **Cache Busting (`index.html`):** Updated stylesheet and script query strings to `?v=0.7.1`.

---

## [0.7] - 2026-11-21

**Git Tag:** `v0.7` · **Archive:** [`./Versions/v0.7/`](./Versions/v0.7/VERSION_INFO.md)

### Changed
- **Project Case-Study Popups (`js/components/portfolio.js`, `js/data/projects.js`, `css/modal.css`):**
  - Replaced `CLOSE [ESC]` with the borderless bold `X` icon button (`.modal-close-icon-btn` + `.drawer-close-icon`).
  - Styled `.modal-index` in `Clash Display` (`--font-display`, matching `.modal-title`) in electric lime (`#D4FF00`).
  - Removed the `ROLE / YEAR / ERA / TOOLS` metadata grid (`.modal-meta-grid`), bottom subtitle/Behance CTA row (`.modal-cta-row`), and `PREV / NEXT` footer bar (`.modal-footer-nav`).
  - Consolidated `01 / CONTEXT`, `02 / DESIGN APPROACH`, and `03 / OUTCOME & CRAFT` into a single `01 / OVERVIEW` (`01 / VISÃO GERAL`) column spanning 2 of 3 columns (`grid-column: span 2`), paired with a dedicated `02 / TOOLS` (`02 / FERRAMENTAS`) column on the 3rd column.
- **Minimal Single-Line Footer (`index.html`, `css/components.css`):** Removed the footer bio and `MAIN` navigation columns, consolidating copyright (`© 2026 LUCAS IGREJA. ALL RIGHTS RESERVED.`) and inline contact links (`EMAIL`, `BEHANCE`, `LINKEDIN`) into a single compact `.footer-bar` with `#D4FF00` lime hover.
- **Cache Busting (`index.html`):** Updated all stylesheet and script query strings to `?v=0.7`.

---

## [0.6] - 2026-11-21

**Git Tag:** `v0.6` · **Archive:** [`./Versions/v0.6/`](./Versions/v0.6/VERSION_INFO.md)

### Changed
- **3-Column Footer Cleanup (`index.html`, `css/components.css`, `js/data/projects.js`, `js/components/portfolio.js`, `js/main.js`):**
  - Removed the `BRASÍLIA, BR · --:-- BRT` live clock indicator (`.footer-clock`, `updateClock()`) from the footer.
  - Removed the `PROJECTS` shortcuts column (`#footerProjectsList`, `renderFooterProjects()`) and updated `.footer-grid` from 4 columns to 3 (`1.5fr 0.85fr 0.95fr`).
  - Removed `WHATSAPP` and `DESIGN SYSTEM` links from the footer `CONTACT ME` column and removed `↗` arrows from `EMAIL` (`E-MAIL`), `BEHANCE`, and `LINKEDIN`.
  - Removed `#backToTopBtn` (`.footer-back-top`) and its scroll-to-top click handler.
- **Career Toggle & Cache Busting (`css/components.css`, `index.html`):** Included the `#2E2E2E` (`var(--text-dim)`) unselected Career toggle color refinement and updated all stylesheet/script query strings in `index.html` to `?v=0.6`.

---

## [0.5.1] - 2026-11-21

**Git Tag:** `v0.5.1` · **Archive:** [`./Versions/v0.5.1/`](./Versions/v0.5.1/VERSION_INFO.md)

### Changed
- **Borderless, Larger Carousel Swipe Buttons (`css/components.css`):** Removed the border/outline from `.carousel-nav-btn`, increased desktop button hit areas and SVG arrows to `56×56` / `32×32` (`44×44` / `26×26` on tablet & mobile `<= 1023px`), and changed hover color to electric lime (`var(--accent-lime)`, `#D4FF00`) with a `3px` directional glide.
- **Cache Busting:** Updated stylesheet and script query strings in `index.html` to `?v=0.5.1`.

---

## [0.5] - 2026-11-21

**Git Tag:** `v0.5` · **Archive:** [`./Versions/v0.5/`](./Versions/v0.5/VERSION_INFO.md)

### Added & Changed
- **Horizontal Projects Carousel (`index.html`, `css/components.css`, `js/motion/animations.js`, `js/components/portfolio.js`, `js/data/projects.js`):** Converted `.projects-stack` into a horizontal CSS scroll-snap carousel showing all 9 projects on a single row with a next-card edge peek, keeping `.projects-rail` (`01 / 09` index counter, `#D4FF00` progress bar, and active project title) on the left on desktop and at the top on tablet/mobile.
- **Architectural Carousel Controls:** Added sharp `0px` square `Prev` / `Next` arrow buttons (`#projectsPrevBtn` / `#projectsNextBtn`) inside `.projects-rail` with `#4A4A4A` borders, crisp white/black hover inversion, disabled boundary states, localized `EN / PT` `aria-label` strings, `ArrowLeft` / `ArrowRight` keyboard navigation, and `requestAnimationFrame`-synced horizontal scroll tracking.
- **Underline-Free Career Toggle (`css/components.css`):** Removed the bottom border underline and bottom padding overrides from `.career-option` and `.career-sep` while preserving the prominent `Clash Display` scale, secondary contrast, and `EN / PT` horizontal glide animation.
- **Cache Busting:** Updated stylesheet and script query strings in `index.html` to `?v=0.5`.

---

## [0.4.3] - 2026-11-21

**Git Tag:** `v0.4.3` · **Archive:** [`./Versions/v0.4.3/`](./Versions/v0.4.3/VERSION_INFO.md)

### Changed
- **About Section Cleanup (`index.html`):** Removed the `.about-actions` (`CAREER EVOLUTION`) CTA from `#about`.
- **High-Visibility Career Toggle (`index.html`, `css/components.css`, `js/components/portfolio.js`):** Upgraded the `PROFESSIONAL EXPERIENCE / SPECIALIZATIONS & DEGREES` (`EXPERIÊNCIA PROFISSIONAL / ESPECIALIZAÇÕES & FORMAÇÃO`) toggle to a prominent `Clash Display` scale (`clamp(1.15rem, 2.2vw, 2rem)`), raised inactive contrast (`--text-secondary`), and added a `2px` `--accent-lime` active underline alongside the `EN / PT` hover/active horizontal glide animation.
- **Disciplines Nested Inside Career & Top Nav `CONTACT` (`index.html`, `js/data/projects.js`, `css/components.css`):** Moved `#disciplines` inside `#career` while preserving its full-bleed ambient band layout, replaced `DISCIPLINES` (`DISCIPLINAS`) with `CONTACT` (`CONTATO`, `#contact`) in the top navigation bar, mobile drawer, and footer `MAIN` column, added `scroll-margin-top: var(--nav-height)` to `.closing-cta-section`, and bumped asset query strings to `?v=0.4.3`.

---

## [0.4.1] - 2026-11-20

**Git Tag:** `v0.4.1` · **Archive:** [`./Versions/v0.4.1/`](./Versions/v0.4.1/VERSION_INFO.md)

### Changed
- **Inline Career Section (`index.html`, `js/data/projects.js`, `js/components/portfolio.js`, `css/components.css`):** Replaced the `OTHER` (`#other` / `EXTRAS`) category and the `Career Evolution` popup modal (`openEvolutionModal`) with a dedicated inline `#career` (`CAREER` / `CARREIRA`) section positioned between **Projects** (`#projects`) and **Disciplines** (`#disciplines`), rendering `PROFESSIONAL EXPERIENCE` (`EXPERIÊNCIA PROFISSIONAL`, 4 roles) and `SPECIALIZATIONS & DEGREES` (`ESPECIALIZAÇÕES & FORMAÇÃO`, 2 entries).
- **Navigation, About CTA & Footer (`index.html`, `js/data/projects.js`):** Reordered top navigation, mobile drawer links, and footer `MAIN` links to `ABOUT`, `PROJECTS`, `CAREER`, `DISCIPLINES` (`SOBRE`, `PROJETOS`, `CARREIRA`, `DISCIPLINAS`), and converted the About `CAREER EVOLUTION` pill CTA into an `<a href="#career">` anchor link.
- **CSS Cleanup & Cache Busting (`css/components.css`, `css/modal.css`, `index.html`):** Moved timeline styling into `css/components.css` with responsive mobile stacking, removed `.disciplines-section` bottom double-border and unused `.other-*` / career modal styles, and bumped asset query strings to `?v=0.4.1`.

---

## [0.4] - 2026-11-20

**Git Tag:** `v0.4` · **Archive:** [`./Versions/v0.4/`](./Versions/v0.4/VERSION_INFO.md)

### Changed
- **Career Evolution Modal Close Button:** Replaced the `CLOSE [ESC]` pill text button with the borderless bold `X` icon (`.modal-close-icon-btn` + `.drawer-close-icon`) matching the slide-out navigation drawer.
- **Career Evolution Modal Header & Footer Cleanup:** Removed the top-left lime `2013—2026` badge (`.modal-index`), the `12+ years evolving...` subtitle, the bottom `LANGUAGES:` metadata label, and the bottom `LINKEDIN ↗` CTA row.
- **Separated Experience & Specializations Sections:** Categorized `DATA.evolution` entries (`experience` vs. `education`) and split the Career Evolution modal into two titled sections (`PROFESSIONAL EXPERIENCE` / `EXPERIÊNCIA PROFISSIONAL` with 4 roles, and `SPECIALIZATIONS & DEGREES` / `ESPECIALIZAÇÕES & FORMAÇÃO` placing `UI/UX & Digital Product Craft` `2026` alongside `B.A. in Advertising & Propaganda` `2010 — 2013`).
- **Cache Busting:** Updated stylesheet and script query strings in `index.html` to `?v=0.4`.

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
