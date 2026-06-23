# Linden Pain Relief Health Center — Signature

Elevation / modernize pass (06-23-2026). Replaced the early "Japanese minimalist
medicine + kanji/seal" concept (off-brand for the real Orange NJ community, photo-free
SVG silhouette, generic Cormorant/Inter type) with a warm, credible, modern-medical
build led by real community-true photography.

## Concept / art direction
"We find where the pain actually started." Dr. Baptiste's real method is to listen
first and treat the root. Warm clinical palette: clay + cream paper, deep care-green,
warm terracotta accent. Boska (editorial serif, italic accents) + Switzer body.
Real photography of hands-on care leads every section. The multilingual truth of the
practice (English / Español / Português / Kreyòl Ayisyen) is surfaced as an honest
belonging signal for the Black, Haitian, and Latino community of Orange.

## Signature moment
Interactive "Where it hurts" body map. Tap a region of a calm figure (neck, shoulder,
upper/lower back, hip, knee) and a readout reveals what usually causes pain there and
exactly how Dr. Baptiste approaches it, grounded in his real specialties. Keyboard
accessible, region chips for clarity, visible-by-default, reduced-motion safe.

## Arsenal Manifest
- Primary medium: photography — why (category + clientele): a trust/medical vertical
  reads as its category through real hands-on care imagery; the clientele (Orange NJ:
  Black, Haitian, Latino) must see themselves in the practitioners and patients.
- Video considered: yes — used: no — reason: a calm chiropractic practice is better
  served by warm stills than motion; an autoplay clip would undercut the unhurried,
  trustworthy tone. A still photographic hero is the deliberate, correct choice here.
- Media used (all Unsplash, commercial-free, no key, downloaded + graded locally; each
  appears once; none shared with same-city/Orange peers per used_images.json):
  - photo-1519823551278-64ac92734fb1 — hero-care — hands-on lower-back manual therapy;
    the core chiropractic verb, calm and clinical, reads instantly as the category.
  - photo-1666214280557-f1b5022eb634 — consult — a Black woman clinician talking a
    patient through imaging; the "we listen / consultation" image, community-true.
  - photo-1666887360742-974c8fce8e6b — practitioner — a Black male clinician in scrubs;
    represents Dr. Baptiste (Haitian surname practice), community-true.
  - photo-1591343395082-e120087004b4 — recovery-band — a Black patient through a calm
    bodywork/recovery session (B&W graded); warm statement band in the Method section.
- Motion / technique: visible-by-default IntersectionObserver reveal (restyled with the
  build's own [0.22,1,0.36,1] ease + clay/green tokens), Lenis smooth scroll, and a
  bespoke CSS pulse-ring on the active body-map node. No library default shipped unstyled.
- Custom icons: bespoke brand Mark (a vertebral spine reading as an "L", care-green
  badge + clay discs), single source-of-truth component reused in nav + footer; plus
  hand-drawn inline SVGs (phone, stars, hamburger). License: original. No icon font.
- Fontshare pairing: Boska (display) + Switzer (body) — confirmed not repeated as a
  pairing in build_registry.json. Self-hosted woff2, font-display swap.
- GPU-verified: n/a (no shader/WebGL/3D in this build).

## Recon (verified)
- Linden Pain Relief Health Center, 439 Main Street, Suite 101, City of Orange, NJ 07050
- Phone (973) 675-8700 · Fax (973) 675-8701
- Dr. Kesnold Baptiste, DC — Rutgers, then Sherman College of Chiropractic
- Languages: English, Spanish, Portuguese, Haitian Creole
- Treats: low back, neck, shoulder/arm, hip/knee, sports injury, tension headache;
  chiropractic adjustment, consultation, decompression, recovery
- 5-star rated (Birdeye/Google, ZocDoc 5/5, Healthgrades 4.8); real review themes:
  clean, excellent doctor, very nice staff, responsive, takes time to explain.

## Upsell notes (for the door-to-door sale, not built)
No visible online booking on their listings (ZocDoc profile exists but no embedded
self-scheduling on a site). Gaps: online booking/intake, review generation, an AI
phone receptionist for missed calls. Multilingual intake forms would be a strong,
honest upsell given the four-language practice.

## Mobile / a11y
390px scrollWidth = 390 (zero horizontal overflow), zero console errors. Fixed clay
tap-to-call icon pill on mobile. Real alt text on every image, semantic landmarks,
keyboard-operable body map, reduced-motion honored in CSS + JS, AA-contrast palette.
