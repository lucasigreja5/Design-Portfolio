# Project Rules & Privacy Policy — Lucas Igreja Portfolio

## 1. Pre-Commit & Pre-Push Privacy & Secrets Policy (Mandatory)

Never commit, push to GitHub, or package inside handoff archives any secret, credential, or unintended personal/workplace metadata:

1. **Secrets & Environment Files:**
   - Keep `.env` and `.env.local` strictly git-ignored (`git ls-files` must never list them).
   - Never commit API keys, OAuth client secrets/tokens, bearer tokens, personal access tokens, or private keys anywhere in source files, docs, scripts, or logs.
2. **Sanitized Docs & Conversation Exports:**
   - Before committing `docs/history/conversation_log.json`, `docs/CONVERSATION_HISTORY.md`, `HANDOFF.md`, or `.agents/` skill/rule files:
     - Strip all absolute local home paths (Windows user profile paths, macOS user home paths, URL-encoded workspace URIs) and workplace/organization OneDrive folder paths.
     - Redact all API keys, tokens, personal phone/WhatsApp numbers not intentionally published on the live portfolio, and private Google Drive file/folder URLs.
3. **Mandatory Pre-Push Check:**
   - Always run the repository privacy scanner before committing doc updates, cutting a release, preparing a handoff archive, or pushing to GitHub:
     - **Windows (PowerShell):** `powershell -NoProfile -ExecutionPolicy Bypass -File "scripts\check-sensitive.ps1"`
     - **macOS / Linux (Bash):** `./scripts/check-sensitive.sh`
   - Do not commit or push while the scanner reports `[FAIL]`.
4. **If a Secret Ever Enters an Unpushed Commit:**
   - Immediately redact the file, amend/rewrite the unpushed commit history, run `git reflog expire --expire-unreachable=now --all && git gc --prune=now`, verify `git log --all -S "<prefix>"` returns zero hits, and rotate/revoke any exposed credential in its provider console.

---

## 2. Architecture & Workflow Invariants

- **First Read:** Read `HANDOFF.md`, `design.md`, and `docs/CONVERSATION_HISTORY.md` before making major architectural or design changes.
- **Zero-Build Static Architecture:** Keep pure static HTML5 + CSS3 custom properties + Vanilla JS attached to `window.*` (`PORTFOLIO_DATA`, `PortfolioUI`, `PortfolioMotion`) with zero bundler dependencies so `http://localhost:4173/` and `file://` both work cleanly.
- **Design System v2.0:** Pure `#000000` canvas + single surgical `#D4FF00` accent, ALL-CAPS `Clash Display` + `Inter` + `JetBrains Mono`, `0px` sharp media/card/modal corners, `overflow-x: clip` preserved for sticky rail compatibility, and `EN / PT-BR` bilingual parity.
- **GitHub Pushes:** Never run `git push` automatically unless explicitly requested by the user (local commits and annotated tags are synced manually via GitHub Desktop).
