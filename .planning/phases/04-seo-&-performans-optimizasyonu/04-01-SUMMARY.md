---
phase: 04-seo-&-performans-optimizasyonu
plan: 01
subsystem: seo
tags: [sitemap, robots.txt, metadata, next.js, seo, opengraph]

# Dependency graph
requires:
  - phase: 03-form-entegrasyonu-&-n8n-webhook
    provides: all service pages (/hizmetler/*) and layout structure
provides:
  - Build-time sitemap.xml generation for all 7 static routes
  - Build-time robots.txt generation with sitemap reference
  - Centralized metadata constants for all service pages
  - Root layout with metadataBase for absolute URL generation
  - NEXT_PUBLIC_BASE_URL environment variable configuration
affects: [04-02, 04-03]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Build-time metadata route generation with export const dynamic = 'force-static'
    - Centralized metadata constants in src/lib/metadata/index.ts
    - ServiceMetadata interface for consistent SEO properties

key-files:
  created:
    - src/lib/metadata/index.ts
    - src/app/sitemap.ts
    - src/app/robots.ts
  modified:
    - src/app/layout.tsx
    - .env.local

key-decisions:
  - Used single /og-image.jpg fallback for all pages (deferred per-page OG images per CONTEXT)
  - No disallow rules in robots.txt (per CONTEXT decision)
  - Export const dynamic = 'force-static' required for metadata routes in static export

patterns-established:
  - MetadataRoute.Sitemap pattern: baseUrl → lastModified → changeFrequency → priority
  - MetadataRoute.Robots pattern: rules array → sitemap reference
  - ServiceMetadata interface: slug, title, description, keywords, ogImage, changeFrequency, priority
  - Centralized metadata exports: HOMEPAGE_METADATA, SERVICE_METADATA, getAllServices, getServiceBySlug

# Metrics
duration: 7min
completed: 2026-02-03
---

# Phase 04 Plan 01: SEO Infrastructure Summary

**Build-time sitemap.xml with 7 routes, robots.txt with sitemap reference, centralized metadata constants, and root layout with metadataBase for absolute URL generation**

## Performance

- **Duration:** 7 min (435s)
- **Started:** 2026-02-03T21:43:21Z
- **Completed:** 2026-02-03T21:50:33Z
- **Tasks:** 5
- **Files modified:** 5

## Accomplishments

- Build-time sitemap generation for all 7 static routes (homepage + 6 service pages)
- Build-time robots.txt generation allowing all bots with sitemap reference
- Centralized metadata constants for homepage and all 6 service pages
- Root layout updated with metadataBase for absolute URL generation
- Environment variable NEXT_PUBLIC_BASE_URL configured for production domain

## Task Commits

Each task was committed atomically:

1. **Task 1: Add NEXT_PUBLIC_BASE_URL environment variable** - `9ee8939` (chore)
2. **Task 2: Create centralized metadata constants** - `d55541c` (feat)
3. **Task 3: Create sitemap.ts** - `1d4557e` (feat)
4. **Task 4: Create robots.ts** - `a370a4d` (feat)
5. **Task 5: Update root layout with metadataBase and enhanced metadata** - `a937e3f` (feat)

**Bug fixes:**

6. **Fix static export error for metadata routes** - `39efa92` (fix)

**Plan metadata:** Pending final commit

## Files Created/Modified

### Created

- `src/lib/metadata/index.ts` - Centralized metadata constants with ServiceMetadata interface, HOMEPAGE_METADATA, SERVICE_METADATA for 6 services, helper functions (getAllServices, getServiceBySlug)
- `src/app/sitemap.ts` - Build-time sitemap generation returning 7 routes (homepage + 6 services) with proper priorities and change frequencies
- `src/app/robots.ts` - Build-time robots.txt generation allowing all bots with sitemap reference

### Modified

- `src/app/layout.tsx` - Added metadataBase, enhanced description, keywords array, openGraph metadata with title, description, siteName, locale, type
- `.env.local` - Added NEXT_PUBLIC_BASE_URL=https://mokadijital.com with comment about localhost for development

## Decisions Made

- **Single OG image for all pages:** Used /og-image.jpg fallback for all pages (deferred per-page OG images per CONTEXT)
- **No disallow rules:** robots.txt allows all bots (User-agent: *, Allow: /) per CONTEXT decision
- **Export const dynamic = 'force-static':** Required for metadata routes in Next.js static export (discovered during build, auto-fixed)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed static export error for metadata routes**

- **Found during:** Task 5 (build verification)
- **Issue:** Next.js static export requires `export const dynamic = 'force-static'` for metadata routes (sitemap.ts and robots.ts). Build failed with error: "export const dynamic = "force-static"/export const revalidate not configured on route "/robots.txt" with "output: export""
- **Fix:** Added `export const dynamic = 'force-static'` to both sitemap.ts and robots.ts
- **Files modified:** src/app/sitemap.ts, src/app/robots.ts
- **Verification:** Build passes, sitemap.xml and robots.txt generated in out/ directory
- **Committed in:** `39efa92` (separate bug fix commit)

**2. [Rule 1 - Bug] Removed 'as const' type assertion from dynamic values**

- **Found during:** Task 5 (build verification)
- **Issue:** TypeScript error: "A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals." Using `as const` on dynamic values from HOMEPAGE_METADATA and SERVICE_METADATA is invalid
- **Fix:** Removed `as const` assertions from changeFrequency properties in sitemap.ts
- **Files modified:** src/app/sitemap.ts
- **Verification:** TypeScript compilation passes
- **Committed in:** `39efa92` (same bug fix commit)

---

**Total deviations:** 2 auto-fixed (2 bugs)
**Impact on plan:** Both auto-fixes necessary for correct Next.js static export behavior. No scope creep.

## Issues Encountered

- **TypeScript 'as const' assertion error:** Fixed by removing invalid type assertions on dynamic values from metadata constants
- **Next.js static export requirement:** Fixed by adding `export const dynamic = 'force-static'` to metadata routes

## User Setup Required

None - no external service configuration required for SEO infrastructure.

## Next Phase Readiness

- SEO infrastructure complete, ready for 04-02: Page-level metadata implementation
- All 7 routes present in sitemap.xml with correct priorities (1.0 for homepage, 0.9 for core services, 0.8 for supporting services)
- robots.txt allows all bots and references sitemap.xml
- Centralized metadata constants established for per-page generateMetadata functions

---

*Phase: 04-seo-&-performans-optimizasyonu*
*Completed: 2026-02-03*
