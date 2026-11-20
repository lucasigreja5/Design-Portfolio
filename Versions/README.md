# Portfolio Version Archive (`Versions/`)

This folder preserves immutable, runnable snapshots of every released version of **Lucas Igreja — Portfolio** so you can preview past builds or revert changes cleanly at any time.

---

## How Versioning Works

- **Repository Root (`/`):** Always holds the active, deployable website so `http://localhost:4173/` and GitHub Pages (`/`) always serve the latest release.
- **Current Version File ([`../VERSION`](../VERSION)):** Stores the active version string (`0.3`).
- **Release History ([`../CHANGELOG.md`](../CHANGELOG.md)):** Records what changed in each version.
- **Version Archives (`Versions/vX.Y/`):** Frozen snapshots of the deployable site at each release milestone.
- **GitHub Sync (Annotated Tags):** Every release has a matching Git tag (`v0.1`, `v0.2`, ...) visible in GitHub's **Tags / Releases** view.

### What Each Archive Contains
Each `Versions/vX.Y/` folder includes only the self-contained site files needed to preview or restore that release:
- `index.html`, `design-system.html`, `design.md`
- `assets/`, `css/`, `js/`
- `VERSION_INFO.md` (release metadata, base commit, preview URLs, and restore commands)

Excluded from snapshots: `.git/`, `Versions/` (prevents recursion), `docs/`, `scripts/`, and `.DS_Store`. Because Git is content-addressed, unchanged files inside `Versions/vX.Y/` are deduplicated automatically and do not bloat repository storage.

---

## Archive Index

| Version | Date | Archive | Git Tag | Summary |
| :--- | :--- | :--- | :--- | :--- |
| **v0.3** | 2026-11-20 | [`./v0.3/`](./v0.3/VERSION_INFO.md) | `v0.3` | Borderless hamburger & drawer, sticky mobile index, QA viewport switcher, and cleaner projects/disciplines |
| **v0.2** | 2026-11-20 | [`./v0.2/`](./v0.2/VERSION_INFO.md) | `v0.2` | Refined nav `EN / PT` toggle, minimal hero/about, and bottom-aligned projects index |
| **v0.1** | 2026-11-19 | [`./v0.1/`](./v0.1/VERSION_INFO.md) | `v0.1` | Initial portfolio baseline — Design System v2.0 + Phase 2 (all 9 Behance projects, `EN / PT-BR`) |

---

## Creating a New Version (e.g., `0.2`)

Whenever root changes are ready to freeze as a new release:

```bash
./scripts/release-version.sh 0.2 "Short summary of changes"
```

Then:
1. Add a `## [0.2]` entry in [`../CHANGELOG.md`](../CHANGELOG.md) and a row in the **Archive Index** table above.
2. Commit, tag, and push both branch and tag to GitHub:

```bash
git add -A
git commit -m "v0.2: Short summary of changes"
git tag -a v0.2 -m "Version 0.2 — Short summary of changes"
git push origin main --follow-tags
```

> **Note:** `scripts/release-version.sh` refuses to overwrite an existing `Versions/vX.Y/` directory so archived versions remain immutable.

---

## Previewing an Archived Version Locally

Because all CSS, JS, and asset paths are relative, any archived version runs directly from the local preview server (`./scripts/serve.sh`):

- **v0.3 Portfolio:** http://localhost:4173/Versions/v0.3/
- **v0.3 Design System:** http://localhost:4173/Versions/v0.3/design-system.html
- **v0.2 Portfolio:** http://localhost:4173/Versions/v0.2/
- **v0.2 Design System:** http://localhost:4173/Versions/v0.2/design-system.html
- **v0.1 Portfolio:** http://localhost:4173/Versions/v0.1/
- **v0.1 Design System:** http://localhost:4173/Versions/v0.1/design-system.html

---

## Reverting to a Previous Version

### Option A — Quick Folder Restore (Recommended)
Copy a snapshot directly back into the repository root, inspect `git diff`, and commit:

```bash
cp -R Versions/v0.1/{index.html,design-system.html,design.md,assets,css,js} .
```

### Option B — Restore via Git Tag
Restore the exact deployable files recorded on tag `v0.1`:

```bash
git checkout v0.1 -- index.html design-system.html design.md assets css js
```
