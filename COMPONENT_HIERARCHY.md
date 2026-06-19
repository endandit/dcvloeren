# Component Hierarchy - Contact Section

Visual guide showing how the modular components compose together.

## 🏗️ Component Tree

```
ContactSection (Section)
│
├── Icon (80x80px contact icon)
│
├── ContactForm (Organism)
│   ├── InputName (from imports)
│   ├── InputMail (from imports)
│   ├── CheckTopicsGrid (Organism)
│   │   ├── Row1 (internal)
│   │   │   ├── CheckboxParket (Molecule)
│   │   │   │   └── CheckedParket (internal)
│   │   │   │       └── IconCheck (Atom)
│   │   │   └── CheckboxLaminaat (Molecule)
│   │   │       └── HoverLaminaat (internal)
│   │   ├── Row2 (internal)
│   │   │   ├── CheckboxPvc (Molecule)
│   │   │   │   └── DefaultPvc (internal)
│   │   │   └── CheckboxMicrocement (Molecule)
│   │   │       └── DefaultMicrocement (internal)
│   │   ├── Row3 (internal)
│   │   │   ├── CheckboxTraptreden (Molecule)
│   │   │   │   └── DefaultTraptreden (internal)
│   │   │   └── CheckboxRenovatie (Molecule)
│   │   │       └── DefaultRenovatie (internal)
│   │   └── Row4 (internal)
│   │       ├── CheckboxAkoestiek (Molecule)
│   │       │   └── DefaultAkoestiek (internal)
│   │       └── CheckboxInterieur (Molecule)
│   │           └── DefaultInterieur (internal)
│   └── ButtonSend (Molecule)
│       └── WrapperSend (internal)
│           └── IconSend (Atom)
│
├── QrCode (Organism)
│   └── QrVCard (internal)
│       ├── ClipPathGroup × 7 (internal)
│       └── SVG masks
│
└── ContactFooter (Organism)
    └── Column (internal)
        ├── Row1 (internal)
        │   ├── IconCopyright (Atom)
        │   └── Text elements
        └── Row2 (internal)
            ├── IconPhoneCall (Atom)
            └── Text elements
```

## 📦 File Locations

### Section
```
/src/app/components/sections/ContactSection.tsx
```

### Organisms
```
/src/app/components/organisms/forms/ContactForm.tsx
/src/app/components/organisms/forms/CheckTopicsGrid.tsx
/src/app/components/organisms/qr/QrCode.tsx
/src/app/components/organisms/footer/ContactFooter.tsx
```

### Molecules
```
/src/app/components/molecules/buttons/ButtonSend.tsx
/src/app/components/molecules/checkboxes/CheckboxParket.tsx
/src/app/components/molecules/checkboxes/CheckboxLaminaat.tsx
/src/app/components/molecules/checkboxes/CheckboxPvc.tsx
/src/app/components/molecules/checkboxes/CheckboxMicrocement.tsx
/src/app/components/molecules/checkboxes/CheckboxTraptreden.tsx
/src/app/components/molecules/checkboxes/CheckboxRenovatie.tsx
/src/app/components/molecules/checkboxes/CheckboxAkoestiek.tsx
/src/app/components/molecules/checkboxes/CheckboxInterieur.tsx
```

### Atoms
```
/src/app/components/atoms/icons/IconCheck.tsx
/src/app/components/atoms/icons/IconSend.tsx
/src/app/components/atoms/icons/IconCopyright.tsx
/src/app/components/atoms/icons/IconPhoneCall.tsx
```

## 🔄 Data Flow

```
User Interaction → Checkbox (Molecule) → CheckTopicsGrid (Organism) → ContactForm (Organism) → ContactSection (Section)
```

## 🎨 Styling Patterns

### Shadow Effect (Inset)
All major containers use the same shadow pattern:
```tsx
shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]
```

### Color Scheme
- **Active/Selected**: `#141311` (dark)
- **Inactive/Golden**: `#D3BB51` (golden)
- **Background**: `#f0f0f0` (light gray)
- **Secondary Text**: `#817b6e` (muted brown)

### Typography
- **Headings**: `Oswald:Light` / `Oswald:Medium`
- **Sizes**: 18px (labels), 26px (buttons), 28px (headings)
- **Line Heights**: 44.8px, 41.6px, 42px

## 📐 Dimensions

### Section Level
- Width: `440px` (fixed)
- Gap between elements: `48px`

### Organism Level
- Form height: `651px`
- Checkbox grid: Auto (based on rows)
- QR Code: Auto (aspect ratio maintained)
- Footer: Auto (based on content)

### Molecule Level
- Checkbox size: `45px × 45px`
- Button height: `93px`
- Icon sizes: `24px` (check), `45px` (send/copyright/phone)

### Atom Level
- Icons: `24px` or `45px`
- SVG viewBoxes: Match original Figma exports

## 🔗 Import Dependencies

### External Dependencies
- `figma:asset/*` - Image assets
- `/src/imports/svg-226kpvnlk0` - SVG path data
- `/src/imports/svg-7500k` - Vector masks for QR code
- `/src/imports/InputName` - Form input component
- `/src/imports/InputMail` - Form input component

### Internal Dependencies
All components only import from their relative paths within the component hierarchy.

## 🚀 Usage Example

### In DesktopScrollController
```tsx
import { ContactSection } from '../sections/ContactSection';

function WrapperContentCenter() {
  return (
    <div className="absolute bottom-[-3307px] h-[3435px] left-1/2 translate-x-[-50%] w-[440px]">
      <ContactSection />
      {/* other sections */}
    </div>
  );
}
```

### For Tablet (Future)
```tsx
import { ContactForm } from '@/components/organisms/forms/ContactForm';
import { QrCode } from '@/components/organisms/qr/QrCode';

function TabletContactSection() {
  return (
    <div className="tablet-specific-layout">
      <ContactForm />
      <QrCode />
      {/* Adapted layout for tablet */}
    </div>
  );
}
```

### For Mobile (Future)
```tsx
import { CheckboxParket } from '@/components/molecules/checkboxes/CheckboxParket';
// Import only needed checkboxes

function MobileContactForm() {
  return (
    <div className="mobile-layout">
      {/* Simplified form for mobile */}
      <CheckboxParket />
      {/* ... */}
    </div>
  );
}
```

## ✨ Benefits Summary

| Aspect | Before | After |
|--------|--------|-------|
| **Files** | 1 monolithic | 14 modular |
| **Lines per file** | 1300+ | 20-150 |
| **Reusability** | None | 100% |
| **Find component** | Search 1300 lines | Navigate folder |
| **Test component** | Impossible | Easy |
| **Modify checkbox** | Edit huge file | Edit 1 file |
| **Add new checkbox** | Complex | Copy template |
| **Responsive** | Duplicate all | Import + adapt |

---

_This structure can be applied to ALL remaining sections following the same pattern._
