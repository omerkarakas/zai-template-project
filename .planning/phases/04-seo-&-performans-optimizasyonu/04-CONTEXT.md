# Phase 4: SEO & Performans Optimizasyonu - Context

**Gathered:** 2026-02-03
**Status:** Ready for planning

<domain>
## Phase Boundary

SEO için meta veriler, sitemap ve performans optimizasyonu yapılır. Her sayfa için meta title, description ve Open Graph tags tanımlanır. Sitemap.xml ve robots.txt build time'da oluşturulur. Site Core Web Vitals metriklerini geçer.

</domain>

<decisions>
## Implementation Decisions

### Meta data approach
- Hybrid approach: Centralized metadata config with per-page overrides where needed
- Metadata constants in `src/lib/metadata/` for service pages
- Per-page metadata in each page's `generateMetadata` function or layout.tsx

### Meta titles format
- SEO keyword focused: `[Service Name] Hizmeti | [Location/Category] | Moka Dijital`
- Example: `Google İşletme Optimizasyonu Hizmeti Türkiye | Moka Dijital`
- Homepage: `Dijital Pazarlama Ajansı | Moka Dijital - Google İşletme, SEO, PMK`

### Meta descriptions
- 150-160 characters with service description, key benefit, and implicit CTA
- Include primary keyword naturally
- Example: `Google İşletme profilinizi optimize ederek yerel aramalarda öne çıkın. Müşteri reviews, fotoğraf yönetimi ve daha fazlası.`

### Open Graph tags
- Basic OG tags for all pages: title, description, url, type, site_name
- Single fallback OG image (Moka Dijital logo/brand image) for all pages
- No per-page OG image generation (deferred to future phase)

### Sitemap strategy
- Include all static pages: homepage, 6 service pages
- Build-time generation using Next.js `generate-default-sitemap` or custom `sitemap.ts`
- No dynamic URLs (static export)
- Update `lastmod` on build

### Robots.txt
- Allow all bots
- Disallow: none
- Sitemap reference included

### Performance priorities
- Image optimization: Use existing `next-export-optimize-images` plugin
- Font optimization: `next/font` with self-hosting for Turkish fonts
- Lazy loading: Below-fold images and components
- Critical CSS inline: Automatic via Next.js
- JavaScript bundling: Dynamic imports where beneficial

### Claude's Discretion
- Exact meta description wording per service
- Specific performance targets (target: Good CWV scores)
- Additional meta tags (twitter:card, article:author if needed)

</decisions>

<specifics>
## Specific Ideas

No specific requirements — use SEO best practices for Turkish market and static Next.js export.

</specifics>

<deferred>
## Deferred Ideas

- Structured data (JSON-LD) for local business, services — future enhancement
- Per-page OG images with service-specific graphics — future phase
- Analytics integration (Google Analytics, Plausible) — separate phase
- Multi-language hreflang tags — v2 scope
- Blog content marketing SEO — v2 scope

</deferred>

---

*Phase: 04-seo-&-performans-optimizasyonu*
*Context gathered: 2026-02-03*
