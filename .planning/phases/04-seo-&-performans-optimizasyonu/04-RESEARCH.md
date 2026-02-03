# Phase 4: SEO & Performans Optimizasyonu - Research

**Researched:** 2026-02-04
**Domain:** Next.js 15 Static Export, SEO, Core Web Vitals
**Confidence:** HIGH

## Summary

This research covers implementing SEO and performance optimization for a Next.js 15 static export targeting Turkish market. Key findings include:

- **Next.js 15 Metadata API**: Use `generateMetadata` for per-page metadata with `metadataBase` for absolute URLs
- **Turkish SEO**: Meta descriptions 150-160 characters, keyword-first placement, Turkish CTAs
- **Sitemap**: `sitemap.ts` file in app root returns `MetadataRoute.Sitemap` array
- **Robots.txt**: `robots.ts` file with `export default function robots()` returning `MetadataRoute.Robots`
- **Core Web Vitals**: Target LCP < 2.5s, INP < 200ms, CLS < 0.1; use `next-export-optimize-images` and lazy loading

**Primary recommendation:** Implement centralized metadata config in `src/lib/metadata/`, per-page `generateMetadata` with `metadataBase` set from environment variable, `sitemap.ts` for static routes, `robots.ts` with allow all, and leverage Next.js 15's automatic optimizations.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15.1.6 | Static export, metadata API, sitemap/robots | Latest App Router features, built-in SEO tools |
| next-export-optimize-images | 4.7.0 | Image optimization at build time | Best-in-class static export image optimization |
| next/font | built-in | Self-hosted font optimization | Eliminates FOIT, reduces LCP |
| TypeScript | 5.7.2 | Type-safe metadata interfaces | Metadata types enforce correct structure |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| web-vitals | latest | Core Web Vitals measurement | Optional, for analytics integration |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Custom sitemap | sitemap-generator-ts | Keep dependencies minimal, use built-in only |
| Per-page metadata constants | next-seo library | Built-in Next.js metadata is sufficient, fewer deps |

**Installation:**
```bash
npm install web-vitals
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── lib/
│   └── metadata/           # Centralized service metadata constants
│       ├── index.ts        # Homepage metadata
│       └── services.ts     # Per-service metadata (all 6 services)
├── app/
│   ├── sitemap.ts          # Static sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── layout.tsx          # Root layout with metadataBase
│   ├── page.tsx            # Homepage with generateMetadata
│   └── hizmetler/
│       ├── google-isletme/
│       │   └── page.tsx    # Per-page metadata
│       ├── seo/page.tsx
│       ├── pmk/page.tsx
│       ├── web-gelistirme/page.tsx
│       ├── reklam/page.tsx
│       └── otomasyon/page.tsx
```

### Pattern 1: Per-Page Metadata with generateMetadata

**What:** Dynamic metadata per page using Next.js 15 generateMetadata function
**When to use:** Any page needing custom title, description, or Open Graph tags

```typescript
// Source: Next.js 15 Metadata API documentation
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

import type { Metadata, ResolvingMetadata } from 'next'
import { getServices } from '@/lib/services'

type Props = {
  params: Promise<{ hizmet: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { hizmet } = await params
  const service = getServices().find(s => s.slug === hizmet)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: service.meta.title,
    description: service.meta.description,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hizmetler/${hizmet}`,
      siteName: 'Moka Dijital',
      images: [service.meta.ogImage, ...previousImages],
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/hizmetler/${hizmet}`,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const { hizmet } = params
  // Page content...
}
```

### Pattern 2: Centralized Metadata Constants

**What:** Define metadata in constants, import and extend as needed
**When to use:** Consistent metadata across similar pages, maintainable

```typescript
// src/lib/metadata/services.ts

export interface ServiceMetadata {
  slug: string
  title: string
  description: string
  keywords: string[]
  ogImage: string
  changeFrequency: 'daily' | 'weekly' | 'monthly'
  priority: number
}

export const SERVICE_METADATA: Record<string, ServiceMetadata> = {
  'google-isletme': {
    slug: 'google-isletme',
    title: 'Google İşletme Optimizasyonu Hizmeti Türkiye | Moka Dijital',
    description: 'Google İşletme profilinizi optimize ederek yerel aramalarda öne çıkın. Müşteri reviews, fotoğraf yönetimi ve daha fazlası.',
    keywords: ['google isletme', 'yerel seo', 'google my business'],
    ogImage: '/images/og/google-isletme.jpg',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  'seo': {
    slug: 'seo',
    title: 'SEO Hizmeti | SEO Danışmanlığı | Moka Dijital',
    description: 'Organik arama sonuçlarında üst sıralara yükselme için profesyonel SEO hizmeti. KW analizi, on-page optimizasyon ve backlink stratejisi.',
    keywords: ['seo hizmeti', 'seo danışmanlığı', 'organik arama'],
    ogImage: '/images/og/seo.jpg',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  // ... other services
}
```

