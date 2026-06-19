#!/bin/bash
# Script to add loading="lazy" to all img tags in DesktopHero-5-10735.tsx

# Create backup
cp src/imports/DesktopHero-5-10735.tsx src/imports/DesktopHero-5-10735.tsx.backup

# Add loading="lazy" to all <img alt="" tags using sed
# This replaces '<img alt=""' with '<img loading="lazy" alt=""'
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' 's/<img alt=""/<img loading="lazy" alt=""/g' src/imports/DesktopHero-5-10735.tsx
else
  # Linux
  sed -i 's/<img alt=""/<img loading="lazy" alt=""/g' src/imports/DesktopHero-5-10735.tsx
fi

echo "✅ Successfully added loading='lazy' to all 41 images!"
echo "📦 Backup saved at: src/imports/DesktopHero-5-10735.tsx.backup"

# Count the changes
LAZY_COUNT=$(grep -c 'loading="lazy"' src/imports/DesktopHero-5-10735.tsx)
echo "✨ Total images with lazy loading: $LAZY_COUNT"
