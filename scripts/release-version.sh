#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: ./scripts/release-version.sh <version> [summary]" >&2
  echo "Example: ./scripts/release-version.sh 0.2 \"Swap project cover images\"" >&2
  exit 1
fi

RAW_VERSION="$1"
VERSION_NUM="${RAW_VERSION#v}"
SUMMARY="${2:-Portfolio snapshot v${VERSION_NUM}}"

if ! [[ "$VERSION_NUM" =~ ^[0-9]+\.[0-9]+(\.[0-9]+)?$ ]]; then
  echo "Error: Invalid version '$RAW_VERSION'. Expected format like 0.1, 0.2, or 1.0.0." >&2
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="$ROOT_DIR/Versions/v${VERSION_NUM}"

if [ -e "$DEST_DIR" ]; then
  echo "Error: $DEST_DIR already exists. Archived versions are immutable—pick a new version number." >&2
  exit 1
fi

mkdir -p "$DEST_DIR"

ITEMS=(index.html design-system.html design.md assets css js)
for item in "${ITEMS[@]}"; do
  if [ ! -e "$ROOT_DIR/$item" ]; then
    echo "Error: Expected site item '$item' not found in $ROOT_DIR" >&2
    rm -rf "$DEST_DIR"
    exit 1
  fi
  cp -R "$ROOT_DIR/$item" "$DEST_DIR/"
done

find "$DEST_DIR" -name ".DS_Store" -delete

ARCHIVED_DATE="$(date +%Y-%m-%d)"
BASE_COMMIT="$(git -C "$ROOT_DIR" rev-parse --short HEAD 2>/dev/null || echo "uncommitted")"

cat > "$DEST_DIR/VERSION_INFO.md" <<EOF
# Version v${VERSION_NUM}

- **Version:** \`v${VERSION_NUM}\`
- **Archived Date:** ${ARCHIVED_DATE}
- **Git Tag:** \`v${VERSION_NUM}\`
- **Base Commit:** \`${BASE_COMMIT}\`
- **Summary:** ${SUMMARY}

## Local Preview

- **Portfolio:** http://localhost:4173/Versions/v${VERSION_NUM}/
- **Design System:** http://localhost:4173/Versions/v${VERSION_NUM}/design-system.html

## Restore This Version

Copy snapshot back to the repository root:

\`\`\`bash
cp -R Versions/v${VERSION_NUM}/{index.html,design-system.html,design.md,assets,css,js} .
\`\`\`

Or restore directly from the Git tag:

\`\`\`bash
git checkout v${VERSION_NUM} -- index.html design-system.html design.md assets css js
\`\`\`
EOF

printf '%s\n' "$VERSION_NUM" > "$ROOT_DIR/VERSION"

echo "Archived v${VERSION_NUM} -> Versions/v${VERSION_NUM}/"
echo "Updated VERSION -> ${VERSION_NUM}"
echo ""
echo "Next steps:"
echo "  1. Update CHANGELOG.md and Versions/README.md for v${VERSION_NUM}"
echo "  2. git add -A"
echo "  3. git commit -m \"v${VERSION_NUM}: ${SUMMARY}\""
echo "  4. git tag -a v${VERSION_NUM} -m \"Version ${VERSION_NUM} — ${SUMMARY}\""
echo "  5. git push origin main --follow-tags"
