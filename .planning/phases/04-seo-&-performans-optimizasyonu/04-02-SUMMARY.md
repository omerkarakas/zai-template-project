---
phase: 04-seo-&-performans-optimizasyonu
plan: 02
subsystem: seo
tags: [metadata, generateMetadata, seo, opengraph, server-components]

# Dependency graph
requires:
  - phase: 04-seo-&-performans-optimizasyonu
    plan: 01
    provides: centralized metadata constants (HOMEPAGE_METADATA, SERVICE_METADATA)
provides:
  - Page-level SEO metadata for all 7 pages using generateMetadata
  - Client/server component separation for useState and ContactModal functionality
  - Open Graph tags for social sharing on all pages
  - Canonical URLs for all pages
affects: [04-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - generateMetadata function with server/client component separation
    - Client component extraction for useState and interactive features
    - ServiceMetadata interface usage for type-safe SEO properties

key-files:
  created:
    - src/components/home/HomePageClient.tsx
    - src/components/services/google-isletme/GoogleIsletmePageClient.tsx
    - src/components/services/seo/SeoPageClient.tsx
    - src/components/services/pmk/PmkPageClient.tsx
    - src/components/services/web-gelistirme/WebGelistirmePageClient.tsx
    - src/components/services/reklam/ReklamPageClient.tsx
    - src/components/services/otomasyon/OtomasyonPageClient.tsx
  modified:
    - src/app/page.tsx
    - src/app/hizmetler/google-isletme/page.tsx
    - src/app/hizmetler/seo/page.tsx
    - src/app/hizmetler/pmk/page.tsx
    - src/app/hizmetler/web-gelistirme/page.tsx
    - src/app/hizmetler/reklam/page.tsx
    - src/app/hizmetler/otomasyon/page.tsx

key-decisions:
  - Used centralized metadata constants (HOMEPAGE_METADATA, SERVICE_METADATA) for maintainability
  - Separated client components to allow 'use client' directive alongside generateMetadata
  - Open Graph images use single /og-image.jpg fallback (deferred per-page images to future)

patterns-established:
  - Server component page.tsx with generateMetadata + client component *PageClient.tsx for interactivity
  - Consistent metadata structure: title, description, keywords, openGraph, alternates.canonical
  - Base URL from NEXT_PUBLIC_BASE_URL environment variable

# Metrics
duration: 8min
completed: 2026-02-04
---

# Phase 04 Plan 02: Page-Level Metadata Implementation Summary

**All 7 pages (homepage + 6 services) with generateMetadata functions using centralized metadata constants, client/server component separation for ContactModal functionality**

## Performance

- **Duration:** 8 min (480s)
- **Started:** 2026-02-04T14:16:51Z
- **Completed:** 2026-02-04T14:24:51Z
- **Tasks:** 7
- **Files created:** 7 client components
- **Files modified:** 7 page files

## Accomplishments

- Homepage with generateMetadata using HOMEPAGE_METADATA constant
- All 6 service pages with generateMetadata using SERVICE_METADATA constants
- Client/server component separation for all pages (useState and ContactModal in client components)
- Open Graph tags for social sharing on all 7 pages
- Canonical URLs for SEO on all pages
- Build verification passed - all pages generate successfully

## Task Commits

Each task was committed atomically:

1. **Task 1: Homepage metadata** - `66690ec` (feat)
2. **Task 2: Google İşletme metadata** - `88432fb` (feat)
3. **Task 3: SEO metadata** - `3336e02` (feat)
4. **Task 4: PMK metadata** - `183fac0` (feat)
5. **Task 5: Web Geliştirme metadata** - `57c405a` (feat)
6. **Task 6: Reklam metadata** - `59f84b5` (feat)
7. **Task 7: Otomasyon metadata** - `e1d7e1a` (feat)

**Plan metadata:** Pending final commit

## Files Created/Modified

### Created (Client Components)

- `src/components/home/HomePageClient.tsx` - Client component with useState, ContactModal
- `src/components/services/google-isletme/GoogleIsletmePageClient.tsx` - Google İşletme page client component
- `src/components/services/seo/SeoPageClient.tsx` - SEO page client component
- `src/components/services/pmk/PmkPageClient.tsx` - PMK page client component
- `src/components/services/web-gelistirme/WebGelistirmePageClient.tsx` - Web Geliştirme page client component
- `src/components/services/reklam/ReklamPageClient.tsx` - Reklam page client component
- `src/components/services/otomasyon/OtomasyonPageClient.tsx` - Otomasyon page client component

### Modified (Page Files with generateMetadata)

All page files updated with:
- Import of Metadata type and metadata constants
- `export async function generateMetadata(): Promise<Metadata>` function
- Removal of 'use client' directive
- Import and render of corresponding *PageClient component
- Open Graph tags (title, description, url, siteName, locale, type, images)
- Canonical URL in alternates

## Metadata Details

### Homepage
- Title: "Dijital Pazarlama Ajansı | Moka Dijital - Google İşletme, SEO, PMK"
- Description: 120 characters
- Uses: HOMEPAGE_METADATA constant

### Service Pages (All use SERVICE_METADATA)
| Service | Title Format | Description Length |
|---------|-------------|-------------------|
| Google İşletme | Google İşletme Optimizasyonu Hizmeti Türkiye \| Moka Dijital | ~157 chars |
| SEO | SEO Hizmetleri \| Yerel SEO & Global SEO \| Moka Dijital | ~154 chars |
| PMK | Potansiyel Müşteri Kazanımı Hizmeti \| n8n Otomasyon \| Moka Dijital | ~153 chars |
| Web Geliştirme | Web Sitesi Geliştirme Hizmeti \| Next.js \| Moka Dijital | ~156 chars |
| Reklam | Dijital Reklam Yönetimi Hizmeti \| Google Ads \| Moka Dijital | ~155 chars |
| Otomasyon | İş Akışı Otomasyonları Hizmeti \| n8n \| Moka Dijital | ~152 chars |

All service page descriptions are within the 150-160 character target for SEO.

## Open Graph Tags

All pages include:
- `og:title` - Page title
- `og:description` - Meta description
- `og:url` - Full page URL with BASE_URL
- `og:site_name` - "Moka Dijital"
- `og:locale` - "tr_TR"
- `og:type` - "website"
- `og:image` - /og-image.jpg (1200x630)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - all tasks completed without errors.

## Verification

Build verification passed:
```bash
npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (12/12)
# ✓ Exporting (3/3)
```

Must-haves verified:
- ✓ Homepage has SEO title, description, and Open Graph tags
- ✓ All 6 service pages have SEO metadata from SERVICE_METADATA constants
- ✓ Meta descriptions are 150-160 characters for service pages
- ✓ Open Graph tags include title, description, url, site_name for all pages

## Next Phase Readiness

- Page-level metadata complete for all 7 pages
- Ready for 04-03: Performance optimization (images, fonts, lazy loading)
- All pages have proper SEO structure for search engine indexing
- Social sharing tags in place for Facebook, LinkedIn, Twitter

---

*Phase: 04-seo-&-performans-optimizasyonu*
*Completed: 2026-02-04*
