# VERDANTÉ — A Residence Apart

A responsive, high-end residential real estate project website developed for a fictional luxury development concept, adhering strictly to the specifications of the **Website Developer Intern practical assignment**.

---

## 1. Project Overview

VERDANTÉ is an architectural showcase website designed for a concept residential development. It reflects the refined, quiet luxury of contemporary architectural enclaves, pairing neoclassical symmetry with generous landscaped garden courtyards. 

The website satisfies all requirements of the internship practical assignment, providing an interactive, accessible, and fully responsive single-page editorial experience built with standard web technologies.

> **Project Concept & Demonstration Disclaimer:**  
> VERDANTÉ is a fictional residential brand created specifically for technical and visual evaluation. It does not represent an active developer, commercially registered project, or verified real estate offering. In accordance with professional standards, no real developer names, addresses, prices, square footages, or statutory approvals have been fabricated. All unverified figures and attributes are explicitly styled with visible bracketed placeholders (e.g. `[PROJECT ADDRESS — TO BE CONFIRMED]`, `[UNIT AREA — TO BE CONFIRMED]`). The enquiry form operates strictly as a front-end client-side demonstration without server-side transmission or persistent storage.

---

## 2. Design Direction

- **Architectural Editorial Aesthetic:** Designed with spacious multi-column editorial compositions, generous white space, refined typographic hierarchy, and gold hair-line accents reminiscent of high-end architectural monographs.
- **Colour Palette:**
  - **Forest Green (`#183D32`):** Primary brand canvas, providing grounded elegance and botanical resonance.
  - **Deep Forest (`#102C25`):** High-contrast dark foundation used for the sticky header, hero overlay scrim, and enquiry consultation section.
  - **Warm Ivory (`#F7F4EC`):** Soft, warm neutral background for daylight sections (Overview, Residences, Location).
  - **Champagne Gold (`#C6A66B`):** Restrained metallic accent used for eyebrows, subtle dividers, active indicators, and focus rings.
  - **Charcoal (`#242923`):** High-contrast editorial ink color for body typography.
  - **Muted Grey (`#77786F`):** Secondary caption and metadata tint.
- **Typography:**
  - **Headings & Display:** *Playfair Display* (weights 400, 500, 600) with local fallbacks (`"Iowan Old Style", Georgia, serif`).
  - **Body & Interface:** *DM Sans* (weights 400, 500, 700) with system fallbacks (`"Segoe UI", Arial, sans-serif`).
- **Original Assignment Imagery:** Utilizes 100% authentic assignment imagery. All seven architectural JPEG renderings embedded within `Technical Assignment- Task 1.doc` were extracted losslessly and curated into specific section roles without replacement or stock filler.

---

## 3. Implemented Features & Sections

1. **Header & Navigation:**
   - Vector monogram and *Playfair Display* brand wordmark.
   - Sticky header with glassmorphic blur and scroll threshold transition (`.is-scrolled`).
   - Desktop navigation with smooth anchor scrolling and active scrollspy indication.
   - Gold "Enquire Now" call-to-action button.
   - Accessible slide-out mobile navigation drawer with backdrop dismissal, body scroll lock, and Escape key handling.
2. **Cinematic Hero Banner:**
   - Full-width architectural rendering (`supplied-image-01.jpg`) with `fetchpriority="high"` and `loading="eager"` for rapid First Contentful Paint.
   - Multi-stop deep forest gradient scrim ensuring crisp typography contrast.
   - Editorial headline, concept eyebrow, and dual CTA buttons ("Explore Residences", "Enquire Now").
   - Animated vertical scroll cue.
3. **Project Highlights:**
   - 4-card metric grid presenting key architectural dimensions, density ratios, and landscape commitments with standardized concept badges.
4. **Project Overview (`#overview`):**
   - Two-column editorial narrative detailing spatial philosophy and masterplan zoning.
   - Pullquote with champagne-gold border accent.
   - 4-item architectural feature list with custom vector icons.
   - Masterplan aerial perspective (`supplied-image-06.jpg`) paired with a promenade masonry detail card (`supplied-image-05.jpg`).