### Pattern 3: Root Layout with metadataBase

**What:** Set base URL for all metadata
**When to use:** Always required for SEO

```typescript
// src/app/layout.tsx

import type { Metadata } from 'next'

// Always define metadataBase with your production domain
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com'),
  title: 'Moka Dijital - Dijital Pazarlama Ajansı',
  description: 'Dijital dönüşümünüz için Google İşletme, SEO, PMK ve daha fazlası.',
  keywords: ['moka dijital', 'dijital pazarlama', 'seo ajansı'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

### Anti-Patterns to Avoid

- **Don't use relative URLs without metadataBase**: Causes SEO issues with absolute URL requirements
- **Don't mix metadata object and generateMetadata**: Only one per segment
- **Don't use absolute URL for images**: Open Graph images require absolute URLs, not relative
- **Don't hardcode domain**: Always use environment variable for metadataBase
- **Don't neglect CLS**: Ensure image dimensions match declared width/height

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Absolute URL generation for metadata | Custom URL builder | `metadataBase` property + environment variable | Handles protocol, environment, production builds |
| Sitemap generation | Custom sitemap builder | `sitemap.ts` with `MetadataRoute.Sitemap` type | Type-safe, built-in Next.js handling |
| Robots.txt generation | Custom generator | `robots.ts` with `MetadataRoute.Robots` type | Proper caching headers, automatic serving |
| Font optimization | Custom font loader | `next/font` with self-hosting | Eliminates FOIT, faster LCP |
| Image optimization | Custom resizer | `next-export-optimize-images` plugin | Handles WebP/AVIF, responsive images, lazy loading |

**Key insight:** Next.js 15's built-in metadata API, sitemap/robots routing, and `next-export-optimize-images` handle edge cases better than custom implementations.

## Common Pitfalls

### Pitfall 1: Missing metadataBase

**What goes wrong:** Relative URLs in metadata cause issues with SEO and social sharing
**Why it happens:** `metadataBase` is required when using metadata function, but easily forgotten
**How to avoid:** Always include in root layout
**Warning signs:** Open Graph images not showing on Facebook/LinkedIn, canonical URLs relative

```typescript
// WRONG - missing metadataBase
export const metadata: Metadata = {
  openGraph: {
    images: ['/og-image.jpg'], // Relative URL - will break
  }
}

// RIGHT - with metadataBase
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    images: ['/og-image.jpg'], // Becomes absolute automatically
  }
}
```

### Pitfall 2: Meta description too long

**What goes wrong:** Meta descriptions exceed 160 characters, getting truncated in SERP
**Why it happens:** Turkish language compounds are longer than English, easy to exceed limit
**How to avoid:** Aim for 140-150 characters, count carefully
**Warning signs:** Description cut off in Google Search Console preview

### Pitfall 3: Forgetting to set lang="tr"

**What goes wrong:** Page not indexed properly in Turkish search results
**Why it happens:** Language attribute signals to search engines about content language
**How to avoid:** Always set `lang="tr"` on html element
**Warning signs:** Pages not appearing in Google Turkey search results

### Pitfall 4: Missing sitemap reference in robots.txt

**What goes wrong:** Search engines don't discover all pages
**Why it happens:** Sitemap reference is essential for crawling
**How to avoid:** Always include `Sitemap: /sitemap.xml` in robots.txt

### Pitfall 5: Not measuring CWV

**What goes wrong:** Performance issues go undetected
**Why it happens:** Developers often test manually, not field data
**How to avoid:** Add web-vitals analytics or Google Search Console monitoring
**Warning signs:** Poor Lighthouse scores, slow Core Web Vitals in production

## Code Examples

### Example 1: Homepage with generateMetadata

```typescript
// src/app/page.tsx

import type { Metadata } from 'next'
import { metadata as rootMetadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...rootMetadata,
    title: 'Dijital Pazarlama Ajansı | Moka Dijital - Google İşletme, SEO, PMK',
    description: 'Google İşletme, SEO, PMK ve dijital pazarlama çözümleri ile işletmenizi büyütün. Yerel aramalarda öne çıkın.',
    openGraph: {
      ...rootMetadata.openGraph,
      title: 'Dijital Pazarlama Ajansı | Moka Dijital',
      description: 'Google İşletme, SEO, PMK ve dijital pazarlama çözümleriyle dönüşüm odaklı büyüme.',
    },
  }
}

