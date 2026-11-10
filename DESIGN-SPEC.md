# VERDANTÉ — Design Specification

**Project:** VERDANTÉ — A Residence Apart  
**Document status:** Phase 7 Finalized — Multi-Device QA Verified  
**Last updated:** 10 November 2026  
**Implementation status:** Phase 7 Complete — Ready for Phase 8 (Documentation & Final Release)

---

## 1. Source audit & asset verification

### 1.1 Repository contents at audit

```text
Internship t1/
├── DEVELOPMENT-GUIDE.md
├── DESIGN-SPEC.md
├── IMAGE-INVENTORY.md
├── Task 2- Questionnaire.doc
└── assets/
    └── images/
        ├── supplied-image-01.jpg  (1280x720, 161.8 KB)
        ├── supplied-image-02.jpg  (1280x720, 149.1 KB)
        ├── supplied-image-03.jpg  (1280x720, 148.2 KB)
        ├── supplied-image-04.jpg  (1280x720, 143.3 KB)
        ├── supplied-image-05.jpg  (1280x720, 166.5 KB)
        ├── supplied-image-06.jpg  (1280x720, 223.7 KB)
        └── supplied-image-07.jpg  (1280x720, 134.0 KB)
```

- **Source Assignment Brief:** Located in `c:\Users\Admin\OneDrive\Desktop\Technical Assignment- Task 1.doc` (1.16 MB).
- **Embedded Images:** The brief explicitly mandated: *"Note: Use the images attached"*. All 7 original JPEG renderings were extracted directly from the assignment document into `assets/images/` without recompression or downsampling.
- **Image Characteristics:** High-resolution architectural 3D visualizations depicting the project's neoclassical facade, twilight lighting, gated arrival court, internal garden courtyards, residential promenade, and panoramic master aerial view.
- **No external stock imagery:** 100% of images used in the project will be the authentic assignment-provided architectural assets.

### 1.2 Content integrity & placeholder protocol

VERDANTÉ is a fictional, conceptual residential brand created specifically for this internship assignment. To ensure complete honesty and compliance with professional standards:
- **No fabricated facts:** No real developer names, project addresses, RERA registration numbers, pricing figures, exact square footage, completion dates, or investment guarantees have been invented.
- **Standardized Placeholder Syntax:** All unverified figures and attributes are styled with prominent, editable bracketed placeholders:
  ```text
  [PROJECT LOCATION — PLACEHOLDER]
  [PHONE — PLACEHOLDER]
  [EMAIL — PLACEHOLDER]
  [UNIT AREA — TO BE CONFIRMED]
  [PRICE — TO BE CONFIRMED]
  [AMENITY — ILLUSTRATIVE]
  ```
- **Demo Form Status:** The contact and enquiry forms are strictly front-end client-side demonstrations and clearly inform the visitor that no data is transmitted to an active server.

---

## 2. Brand identity

### 2.1 Name and descriptor

- **Wordmark:** VERDANTÉ (set in *Playfair Display*, 400 weight, subtle tracking)
- **Descriptor:** A Residence Apart
- **Brand Positioning:** Refined, calm, architectural residential living. Inspired by the cadence of classical European architecture blended with lush landscape courtyards and contemporary detailing.
- **Tone of Voice:** Architectural, restrained, sensory, unhurried, and precise. No sensational marketing cliches, exclamation marks, or hyperbolic claims.

### 2.2 Brand principles

1. **Architectural Gravitas:** Let the spatial rhythm, materials, and lighting tell the story.
2. **Quiet Luxury:** Sophistication communicated through whitespace, hairlines, and typography rather than excessive decoration.
3. **Editorial Composition:** Asymmetrical balance, structured typography, and generous negative space reminiscent of high-end architectural monographs.
4. **Honesty & Transparency:** Explicit placeholder indicators for all preliminary project specifications.

---

## 3. Colour system

### 3.1 Core tokens (approved, exact)

