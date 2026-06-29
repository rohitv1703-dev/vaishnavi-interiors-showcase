# Vaishnavi Interiors — Full Upgrade Plan

Transform the current single-page site into a polished multi-route luxury experience while keeping the existing dark/gold design language.

## 1. Image performance
- Add `vite-imagetools` plugin.
- Convert every `import img from "@/assets/x.png"` to load AVIF + WebP variants with a PNG fallback via `<picture>`.
- Add `fetchpriority="high"` + `<link rel="preload">` for the hero image only.
- Expected payload drop: ~70% on first paint.

## 2. Multi-route architecture
New routes (each with its own `head()` — title, description, og:title/description, canonical, og:url):
- `/` — refined home: hero, featured 6 projects, services teaser, why-choose-us, testimonials, CTA.
- `/portfolio` — full masonry grid + category filter (Living Room, Kitchen, Wardrobe, Door, Pooja, Kids, Wall).
- `/portfolio/$slug` — case-study page: large hero image, project meta (location, category, timeline), description, materials list, related projects, CTA.
- `/services` — index of all services.
- `/services/$slug` — pages for: Modular Kitchen, Wardrobes, TV Units, Pooja Units, Safety Doors, Full Home Interiors. Each targets local-SEO keywords ("modular kitchen Vasai" etc.).
- `/about` — story, founder, process, stats.
- `/contact` — form, WhatsApp, phone, Google Maps embed, address, hours.

Shared `<Header>` and `<Footer>` extracted into `src/components/`.

## 3. New sections / features
- **Process section** (5 steps: Consult → Design → 3D View → Execute → Handover) — on home + about.
- **FAQ accordion** on home + contact with `FAQPage` JSON-LD schema (cost, timeline, warranty, materials, locations served).
- **Cost calculator** on `/services`: BHK selector + scope checkboxes → estimated range (₹). Pure client-side, generates a WhatsApp message with the estimate.
- **Google Maps iframe** + directions link on `/contact`.
- **Breadcrumbs** (with `BreadcrumbList` JSON-LD) on inner pages.

## 4. SEO infrastructure
- `src/routes/sitemap[.]xml.ts` server route listing every public route + case studies + services.
- Update `public/robots.txt` (Allow all, no Sitemap directive yet — no domain set).
- Per-route `head()` with self-referencing relative canonical + og:url.
- Move `LocalBusiness` JSON-LD to `__root.tsx`; add `Service` schema to service pages and `BreadcrumbList` to inner pages.

## 5. Polish
- Smooth route transitions (fade-in via existing `reveal` utility).
- Scroll-to-top on route change.
- Mobile nav drawer for new header.

## Out of scope (will mention at end so you can request later)
- Google Reviews live integration (needs API key).
- Lovable Cloud–backed lead storage (needs Cloud enabled).
- Instagram feed (needs token).
- Before/After slider (needs paired photos you haven't provided).
- Downloadable brochure PDF.

## Technical notes
- Projects data moves from `src/routes/index.tsx` into `src/data/projects.ts` keyed by slug so `/portfolio/$slug` and related-projects logic share one source.
- Services data → `src/data/services.ts` similarly.
- All image imports go through `?picture&format=avif;webp;png` (vite-imagetools) so the build emits all three.
- All routes keep using TanStack file-based routing; nothing client-side-only.
- Existing dark/gold tokens in `src/styles.css` stay unchanged.

Confirm and I'll build everything in one pass.
