#!/usr/bin/env bash
set -euo pipefail

ALL_VERSIONS=false
if [ "${1:-}" = "--all" ]; then
  ALL_VERSIONS=true
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

ACTIVE_VER=""
if [ -f VERSION ]; then
  ACTIVE_VER="$(tr -d '[:space:]' < VERSION)"
fi

ISSUES=0

# 1. Fail if .env or key material is tracked in Git
TRACKED_ENV="$(git ls-files '.env' '.env.*' '*.pem' '*.key')"
if [ -n "$TRACKED_ENV" ]; then
  echo "[FAIL] Tracked environment or key file detected:"
  echo "$TRACKED_ENV"
  ISSUES=$((ISSUES + 1))
fi

PATTERN='AQ\.[A-Za-z0-9_-]{6,}|AIza[A-Za-z0-9_-]{12,}|ya29\.[A-Za-z0-9_.-]{12,}|GOCSPX-[A-Za-z0-9_-]{12,}|sk-[A-Za-z0-9_-]{16,}|gh[pou]_[A-Za-z0-9]{16,}|github_pat_[A-Za-z0-9_]{20,}|figd_[A-Za-z0-9_-]{16,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]+PRIVATE KEY-----|([A-Za-z](:|%3A)[\\/])Users[\\/][^\\/<>[:space:]"'\'']+|(^|[[:space:]"'\''`(])/Users/[A-Za-z0-9._-]+/|OneDrive(%20| )-(%20| )[A-Za-z0-9._-]+|secom\.df\.gov\.br|https?://drive\.google\.com/(file/d|drive/folders)/[A-Za-z0-9_-]+|https?://wa\.me/[0-9]+|\+55[[:space:]]*\(?61\)?[[:space:]]*9?[0-9]{4}-?[0-9]{4}'

SCANNED=0
while IFS= read -r file; do
  [ -f "$file" ] || continue
  case "$file" in
    scripts/check-sensitive.ps1|scripts/check-sensitive.sh) continue ;;
    *.png|*.jpg|*.jpeg|*.webp|*.gif|*.svg|*.ico|*.woff|*.woff2|*.ttf|*.eot|*.pdf|*.zip|*.mp4|*.webm|*.mov|*.mp3|*.wav) continue ;;
  esac

  if [ "$ALL_VERSIONS" = false ]; then
    case "$file" in
      Versions/*)
        if [ -z "$ACTIVE_VER" ] || [[ "$file" != "Versions/v${ACTIVE_VER}/"* ]]; then
          continue
        fi
        ;;
    esac
  fi

  SCANNED=$((SCANNED + 1))
  if HITS="$(grep -En "$PATTERN" "$file" || true)" && [ -n "$HITS" ]; then
    while IFS= read -r hit; do
      echo "[FAIL] ${file}:${hit}"
      ISSUES=$((ISSUES + 1))
    done <<< "$HITS"
  fi
done < <(git ls-files --cached --others --exclude-standard | sort -u)

echo "Scanned $SCANNED files (AllVersions=$ALL_VERSIONS)."
if [ "$ISSUES" -gt 0 ]; then
  echo "[FAIL] Found $ISSUES sensitive data issue(s)."
  exit 1
fi

echo "[PASS] 0 sensitive data issues found."