export default function HomePage() {
  return (
    <main>
      {/* Page content */}
    </main>
  )
}
```

### Example 2: Sitemap Generation

```typescript
// src/app/sitemap.ts

import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/hizmetler/google-isletme', '/hizmetler/seo', '/hizmetler/pmk',
                  '/hizmetler/web-gelistirme', '/hizmetler/reklam', '/hizmetler/otomasyon']

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...routes.map(route => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
```

### Example 3: Robots.txt Generation

```typescript
// src/app/robots.ts

import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
```

### Example 4: Font Optimization with next/font

```typescript
// src/app/layout.tsx

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Reduces LCP
  variable: '--font-inter',
})

export const metadata: Metadata = {
  // ... other metadata
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
```

### Example 5: Next.js Image Optimization with Lazy Loading

```typescript
// Always use Next.js Image component for optimization
import Image from 'next/image'

export default function ServicePage() {
  return (
    <div className="space-y-6">
      {/* Explicit dimensions for LCP optimization */}
      <Image
        src="/images/service-main.jpg"
        alt="Google İşletme Optimizasyonu"
        width={1200}
        height={630}
        priority // For above-fold images
        className="w-full h-auto"
      />

      {/* Lazy loading for below-fold images */}
      <Image
        src="/images/service-detail.jpg"
        alt="Detaylı hizmet"
        width={800}
        height={450}
        loading="lazy"
      />
    </div>
  )
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Static HTML pages | Next.js 15 Static Export with `output: 'export'` | Next.js 15 | Serverless functionless deployment, better LCP |
| Custom sitemap generator | `sitemap.ts` with `MetadataRoute.Sitemap` | Next.js 13+ | Type-safe, automatic caching, reduced maintenance |
| Custom robots.txt | `robots.ts` with `MetadataRoute.Robots` | Next.js 13+ | Proper caching headers, less error-prone |
| Google Fonts CDN | `next/font` self-hosting | Next.js 13 | Eliminates FOIT, better LCP, no CORS issues |
| Manual image optimization | next-export-optimize-images plugin | Next.js 13 | WebP/AVIF conversion, responsive images, lazy loading |

**Deprecated/outdated:**
- `next/image` with `unoptimized: true` for static export: Use `next-export-optimize-images` plugin instead
- Hardcoded metadata in pages: Use centralized constants or layout metadataBase
- Google Fonts URL imports: Use `next/font` instead

## Open Questions

1. **Exact meta description wording**
   - What we know: Format is 150-160 chars, keyword-first placement recommended
   - What's unclear: Specific wording per service (this is copywriting, not technical)
   - Recommendation: Use the format patterns researched, let technical writer determine content

2. **Performance target values**
   - What we know: Target LCP < 2.5s, INP < 200ms, CLS < 0.1 from Google standards
   - What's unclear: Is "Good" score enough or should we aim for "Excellent"?
   - Recommendation: Target "Good" threshold as baseline, "Excellent" as stretch goal

3. **OG image dimensions**
   - What we know: Standard is 1200x630 for Open Graph
   - What's unclear: Which specific image to use for all services
   - Recommendation: Create single brand OG image, use same for all pages (defer per-page images to future)

4. **Static export image handling**
   - What we know: next-export-optimize-images handles optimization
   - What's unclear: Exact configuration for local development vs production
   - Recommendation: Use default plugin config, test both environments

## Sources

### Primary (HIGH confidence)
- Next.js 15 Metadata API - generateMetadata, Metadata interface
- Web.dev Core Web Vitals documentation
- metadataBase URL requirement documentation

### Secondary (MEDIUM confidence)
- Open Graph Protocol specification
- Web Vitals optimization best practices (field vs lab tools)
- Turkish SEO meta description guidelines

### Tertiary (LOW confidence)
- Turkish meta description character limit specific sources
- Next.js sitemap.ts/robots.ts official docs (URL structure changed)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Verified from Next.js 15 docs and web.dev
- Architecture: HIGH - Based on official Next.js patterns and research
- Pitfalls: MEDIUM - Patterns documented, Turkish-specific gaps noted

**Research date:** 2026-02-04
**Valid until:** 2026-03-06 (30 days for stable technologies, 7 days for fast-moving)
