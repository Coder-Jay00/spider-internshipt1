# VERDANTÉ — AI Coding Development Guide

This guide is intended to be used with `MASTER-PROMPT.md`. Give the coding AI the master prompt first, then provide one phase prompt at a time.

## Repository expectations

Use the current project folder. Before making changes, inspect the repository. Expected structure:

```text
premium-residences-website/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
├── screenshots/
├── README.md
├── DESIGN-SPEC.md
└── .gitignore
```

The exact image filenames may differ. The AI must inspect `assets/images/` and use the supplied assignment images rather than assuming filenames.

---

## Phase 1 — Audit and design specification

**Prompt to coding AI:**

> Read `MASTER-PROMPT.md` and inspect the entire current project. Review every image in `assets/images/` and identify which are best suited to the hero, overview and gallery. Do not start implementing the full website yet.
>
> Finalize `DESIGN-SPEC.md` with: brand identity for VERDANTÉ, design principles, exact colour tokens, typography, spacing scale, container widths, button styles, image treatment, desktop/mobile layout principles, section order and accessibility rules.
>
> Create a short image inventory mapping actual filenames to intended use. Do not rename or delete supplied reference images. Identify missing facts that must remain placeholders. Report the proposed implementation plan and wait for Phase 2.

**Acceptance criteria:**
- Supplied images have been inspected.
- Design system is documented.
- Placeholder facts are explicitly identified.
- No unsupported property claims have been added.

## Phase 2 — Project structure and foundation

**Prompt to coding AI:**

> Set up or refine the project foundation only. Ensure the project uses semantic HTML5, CSS3 and vanilla JavaScript, with `index.html`, `css/style.css`, `css/responsive.css` and `js/script.js`. Establish CSS custom properties for the approved palette, typography, spacing, content width, borders and transitions. Add accessible global styles, reset/base styles, typography defaults, buttons, container utilities and section spacing.
>
> Add a minimal temporary page shell that proves the CSS and JS load correctly. Keep all supplied image assets intact. Update `README.md` with accurate run instructions and the current project structure. Do not build all content sections yet.
>
> Check paths and ensure the starter page works when opened locally or through VS Code Live Server. Report actual checks performed.

**Acceptance criteria:**
- File structure is clean.
- CSS tokens match the design specification.
- Stylesheets and script load without errors.
- Local run instructions are accurate.
- No framework or unnecessary dependency has been added.

## Phase 3 — Header, hero and project highlights

**Prompt to coding AI:**

> Implement the header/navigation, hero banner and project highlights. Use the strongest supplied architectural image for the hero. Build the temporary VERDANTÉ wordmark, desktop navigation, contact CTA and accessible mobile menu. Create a cinematic hero with refined headline, short supporting copy and working anchor CTAs. Add a restrained project-highlights section. Do not invent numeric statistics; use clearly marked placeholders where values are unknown.
>
> Ensure the design matches the approved forest-green, ivory and champagne-gold luxury system. Test desktop and mobile navigation, image loading and CTA targets. Do not implement later sections in this phase.

**Acceptance criteria:**
- Header and hero look polished at desktop and mobile sizes.
- Mobile menu is usable with keyboard and touch.
- CTAs navigate correctly.
- Supplied image loads without broken paths.
- Unverified statistics are visibly placeholders.

## Phase 4 — Overview and residences

**Prompt to coding AI:**

> Implement the project overview/about section and the residences section for 2 BHK and 3 BHK. Use the supplied project imagery where relevant. Present the two residence types as distinct, premium editorial layouts/cards. Keep area, price, availability and specifications as labelled placeholders unless verified data exists. Maintain typography, spacing, image treatment and responsive behaviour from the design system.

**Acceptance criteria:**
- Overview and both residence types are present.
- No invented factual unit details.
- Layout is coherent on mobile, tablet and desktop.
- Images have useful alt text.

## Phase 5 — Amenities and gallery

**Prompt to coding AI:**

