# Tablet Breakpoint Changes

## Overview
The tablet breakpoint (441px - 1319px) now includes a copy of `column/vloeren` inserted into `wrapper/content/center` between `column/images/2` and `column/about` with 24px gaps on top and bottom.

## Changes Made

### 1. Created TabletWrapperContentCenter Component
**File**: `/src/app/components/sections/tablet/TabletWrapperContentCenter.tsx`

This component replicates the desktop center wrapper but with the added vloeren column:

**Structure (bottom to top)**:
- `wrapper/contact` (bottom: -204px) - Contact form section
- `wrapper/images/center` (bottom: 1573px) - Work portfolio images
- **`column/vloeren`** (bottom: 2553px) - **NEW - Floor types grid**
- `wrapper/about` (bottom: 3331px, adjusted from 2553px) - About section

**Spacing**:
- 24px gap between `wrapper/images/center` and `column/vloeren`
- 24px gap between `column/vloeren` and `wrapper/about`

### 2. Updated TabletScrollController
**File**: `/src/app/components/TabletScrollController.tsx`

**Changes**:
- Now imports and uses `TabletWrapperContentCenter` instead of desktop's `WrapperContentCenter`
- Adjusted scroll distances to account for added height:
  - `maxScroll`: 4000px → 4778px (+778px)
  - `scrollOffset`: 3517px → 4295px (+778px)
- Updated debug panel to show "TABLET" label and new measurements

### 3. Calculations

**Added Height**:
- column/vloeren: 754px
- Gap above: 24px
- Gap below: 24px
- **Total added**: 778px (corrected from initial 802px with 48px gap)

**Position Adjustments**:
- `wrapper/about`: 2553px → 3331px (+778px)
- `wrapper/content/center` height: 3642px → 4420px (+778px)
- `wrapper/content/center` bottom: -3307px → -4085px (-778px)

**Scroll Distance**:
- Desktop: 3517px travel over 4000px scroll
- Tablet: 4295px travel over 4778px scroll (+778px)

## Desktop Protection
Desktop remains completely unchanged:
- Uses original `WrapperContentCenter` from imports
- Original scroll distances (4000px / 3517px)
- No references to tablet-specific components

## File Structure
```
/src/app/components/
├── DesktopScrollController.tsx    # Desktop (≥1320px) - UNCHANGED
├── TabletScrollController.tsx     # Tablet (441-1319px) - UPDATED
├── MobileScrollController.tsx     # Mobile (≤440px) - Mirrors desktop
├── sections/
│   ├── ContactSection.tsx         # Shared
│   ├── VloerenSection.tsx         # Shared (used in left column)
│   ├── InterieurSection.tsx       # Shared (used in right column)
│   └── tablet/
│       └── TabletWrapperContentCenter.tsx  # NEW - Tablet-specific center wrapper
```

## Testing
To test the tablet breakpoint:
1. Resize browser window to between 441px and 1319px width
2. Debug panel shows "TABLET" in purple
3. Scroll to see column/vloeren appear between portfolio images and about section with proper 24px gaps
4. All elements scroll at unified pace (no parallax)
5. Resize to ≥1320px to verify desktop is unchanged