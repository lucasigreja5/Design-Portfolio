# Lucas Igreja — Graphic Design & UI/UX Portfolio

A modern, motion-driven portfolio website for **Lucas Igreja** (`UI/UX Design | Graphic Design`, Brasília, Brazil), built from a custom Figma mockup and **Design System v2.0** to showcase 12+ years of graphic design, institutional brand identity, advertising art direction, and interactive UI/UX craft.

- **Zero Build Required:** Pure HTML5 + CSS3 Custom Properties + Vanilla JavaScript + GSAP (CDN with graceful fallback).
- **Bilingual (`EN / PT-BR`):** Instant English / Portuguese toggle across navigation, hero, all 9 case studies, disciplines, career timeline, and footer.
- **Migrated from Behance:** Elevates all 9 public projects from [`behance.net/lucasigreja`](https://www.behance.net/lucasigreja) into filterable sticky-scroll showcases and structured case-study modals.

---

## Preview Locally on Any Machine

You can open `index.html` directly in any modern browser, or start a local static server for clean HTTP routing:

### Windows (PowerShell — no Node.js or Python required)
```powershell
.\scripts\serve.ps1
```

### macOS / Linux
```bash
chmod +x scripts/serve.sh
./scripts/serve.sh
```

Then open:
- **Portfolio:** `http://localhost:4173/`
- **Design System v2.0 Specimen:** `http://localhost:4173/design-system.html`

*(Pass a custom port if `4173` is busy: `.\scripts\serve.ps1 -Port 8080` or `./scripts/serve.sh 8080`.)*

---

## Folder Structure

```text
DesignPortfolio/
├── index.html                  # Main bilingual portfolio website
├── design-system.html          # Interactive Design System v2.0 specimen
├── design.md                   # Complete Design System v2.0 spec & Figma checklist
├── VERSION                     # Active project version (currently 0.5)
├── CHANGELOG.md                # Release notes & version history
├── HANDOFF.md                  # Full technical handoff & AI resume prompt
├── README.md                   # Project setup & deployment guide
├── Versions/
│   ├── README.md               # Archive guide, index & rollback instructions
│   ├── v0.1/                   # Runnable immutable snapshot of v0.1
│   ├── v0.2/                   # Runnable immutable snapshot of v0.2
│   ├── v0.3/                   # Runnable immutable snapshot of v0.3
│   ├── v0.3.1/                 # Runnable immutable snapshot of v0.3.1
│   ├── v0.4/                   # Runnable immutable snapshot of v0.4
│   ├── v0.4.1/                 # Runnable immutable snapshot of v0.4.1
│   ├── v0.4.3/                 # Runnable immutable snapshot of v0.4.3
│   └── v0.5/                   # Runnable immutable snapshot of v0.5
├── css/
│   ├── tokens.css              # Design tokens (#000000, #FFFFFF, #D4FF00, Clash Display, motion)
│   ├── base.css                # Reset, typography utilities, reduced-motion & focus guards
│   ├── components.css          # Layout bands, sticky 01-09 rail, bespoke art-directed covers
│   └── modal.css               # Sharp 0px Case-Study & Career Evolution modals
├── js/
│   ├── data/projects.js        # Bilingual copy, 9 Behance case studies, 3 disciplines, timeline
│   ├── components/portfolio.js # UI rendering, filtering, modals, EN/PT toggle, live BRT clock
│   ├── motion/animations.js    # GSAP ScrollTrigger choreography, sticky sync & desktop cursor
│   └── main.js                 # App bootstrap & mobile navigation drawer
├── assets/
│   ├── hero-ambient.png        # Local ambient artwork exported from Figma
│   └── projects/README.md      # Guide for adding high-res project screenshots
├── scripts/
│   ├── release-version.sh      # Archive a new version snapshot & update VERSION
│   ├── serve.ps1               # Windows static preview server
│   └── serve.sh                # macOS/Linux static preview server
└── docs/
    ├── CONVERSATION_HISTORY.md # Chronological record of all decisions & audits
    ├── implementation_plan.md  # Portable v2.0 implementation plan
    ├── walkthrough.md          # Verification walkthrough with screenshots
    ├── evidence/               # Captured desktop & Figma reference PNGs
    └── history/
        └── conversation_log.json # Sanitized machine-readable turn log
```

---

## Customizing Content & Visuals

- **Edit Copy, Bio, or Case Studies:** Update [`js/data/projects.js`](./js/data/projects.js) (`copy.en` / `copy.pt`, `projects`, `disciplines`, and `evolution`).
- **Swap Bespoke Cover Art for Exported Screenshots:** Follow [`assets/projects/README.md`](./assets/projects/README.md) to drop `16:10` `.webp`/`.png` exports into `assets/projects/` and reference them in `projects.js`.
- **Continue Development on Another Machine:** Read [`HANDOFF.md`](./HANDOFF.md) and [`docs/CONVERSATION_HISTORY.md`](./docs/CONVERSATION_HISTORY.md) for full architectural context.

---

## Versioning & Releases

- **Active Version:** Tracked in [`VERSION`](./VERSION) (`0.5`) with release notes in [`CHANGELOG.md`](./CHANGELOG.md).
- **Archived Snapshots:** Immutable, runnable snapshots live under [`Versions/`](./Versions/README.md) ([`Versions/v0.5/`](./Versions/v0.5/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.5/`, [`Versions/v0.4.3/`](./Versions/v0.4.3/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.4.3/`, [`Versions/v0.4.1/`](./Versions/v0.4.1/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.4.1/`, [`Versions/v0.4/`](./Versions/v0.4/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.4/`, [`Versions/v0.3.1/`](./Versions/v0.3.1/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.3.1/`, [`Versions/v0.3/`](./Versions/v0.3/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.3/`, [`Versions/v0.2/`](./Versions/v0.2/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.2/`, and [`Versions/v0.1/`](./Versions/v0.1/VERSION_INFO.md) at `http://localhost:4173/Versions/v0.1/`).
- **Cut a New Version:** Run `./scripts/release-version.sh 0.6 "Summary of changes"`, update [`CHANGELOG.md`](./CHANGELOG.md) and [`Versions/README.md`](./Versions/README.md), then commit and push with an annotated tag (`git tag -a v0.6 -m "..."` and `git push origin main --follow-tags`).

---

## Deploying

Because there is no build step, deploy the repository root (`.`) directly to any static host:
- **GitHub Pages:** Push to GitHub and enable Pages from the `main` branch root (`/`).
- **Netlify / Vercel / Cloudflare Pages:** Connect the repo with build command empty and output directory `.` (or drag-and-drop the folder into Netlify Drop).