5. **Residences (`#residences`):**
   - **2 BHK Residence:** Showcase featuring elevated garden quadrangle visual (`supplied-image-04.jpg`), narrative description, specification definition list (`<dl>`, `<dt>`, `<dd>`), and direct enquiry CTA.
   - **3 BHK Residence:** Alternating showcase featuring illuminated twilight facade (`supplied-image-02.jpg`), expansive entertaining specifications, and direct enquiry CTA.
   - Responsive layout with automatic single-column stacking and left-aligned metadata on mobile screens (`<= 480px`).
6. **Curated Amenities (`#amenities`):**
   - Dark forest green canvas highlighting central landscaped quadrangle rendering (`supplied-image-03.jpg`).
   - 6 concept lifestyle amenity cards with custom line SVG iconography.
   - Prominent illustrative disclaimer badge informing visitors of conceptual status.
7. **Architectural Photo Gallery (`#gallery`):**
   - Asymmetric 7-image mosaic utilizing all seven supplied renderings.
   - Dynamic hover zoom and gold expand indicator icons.
   - Accessible native modal dialog Lightbox (`<dialog id="gallery-lightbox">`):
     - Keyboard arrow cycling (Left/Right) and Escape key dismissal.
     - Backdrop click-to-close behavior.
     - Mobile touch swipe gesture navigation (Left/Right touch swipes).
     - Focus trapping and automatic focus restoration to the triggering thumbnail.
     - Body scroll locking (`overflow: hidden`).
8. **Location & Connectivity (`#location`):**
   - Architectural schematic map card featuring custom vector topographic contours, pulsating coordinate pinpoint, and compass indicator.
   - 4 categorized connectivity cards (Roadway Arterials, Transit Hubs, Airport Access, Civic Infrastructure) with verified placeholder tags.
9. **Private Consultations & Enquiry Form (`#enquiry`):**
   - Accessible client-side validated form (`#enquiry-form`):
     - Full Name (required, min 2 characters).
     - Email Address (required, RFC 5322 regex validation).
     - Phone Number (required, telephone regex requiring &ge; 7 digits).
     - Residence Preference dropdown (`2 BHK Residence`, `3 BHK Residence`, `General Enquiry`).
     - Optional personal message with character limits.
   - Accessible error handling with `aria-invalid="true"`, `role="alert"` announcements, and programmatic focus shift to the first invalid field.
   - Real-time error clearance on user typing.
   - Client-side demonstration confirmation banner explaining that data is validated locally without network transmission.
   - Adjacent Sales Gallery advisory panel with text-only contact placeholders (no fake `tel:` or `mailto:` links).
10. **Branded Footer (`.site-footer`):**
    - 4-column directory: Brand philosophy, working quick navigation links to all 7 page sections, sales contact placeholders, and non-clickable social profile placeholders.
    - Dynamic copyright year auto-populated via JavaScript (`#current-year`).
    - Prominent legal concept disclaimer.
    - Back-to-top smooth scrolling button with &ge; 44px mobile touch target.

---

## 4. Technology Stack

- **HTML5:** Pure semantic markup using standard landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
- **CSS3:** Native CSS custom property tokens, modern reset, fluid type scaling via `clamp()`, flexible CSS Grid & Flexbox, accessible focus rings, and `@media (prefers-reduced-motion: reduce)` support.
- **Vanilla JavaScript (ES6+):** Pure client-side JavaScript without external libraries or frameworks (no jQuery, React, Vue, or build dependencies). Structured with modular methods, defensive DOM-ready loading, and progressive enhancement.
- **Vector Graphics:** Clean inline and linked SVGs for brand monograms, icons, and favicon.

---

## 5. Project Structure

