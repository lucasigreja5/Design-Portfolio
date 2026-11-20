#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Serving $ROOT_DIR"
echo "Portfolio:      http://localhost:${PORT}/"
echo "Design System:  http://localhost:${PORT}/design-system.html"

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT"
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l "$PORT" .
else
  echo "Error: Install Python 3 or Node.js (npx) to serve locally, or open index.html directly in your browser." >&2
  exit 1
fi