| Token | Hex | Primary use |
|---|---|---|
| `--color-forest` | `#183D32` | Primary brand surface, hero background, dark sections, body text on ivory |
| `--color-forest-deep` | `#102C25` | Deep header background on scroll, footer surface, dark overlays |
| `--color-ivory` | `#F7F4EC` | Main page canvas, light section backgrounds, text on dark forest surfaces |
| `--color-gold` | `#C6A66B` | Primary button fill, hairline accents, ornamental dividing rules |
| `--color-charcoal` | `#242923` | High-contrast body text on light canvas |
| `--color-muted` | `#77786F` | Secondary captions, metadata, subtle borders |
| `--color-white` | `#FFFFFF` | Form inputs, modal backgrounds, crisp card highlights |

### 3.2 Derived tokens & translucent tints

```css
:root {
  --color-forest: #183D32;
  --color-forest-deep: #102C25;
  --color-ivory: #F7F4EC;
  --color-gold: #C6A66B;
  --color-charcoal: #242923;
  --color-muted: #77786F;
  --color-white: #FFFFFF;

  /* Derived functional tokens */
  --color-ink-soft: #5F6259;
  --color-line: rgba(24, 61, 50, 0.16);
  --color-line-light: rgba(247, 244, 236, 0.22);
  --color-gold-line: rgba(198, 166, 107, 0.45);
  --color-gold-hover: #D8BE8A;
  --color-overlay: rgba(16, 44, 37, 0.65);
  --color-overlay-dark: rgba(16, 44, 37, 0.85);
  --color-error: #8C2F2F;
  --color-success: #2E5B45;
}
```

### 3.3 Contrast rules (WCAG 2.1 AA)

- Forest (`#183D32`) on Ivory (`#F7F4EC`): **10.9:1** (Passes AAA)
- Deep Forest (`#102C25`) on Ivory (`#F7F4EC`): **13.56:1** (Passes AAA)
- Ivory (`#F7F4EC`) on Forest (`#183D32`): **10.9:1** (Passes AAA)
- Gold (`#C6A66B`) on Deep Forest (`#102C25`): **6.44:1** (Passes AA for normal text, AAA for large)
- Deep Forest (`#102C25`) on Gold (`#C6A66B`): **6.44:1** (Passes AA/AAA for buttons)
- Charcoal (`#242923`) on Ivory (`#F7F4EC`): **13.49:1** (Passes AAA)
- Gold is **never** used for body text on ivory (2.11:1 ratio is strictly decorative).

---

## 4. Typography

### 4.1 Font stacks

```css
--font-display: "Playfair Display", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
--font-body: "DM Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
```

- **Display Serif:** Google Font *Playfair Display* (weights 400, 500, 600) for headlines, wordmark, and pull quotes.
- **Body & UI Sans:** Google Font *DM Sans* (weights 400, 500, 700) for all reading text, forms, navigation, and badges.
- Local system font fallbacks ensure seamless layout integrity if web fonts fail to load.

### 4.2 Fluid typographic scale

```css
--text-xs: clamp(0.7rem, 0.68rem + 0.1vw, 0.75rem);       /* 11-12px: Eyebrows, tags */
--text-sm: clamp(0.8125rem, 0.78rem + 0.16vw, 0.875rem);  /* 13-14px: Captions, meta */
--text-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);      /* 16-18px: Body text */
--text-lg: clamp(1.125rem, 1.05rem + 0.35vw, 1.35rem);    /* 18-21.6px: Lead text */
--text-xl: clamp(1.4rem, 1.25rem + 0.75vw, 1.85rem);     /* 22.4-29.6px: Card titles */
--text-2xl: clamp(1.85rem, 1.55rem + 1.5vw, 2.75rem);    /* 29.6-44px: Section h2 */
--text-3xl: clamp(2.35rem, 1.95rem + 2vw, 3.65rem);      /* 37.6-58.4px: Subheadings */
--text-display: clamp(2.75rem, 2.1rem + 3.25vw, 5.25rem); /* 44-84px: Hero title */
```

---

## 5. Spacing, grid and layout

### 5.1 Spacing tokens

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-9: 6rem;     /* 96px */
--space-10: 8rem;    /* 128px */