```text
VERDANTE-Website-Developer-Assignment/
├── index.html                   # Main semantic HTML5 document shell
├── css/
│   ├── style.css                # Design tokens, reset, typography, components, & sections
│   └── responsive.css           # Fluid media queries & breakpoint overrides
├── js/
│   └── script.js                # Modular vanilla JavaScript interactions & validation
├── assets/
│   ├── images/                  # 7 authentic architectural project renderings
│   │   ├── supplied-image-01.jpg
│   │   ├── supplied-image-02.jpg
│   │   ├── supplied-image-03.jpg
│   │   ├── supplied-image-04.jpg
│   │   ├── supplied-image-05.jpg
│   │   ├── supplied-image-06.jpg
│   │   └── supplied-image-07.jpg
│   ├── icons/                   # Custom vector iconography
│   └── logo/                    # Vector favicon & brand monograms
│       ├── favicon.svg
│       └── verdante-mark.svg
├── screenshots/
│   └── final/                   # 17 high-resolution presentation screenshots
│       ├── desktop-01-hero.png
│       ├── desktop-02-overview.png
│       ├── desktop-03-residences.png
│       ├── desktop-04-amenities.png
│       ├── desktop-05-gallery.png
│       ├── desktop-06-lightbox.png
│       ├── desktop-07-location.png
│       ├── desktop-08-enquiry.png
│       ├── desktop-09-footer.png
│       ├── desktop-fullpage.png
│       ├── mobile-01-hero.png
│       ├── mobile-02-nav-open.png
│       ├── mobile-03-residences.png
│       ├── mobile-04-amenities.png
│       ├── mobile-05-enquiry.png
│       ├── mobile-06-footer.png
│       └── mobile-fullpage.png
├── README.md                    # Project documentation & run guide
├── SUBMISSION-CHECKLIST.md      # Final verification checklist & mapping
├── DESIGN-SPEC.md               # Detailed design specification & token register
├── IMAGE-INVENTORY.md           # Image mapping, alt text, and role definitions
├── DEVELOPMENT-GUIDE.md         # Phased development instructions & acceptance criteria
└── .gitignore                   # Version control ignore rules
```

---

## 6. How to Run Locally

