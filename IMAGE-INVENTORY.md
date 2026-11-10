# VERDANTÉ — Image Inventory

**Audit date:** 10 November 2026  
**Status:** Supplied reference images successfully extracted and cataloged from the assignment brief (`Technical Assignment- Task 1.doc`). All 7 images are present in `assets/images/`.

---

## 1. Source verification & audit results

| Check | Result | Detail |
|---|---|---|
| Source document | `c:\Users\Admin\OneDrive\Desktop\Technical Assignment- Task 1.doc` | 1,168,896 bytes (Word 97-2003 binary containing 7 embedded JPEG streams) |
| Extraction directory | `assets/images/` | All 7 images extracted losslessly without conversion or recompression |
| File formats | JPEG (JFIF standard) | 1280 × 720 px, 16:9 native landscape, 24-bit RGB |
| Overwritten / deleted files | None | Original source document preserved; extracted files named `supplied-image-01.jpg` through `supplied-image-07.jpg` |
| Unrelated stock imagery | None | 100% authentic assignment-provided architectural renderings |

---

## 2. Image inventory & role mapping

All paths are relative to the project root. Images are styled via CSS `object-fit: cover` to preserve native proportions and avoid distortion.

| Filename | Native Size | File Size | Architectural Subject / Description | Primary Assigned Role | Lightbox / Gallery Caption | Alt Text |
|---|---|---|---|---|---|---|
| `supplied-image-01.jpg` | 1280 × 720 | 161.8 KB | Illuminated residential towers and neoclassical pediment gate at dusk, wet boulevard reflections, cars, and sunset sky | **Hero Section** (Primary Visual) & Gallery Item 1 | "The Grand Arrival Portal & Boulevard at Twilight" | "VERDANTÉ entrance portal with classical pediment and illuminated multi-storey residential wings at dusk" |
| `supplied-image-02.jpg` | 1280 × 720 | 149.1 KB | Perspective view of the illuminated facade, landscaped perimeter wall, pedestrian walkway, and sunset sky | **Residences (3 BHK Context)** & Gallery Item 2 | "Angled Facade & Landscaped Perimeter" | "Illuminated multi-storey residential wings overlooking tree-lined perimeter walkway at sunset" |
| `supplied-image-03.jpg` | 1280 × 720 | 148.2 KB | Central landscaped courtyard lawn, perimeter flowerbeds, classical lantern lampposts, and symmetrical building wings | **Amenities (Central Courtyard)** & Gallery Item 3 | "The Central Garden Courtyard" | "Landscaped central green courtyard with manicured turf, flowering borders, and heritage-style lanterns surrounded by residential wings" |
| `supplied-image-04.jpg` | 1280 × 720 | 143.3 KB | Elevated high-angle perspective looking down into the courtyard garden, showing colonnade, balconies, and seating | **Residences (2 BHK Context)** & Gallery Item 4 | "Elevated Courtyard & Balcony Vista" | "Elevated perspective overlooking the central garden court, ground-level colonnade, and private balconies" |
| `supplied-image-05.jpg` | 1280 × 720 | 166.5 KB | Ground-level paved avenue between residential wings, showing textured brick cladding, undercroft lighting, and foliage | **Overview (Architectural Axis)** & Gallery Item 5 | "The Residential Promenade & Masonry Detail" | "Paved central promenade between illuminated residential blocks showing fine masonry texture and balcony detailing" |
| `supplied-image-06.jpg` | 1280 × 720 | 223.7 KB | Master aerial panoramic view of the entire residential enclave, all building blocks, internal courtyards, and green canopy | **Overview (Masterplan Aerial)** & Gallery Item 6 | "Aerial Masterplan & Surrounding Green Canopy" | "Aerial panoramic view of the complete residential masterplan surrounded by mature tree canopy and connecting arterial road" |
| `supplied-image-07.jpg` | 1280 × 720 | 134.0 KB | Full frontal street elevation showing the complete development width, dual grand entrance gates, and dramatic twilight sky | **Gallery (Full Elevation)** & Gallery Item 7 | "Panoramic Twilight Street Elevation" | "Full-width architectural elevation of the residential complex featuring dual entrance gates and illuminated dusk sky" |

---

## 3. Section usage strategy

1. **Hero (`#top`):**
   - Image: `assets/images/supplied-image-01.jpg`
   - Role: Hero visual with left-weighted deep forest gradient scrim (`rgba(16, 44, 37, 0.72)`) ensuring WCAG 2.1 AA text contrast for the headline, brand descriptor, and CTA buttons.
   - Optimization: `fetchpriority="high"`, eager loading, preloaded in `<head>`.

2. **Project Overview (`#overview`):**
   - Image: `assets/images/supplied-image-06.jpg` (Aerial masterplan) as primary visual, with `supplied-image-05.jpg` (Promenade / architectural axis) as complementary architectural detail.
   - Role: Illustrates the holistic scale, low-density campus layout, and architectural composition.

3. **Residences (`#residences`):**
   - **2 BHK Residence:** `assets/images/supplied-image-04.jpg` (Elevated courtyard & private balcony view).
   - **3 BHK Residence:** `assets/images/supplied-image-02.jpg` (Expansive facade & landscaped boulevard).
   - Both cards maintain a consistent 4:5 / 16:10 aspect crop with clear placeholder specifications.

4. **Amenities (`#amenities`):**
   - Image: `assets/images/supplied-image-03.jpg` (Central landscaped courtyard lawn and garden).
   - Role: Visual grounding for the illustrative wellness, courtyard, and landscape amenities.

5. **Project Gallery (`#gallery`):**
   - Curated 7-item architectural mosaic featuring all 7 authentic supplied images (`supplied-image-01.jpg` through `supplied-image-07.jpg`).
   - Interactive lightbox with full keyboard accessibility (Arrow Left/Right, Escape), swipe gesture support, ARIA status announcements, and high-resolution modal view.

---

## 4. Quality assurance rules for images

- **No distortion:** All images must use CSS `object-fit: cover` and appropriate `object-position`.
- **Explicit dimensions:** Every `<img>` tag must include explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- **Responsive performance:** Below-the-fold images use `loading="lazy"` and `decoding="async"`.
- **Descriptive Alt text:** Non-decorative images must have descriptive, architectural alt text describing the massing, light, and perspective, without marketing hype.