--section-y: clamp(4.5rem, 8vw, 8rem);
--section-y-tight: clamp(3rem, 5vw, 5rem);
```

### 5.2 Container constraints

```css
--container-max: 1320px;
--container-narrow: 860px;
--gutter: clamp(1.25rem, 4vw, 3.5rem);
```

---

## 6. Component specification

### 6.1 Buttons & interactive controls

- **Primary Button (`.btn-primary`):** Gold fill (`#C6A66B`), deep forest text (`#102C25`), 1px gold border. Hover shifts to `--color-gold-hover` (`#D8BE8A`).
- **Secondary Button Light (`.btn-outline-light`):** Transparent fill, ivory border (`#F7F4EC`), ivory text. Hover shifts to ivory background with forest text.
- **Secondary Button Dark (`.btn-outline-dark`):** Transparent fill, forest border (`#183D32`), forest text. Hover shifts to forest background with ivory text.
- **Button Sizing:** Minimum 48px touch height, 2px border radius, uppercase 0.75rem DM Sans with `letter-spacing: 0.12em`.

### 6.2 Header & navigation

- Fixed position with smooth blur backdrop (`backdrop-filter: blur(12px)`).
- Semi-transparent at hero scroll position; transitions to solid deep forest (`#102C25`) with hairline border on scroll.
- Mobile Navigation: Full-screen modal overlay with keyboard focus trap, visible close button, Escape key dismissal, and automatic close on navigation link click.

### 6.3 Gallery & accessible lightbox

- 7-item architectural grid highlighting the supplied assignment renderings.
- Built-in accessible lightbox using native `<dialog>` element:
  - Supports keyboard navigation (Escape to close, Left/Right arrow keys to cycle images).
  - Touch swipe gestures for mobile devices.
  - ARIA live region announcing current image counter (e.g., "Image 2 of 7").
  - Trap focus within modal while open and return focus to triggering thumbnail upon dismissal.

### 6.4 Form & validation

- Fields: Full Name, Email Address, Phone Number, Preferred Residence (2 BHK / 3 BHK / Both), and Message.
- Clear demo notification: *"Notice: This is a front-end demonstration form. Submissions are validated locally in your browser and are not transmitted to an external server."*
- Inline validation with descriptive error messages linked via `aria-describedby`.

---

## 7. Required section architecture

1. **Header / Navigation:** Branded wordmark, navigation links (Overview, Residences, Amenities, Gallery, Location), Contact CTA, mobile hamburger trigger.
2. **Hero:** Featuring `supplied-image-01.jpg` with refined twilight aesthetic, headline, descriptor, primary/secondary CTAs, and scroll indicator.
3. **Project Highlights:** Four restrained metric cards with clear placeholder tags (Residences, Site Area, Green Open Space, Status).
4. **Project Overview:** Asymmetrical editorial layout pairing narrative copy with `supplied-image-06.jpg` (Aerial Masterplan) and `supplied-image-05.jpg` (Promenade).
5. **Residences:** Dedicated 2 BHK (`supplied-image-04.jpg`) and 3 BHK (`supplied-image-02.jpg`) specification blocks with placeholder dimensions and floor features.
6. **Amenities:** Refined dark-forest showcase with `supplied-image-03.jpg` (Courtyard) and illustrative lifestyle amenities.
7. **Project Gallery:** 7-image interactive architectural mosaic.
8. **Location & Connectivity:** Location placeholder, stylized connectivity card, and illustrative proximity markers.
9. **Enquiry & Contact:** Interactive validated demo form, placeholder sales contact details, and office hours.
10. **Footer:** Brand identity, quick navigation links, legal disclaimers, placeholder social links, and copyright with dynamic year.

---

## 8. Implementation phases

- **Phase 1 (Complete):** Audit, asset extraction, design tokens, image mapping, and implementation plan.
- **Phase 2:** Project foundation (HTML shell, CSS variables, typography reset, responsive base, vanilla JS starter).
- **Phase 3:** Header, Hero, and Project Highlights.
- **Phase 4:** Project Overview and 2 BHK & 3 BHK Residences.
- **Phase 5:** Amenities and Interactive Project Gallery.
- **Phase 6:** Location & Connectivity, Enquiry Form, and Branded Footer.
- **Phase 7:** Responsive polish and QA across all 5 target viewports (360px, 390px, 768px, 1280px, 1440px).
- **Phase 8:** Documentation, genuine screenshots, and final delivery ZIP.