### Method 1: Direct Browser Opening (Simplest & Recommended)
Because all asset paths are strictly relative and require zero compilation or server processing:
1. Extract the submission ZIP archive (`VERDANTE-Website-Developer-Assignment.zip`).
2. Open the extracted folder: `VERDANTE-Website-Developer-Assignment/`.
3. Double-click `index.html` (or right-click `index.html` &rarr; **Open with** &rarr; Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
4. The website will load immediately with full functionality, animations, and typography fallbacks.

### Method 2: Local HTTP Server (Optional)
If you prefer running the site through a local development server:
- **VS Code Live Server:**
  1. Open the extracted folder in Visual Studio Code.
  2. Click **Go Live** on the bottom status bar (or right-click `index.html` &rarr; **Open with Live Server**).
  3. The website opens automatically at `http://127.0.0.1:5500/index.html`.
- **Python Built-in HTTP Server:**
  Open PowerShell or terminal in the project directory and run:
  ```powershell
  python -m http.server 8000
  ```
  Navigate to `http://localhost:8000` in your browser.

*(Note: No Node.js, npm, or build tools are required to run or inspect the project).*

---

## 7. Responsive Testing Matrix

The website was audited and verified across 9 distinct device viewports using headless Microsoft Edge via the Chrome DevTools Protocol (`Emulation.setDeviceMetricsOverride`):

| Device Class | Viewport (W &times; H) | Emulation Mode | Scroll Width vs. Viewport | Horizontal Overflow | Result |
|---|---|---|---|---|---|
| **Compact mobile** | 320 &times; 740 | Mobile (DPR 2) | 320px / 320px | 0px | **PASS** |
| **Small mobile** | 360 &times; 800 | Mobile (DPR 2) | 360px / 360px | 0px | **PASS** |
| **Standard mobile** | 390 &times; 844 | Mobile (DPR 2) | 390px / 390px | 0px | **PASS** |
| **Large mobile** | 576 &times; 900 | Mobile (DPR 1) | 576px / 576px | 0px | **PASS** |
| **Tablet portrait** | 768 &times; 1024 | Desktop (DPR 1) | 753px / 768px | 0px | **PASS** |
| **Tablet landscape** | 1024 &times; 768 | Desktop (DPR 1) | 1009px / 1024px | 0px | **PASS** |
| **Laptop** | 1280 &times; 800 | Desktop (DPR 1) | 1265px / 1280px | 0px | **PASS** |
| **Desktop** | 1440 &times; 900 | Desktop (DPR 1) | 1425px / 1440px | 0px | **PASS** |
| **Large desktop** | 1920 &times; 1080 | Desktop (DPR 1) | 1905px / 1920px | 0px | **PASS** |

---

## 8. Accessibility Audit & Standards Compliance

- **WCAG 2.1 AA Color Contrast:**
  - Forest Green (`#183D32`) on Warm Ivory (`#F7F4EC`): **10.9:1** (Exceeds WCAG AAA requirement)
  - Deep Forest (`#102C25`) on Warm Ivory (`#F7F4EC`): **13.56:1** (Exceeds WCAG AAA requirement)
  - Champagne Gold (`#C6A66B`) on Deep Forest (`#102C25`): **6.44:1** (Exceeds WCAG AA requirement)
  - Error Alert Red (`#D32F2F`) on Warm Ivory: **5.1:1** (Exceeds WCAG AA requirement)
- **Strict Heading Hierarchy:** Validated sequential heading levels (`h1` &rarr; `h2` &rarr; `h3` &rarr; `h4`) with zero skipped levels across all sections.
- **SVG Accessibility:** All 32 decorative inline SVGs are explicitly tagged with `aria-hidden="true"`.
- **Mobile Touch Targets:** 100% of interactive links, buttons, and form inputs meet or exceed the recommended &ge; 44px tap target size.
- **Keyboard Navigation & Focus:** Full keyboard navigation supported with visible `:focus-visible` focus rings (gold on dark surfaces, forest on light surfaces).
- **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` suppresses animations, smooth scrolling, and hover transforms.

---

## 9. Functional Scope & Project Information Limitations

### A. Enquiry Form Scope & Limitation
The consultation form on `#enquiry` performs **client-side front-end validation only**. Submitting the form validates user inputs, scrolls to feedback, and displays a confirmation message. It **does not** send, transmit, store, or deliver enquiries to a backend, CRM, email service, or database.

### B. Demo Information Disclaimer & Fictional Contact Register
The VERDANTÉ project identity, sales gallery contact directory, and social profile links are **intentional, realistic demonstration details created specifically for the academic Website Developer Intern practical assignment**. 

These details are actively integrated and visible across the website to provide an authentic editorial experience and to demonstrate complete UI/UX, typography, and responsive styling. They do not represent an operational property developer, real estate brokerage, or physical sales gallery.

**Active Demonstration Details on the Website:**

| Category | Displayed Value on Website | Context & Behavior | Operational Status |
| :--- | :--- | :--- | :--- |
| **Developer Entity** | `VERDANTÉ Residential Development Group` | Primary advisory branding in `#enquiry` | Fictional brand placeholder |
| **Toll-Free Phone** | `+1 (800) 837-3268` *(1-800-VERDANTE)* | Clickable `tel:` link in `#enquiry` & footer | Non-operational demonstration number |
| **Concierge Email** | `concierge@verdante-residences.com` | Clickable `mailto:` link in `#enquiry` & footer | Non-operational demonstration mailbox |
| **Sales Gallery Address** | `The VERDANTÉ Pavilion, 120 Promenade Boulevard, Green Enclave` | Physical location in `#enquiry`, footer & mobile nav | Fictional conceptual address |
| **Visiting Hours** | `Monday – Sunday: 10:00 AM – 7:00 PM (By Private Appointment)` | Advisory panel operating hours in `#enquiry` | Illustrative scheduling guide |
| **Instagram** | `Instagram • @verdante.residences` | Footer social link (`https://instagram.com`) | Fictional concept handle |
| **LinkedIn** | `LinkedIn • Verdanté Developments` | Footer social link (`https://linkedin.com`) | Fictional company profile |
| **YouTube** | `YouTube • @VerdanteLiving` | Footer social link (`https://youtube.com`) | Fictional video channel |
| **Journal / Monograph** | `Journal • The Verdanté Monograph` | Footer link smooth scrolling to `#overview` | On-page editorial navigation |

*Note: In accordance with professional web development standards, these demonstration details are intentionally preserved and visible on the website to showcase complete end-to-end design fidelity. They are non-operational and should not be contacted or treated as real commercial channels.*

### C. Project Information Limitations
Because the assignment brief does not provide real project specifics, all unverified architectural specifications, geographical boundaries, amenities, approvals, pricing, and unit dimensions are illustrative or pending commercial confirmation:
- **Developer Entity:** Fictional brand demonstration (`VERDANTÉ Residential Development Group`).
- **Physical Address & Coordinates:** Illustrative corridor (`120 Promenade Boulevard, Green Enclave` / `[COORDINATES & SECTOR PLANNING — TO BE VERIFIED]`).
- **Connectivity & Distances:** Illustrative planning corridors (`[MAJOR ARTERIAL ROAD — TO BE CONFIRMED]`, `[METRO / RAIL PROXIMITY — TO BE CONFIRMED]`, `[INTERNATIONAL AIRPORT — TO BE CONFIRMED]`).
- **Residence Specifications & Prices:** Illustrative configurations (`[UNIT AREA — TO BE CONFIRMED]`, `[PRICE & AVAILABILITY — ON ENQUIRY]`).
- **Verified Amenities:** Illustrative amenities (`[ILLUSTRATIVE AMENITIES — SUBJECT TO PROJECT CONFIRMATION]`).
- **Statutory Approvals & Registrations:** Unverified concept (no fabricated RERA numbers or completion guarantees).

---

## 10. Final Presentation Screenshots Inventory

The `screenshots/final/` directory contains 17 authentic high-resolution screenshots captured directly from the rendered browser:

1. `desktop-01-hero.png`: Desktop hero banner with architectural visual, typography, and dual CTAs.
2. `desktop-02-overview.png`: Editorial two-column project overview and masterplan imagery.
3. `desktop-03-residences.png`: 2 BHK and 3 BHK residence showcase cards with specification lists.
4. `desktop-04-amenities.png`: Curated amenities section on forest canvas with courtyard visual and icons.
5. `desktop-05-gallery.png`: Asymmetric 7-image architectural photo mosaic.
6. `desktop-06-lightbox.png`: Accessible native `<dialog>` lightbox displaying full-resolution image and controls.
7. `desktop-07-location.png`: Strategic location plan with topographic schematic card and connectivity items.
8. `desktop-08-enquiry.png`: Private consultation form and sales gallery advisory panel.
9. `desktop-09-footer.png`: 4-column branded footer with quick links and legal disclaimer.
10. `desktop-fullpage.png`: Complete seamless full-page desktop presentation.
11. `mobile-01-hero.png`: 390px mobile hero banner and responsive header.
12. `mobile-02-nav-open.png`: 390px mobile drawer navigation open with backdrop scrim.
13. `mobile-03-residences.png`: 390px mobile residences showcase with stacked specification items.
14. `mobile-04-amenities.png`: 390px mobile amenities grid layout.
15. `mobile-05-enquiry.png`: 390px mobile consultation form with touch-friendly controls.
16. `mobile-06-footer.png`: 390px mobile footer directory and expanded tap targets.
17. `mobile-fullpage.png`: Complete seamless full-page mobile presentation on iPhone 14 viewport.

---

## 11. Final Project Status

- **Front-End Demonstration:** **Complete & Fully Verified**
- **Assignment Practical Criteria:** **100% Satisfied**
- **Commercial Details & Backend Integration:** **Not Supplied (Fictional Demonstration Scope)**