> Implement the amenities and project gallery sections. Make amenities visually clear and elegant, but label all unverified amenity information as illustrative/placeholders. Use the supplied assignment images as the gallery source. Ensure consistent aspect ratios and thoughtful cropping. If implementing a lightbox, make it keyboard accessible, touch friendly, closable with Escape and usable without a mouse. Do not add unrelated stock images unless there is a clear asset gap and the use is disclosed.

**Acceptance criteria:**
- Amenities and gallery are present.
- Supplied images are used appropriately.
- Gallery works on touch and keyboard if interactive.
- No image is broken or stretched.

## Phase 6 — Location, enquiry and footer

**Prompt to coding AI:**

> Implement location/connectivity, enquiry/contact and footer. The actual project address and nearby landmarks are unknown, so use clearly marked editable placeholders. Do not invent distances, landmarks, map pins or travel times. Add a form with name, email, phone, residence preference and message. Implement client-side validation and accessible error/success states. Unless a real backend is explicitly configured, state clearly that the form is a demo and does not transmit enquiries. Add footer branding, quick links and placeholder contact/social details.

**Acceptance criteria:**
- All three sections are present.
- Location facts are not fabricated.
- Form validates and communicates demo-only behaviour.
- Footer links have meaningful destinations or are clearly marked placeholders.

## Phase 7 — Responsive polish and QA

**Prompt to coding AI:**

> Perform a full responsive and quality review of the entire website. Test at 360px, 390px, 768px, 1280px and 1440px widths. Fix overflow, awkward wrapping, image crops, navigation issues, spacing, typography, form layout and footer layout. Verify every section link, CTA, mobile menu, gallery interaction and form validation. Check keyboard access, visible focus, semantic heading order, image alt text, reduced-motion support, missing assets and browser console errors. Remove dead buttons, unused CSS and accidental placeholder copy. Report the exact checks performed and any remaining limitations.

**Acceptance criteria:**
- No horizontal overflow at target widths.
- All visible controls work as described.
- No broken images or console errors in tested browsers.
- Accessibility basics are covered.
- Remaining limitations are disclosed.

## Phase 8 — Documentation and submission package

**Prompt to coding AI:**

> Prepare the final submission package. Update `README.md` with project overview, features, technologies, folder structure, local setup/run instructions, responsive breakpoints, placeholder-content notes, form limitations and testing summary. Ensure `DESIGN-SPEC.md` matches the final implementation. Capture genuine screenshots from the running website:
>
> - `screenshots/desktop-homepage.png`
> - `screenshots/desktop-fullpage.png`
> - `screenshots/mobile-homepage.png`
> - `screenshots/mobile-fullpage.png`
>
> Create a clean ZIP of the complete project. Exclude `.git`, editor caches, temporary files and unnecessary dependencies, but include all source code and required assets. Verify the ZIP contents and ensure the project runs after extraction into a new folder. Do not claim tests or screenshots exist unless they were actually produced.

**Acceptance criteria:**
- README and design spec are accurate.
- Four screenshots are genuine and present.
- ZIP contains all required source/assets.
- Extracted ZIP runs independently.
- Final handoff lists files and known limitations.

---

## Final reviewer checklist

- [ ] Header with brand, navigation and contact CTA
- [ ] Hero with supplied apartment imagery and CTAs
- [ ] Project highlights
- [ ] About/project overview
- [ ] 2 BHK residences
- [ ] 3 BHK residences
- [ ] Amenities
- [ ] Project gallery
- [ ] Location/connectivity
- [ ] Enquiry/contact form
- [ ] Branded footer and social links
- [ ] Forest green, ivory and champagne gold palette
- [ ] Desktop/tablet/mobile responsiveness
- [ ] Clean HTML and CSS
- [ ] JavaScript interactions tested
- [ ] No fabricated project facts
- [ ] README and design spec
- [ ] Four genuine screenshots
- [ ] Complete source ZIP

## Important operating rule

Do not ask the coding AI to build the entire website in one prompt. Feed it the master prompt once, then each phase prompt in sequence. Review the output and acceptance criteria before moving to the next phase.
