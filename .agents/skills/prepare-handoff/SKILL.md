---
name: prepare-handoff
description: >-
  Standard routine for preparing a project for cross-machine handoff. Use whenever
  the user asks to "prepare for handoff", "create handoff", or run the handoff
  routine: updates and verifies handoff/history docs, creates a `<project>-handoff-<ddmmyy>.zip`
  archive, saves it to `C:\Users\Lucas.Moreira\OneDrive - secom.df.gov.br\AGY\Handoffs`,
  and uploads it to Google Drive under `Antigravity/Handoffs`.
---

# Prepare Project Handoff Routine

Follow this exact 4-step workflow whenever the user asks to **prepare for handoff**.

---

## 1. Update & Verify Handoff Files

1. **Check Workspace State:** Inspect `git status -sb` (if Git is initialized), `VERSION`, `CHANGELOG.md`, `HANDOFF.md`, `README.md`, and `docs/`.
2. **Update `HANDOFF.md`:** Ensure current version, status, file manifest, technical invariants, and next steps reflect the latest work.
3. **Update `docs/CONVERSATION_HISTORY.md`:** Append a concise chronological summary of the current session's decisions, changes, and verification results.
4. **Export Sanitized Transcript (`docs/history/conversation_log.json`):**
   - Read `<appDataDir>\brain\<conversation-id>\.system_generated\logs\transcript.jsonl`.
   - Keep only `USER_INPUT` and `PLANNER_RESPONSE` entries (excluding `SYSTEM_MESSAGE`, `GENERIC`, and internal `thinking`).
   - Strip machine-specific absolute home paths (e.g., `C:\Users\<user>\...`) so zero absolute user paths leak into the repository.
5. **Commit Doc Updates (if Git repo):** Stage and commit updated handoff/history files cleanly so the archived repo has a clean working tree.

---

## 2. Build `<project>-handoff-<ddmmyy>.zip`

1. Derive `<project>` from the workspace directory name (e.g., `DesignPortfolio`) and `<ddmmyy>` from the current local date (e.g., `231126`).
2. Build the archive in `<appDataDir>\brain\<conversation-id>\scratch\<project>-handoff-<ddmmyy>.zip` using `System.IO.Compression.ZipFile` (excluding any existing `*.zip` files), with all entries rooted cleanly under `<project>/` using forward slashes (`/`).
3. Verify the ZIP byte size and file count.

---

## 3. Save to Local Handoffs Folder

Copy the verified ZIP from scratch to:
```
C:\Users\Lucas.Moreira\OneDrive - secom.df.gov.br\AGY\Handoffs\<project>-handoff-<ddmmyy>.zip
```
*(Create the `Handoffs` directory if it does not exist. On Windows inside the sandbox, run the copy step with `BypassSandbox: true`.)*

---

## 4. Upload to Google Drive (`Antigravity/Handoffs`)

Use the `gdrive` CLI (following the `gdrive` skill):
1. Locate the `Antigravity` folder in Google Drive (`gdrive readonly search --name-exact "Antigravity"`).
2. Locate the `Handoffs` folder inside `Antigravity` (`gdrive readonly ls <antigravityId>`); create it via `gdrive mutate mkdir "Handoffs" --parent <antigravityId>` if missing.
3. Upload the scratch ZIP via:
   ```powershell
   gdrive mutate upload "<scratchDir>\<project>-handoff-<ddmmyy>.zip" --parent <handoffsFolderId>
   ```
4. Run `gdrive readonly url <uploadedFileId>` and report both the local `.zip` path and the Google Drive URL to the user.
