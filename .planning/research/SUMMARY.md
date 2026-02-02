# Project Research Summary

**Project:** Moka Dijital Web Sitesi
**Domain:** Next.js Static Export Digital Agency Website (Dijital Ajans Web Sitesi)
**Researched:** 2026-02-02
**Confidence:** HIGH

## Executive Summary

This research establishes that a Next.js 15 static export marketing website is the optimal solution for Moka Dijital's agency website replacement project. The agency's core requirement—a PHP-hostable, lead generation-focused site with seven pages (homepage + six service pages) and integrated n8n webhook forms—aligns perfectly with Next.js's static export capabilities when properly configured. The recommended stack combines Next.js 15.1.x, React 19, TypeScript 5.7, and Tailwind CSS 3.4 with critical static export optimizations including `next-export-optimize-images` for build-time image optimization.

Key strategic differentiation lies in the Potansiyel Müşteri Kazanımı (PMK) service page, which serves dual purposes: promoting the agency's lead generation services while demonstrating n8n workflow automation capabilities through an interactive lead scoring demo. This "eat your own dog food" approach showcases technical competency that sets Moka Dijital apart from competitors who only claim automation expertise. The research identifies five critical pitfalls—static export incompatibility, CORS errors with n8n webhooks, cPanel routing issues, poor mobile conversion optimization, and weak CTA strategy—that must be addressed proactively during development to avoid costly rebuilds and deployment failures.

## Key Findings

### Recommended Stack

The research confirms Next.js 15 with static export as the industry-standard choice for agency marketing websites requiring PHP hosting deployment. The combination of React 19 Server Components for static content with strategic Client Components for interactive forms delivers optimal performance, SEO, and conversion capabilities. Critical to success is the `next-export-optimize-images` plugin, which overcomes Next.js Image component limitations in static export mode by optimizing images at build time using Sharp.

**Core technologies:**
- **Next.js 15.1.x + React 19** — Framework with static export capability — Industry standard for React apps, enables PHP hosting deployment without Node.js server
- **TypeScript 5.7.x** — Type safety — Catches bugs at compile time, essential for production apps, first-class Next.js support
- **Tailwind CSS 3.4.x** — Utility-first styling — 30% faster development for agencies, zero runtime overhead
- **next-export-optimize-images 3.x** — Build-time image optimization — REQUIRED for static exports; Next.js Image doesn't optimize with `output: 'export'`
- **React Hook Form 7.54.x + Zod 3.24.x** — Form management and validation — Client-side validation with minimal re-renders, works perfectly with static export
- **Framer Motion 11.12.x** — Production-ready animations — SSR-compatible, requires `'use client'` directive

### Expected Features

Digital agency websites have well-established feature expectations. The research categorizes features into table stakes (what users expect), differentiators (competitive advantages), and anti-features (commonly requested but problematic). For Moka Dijital's MVP, focus on conversion-oriented features: clear service listings, contact forms on every service page, mobile responsive design, fast page load speeds, and trust signals. The key differentiator is the live n8n lead scoring demo on the PMK page.

**Must have (table stakes):**
- Clear Service Listings — Users must understand what services are offered (6 hizmet sayfası structure)
- Contact Forms on Every Service Page — Primary conversion point, reduces friction
- Mobile Responsive Design — 60%+ of traffic comes from mobile devices
- Fast Page Load Speed — Users abandon sites that load >3 seconds (Core Web Vitals)
- Clear Navigation — Users must find information quickly
- Trust Signals — Testimonials, service descriptions, process demonstrations

**Should have (competitive):**
- Live n8n Lead Scoring Demo — Shows, doesn't just tell — demonstrates agency's core competency (PMK page)
- Real-time Lead Status Tracking — Transparency builds trust and engagement
- Industry-Specific Case Studies — Relevant proof creates confidence in similar results
- Multi-channel Lead Capture — Meets prospects where they are (WhatsApp, form, phone)
- Workflow Visualization — Makes invisible automation processes tangible

**Defer (v2+):**
- Blog/News Section — Requires ongoing maintenance, diverts from conversion focus
- Client Portal — Complex to build, low usage for new prospects
- Multi-language Support — Dilutes focus, doubles maintenance effort
- AI Chat Assistant — High complexity, form-based contact sufficient initially

### Architecture Approach

The recommended architecture uses Next.js App Router with Server Components for static content and strategic Client Components for interactive forms. This "Server Components with Client Form Islands" pattern minimizes JavaScript bundle size while maintaining optimal SEO and conversion capabilities. The project structure uses route groups for organization (`(marketing)` for public pages, `hizmetler/` for Turkish SEO-friendly service URLs) and private folders (`_components/`, `_lib/`) for route-specific colocation.

**Major components:**
1. **Pages (Route)** — Server Components with static content for homepage and six service pages
2. **Layouts** — Shared UI structure (header, footer) using root layout + nested layouts for route groups
3. **Forms** — Client Components with direct `fetch()` POST to n8n webhook URLs (no API routes)
4. **UI Components** — Reusable UI elements built with Radix UI primitives and Tailwind utilities
5. **Metadata** — Static route handlers generating sitemap.xml and robots.txt at build time

### Critical Pitfalls

The research identified five critical pitfalls that can cause project failure if not addressed proactively. The most severe is using Next.js features incompatible with static export (API routes, Middleware, i18n, SSR), which forces complete architecture redesign. Second is CORS errors with n8n webhook form submissions—forms appear functional but fail silently, losing all leads. Third is broken routing and assets on cPanel PHP hosting due to improper `.htaccess` configuration and trailing slash settings.

1. **Static Export Incompatibility** — Start with `output: 'export'` from day one, verify all Next.js features work in static mode before building
2. **CORS Errors with n8n Webhooks** — Use n8n FORM trigger (not webhook) for public forms, test from production domain, implement error handling
3. **Broken Routing on cPanel** — Configure `trailingSlash: true`, create `.htaccess` rewrite rules, verify asset paths before deployment
4. **Poor Mobile Conversion Optimization** — Design mobile-first, test on real devices, ensure 44x44px minimum touch targets, optimize forms for mobile
5. **Weak Call-to-Action Strategy** — Place specific, action-oriented CTAs on every service page, use benefit-driven copy ("Get Your Free SEO Audit")

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Configuration
**Rationale:** Research shows static export incompatibility is the #1 pitfall—must configure correctly from day one to avoid costly rebuilds. Image optimization is critical for performance but breaks without proper setup.

**Delivers:** Working Next.js project with static export, TypeScript configuration, Tailwind CSS setup, image optimization plugin, basic UI component library

**Addresses:** Stack setup, static export configuration, TypeScript strict mode, Tailwind integration, image optimization setup

**Avoids:** Pitfall #1 (Static Export Incompatibility) by verifying all features work with `output: 'export'` from start

### Phase 2: Core Pages & Content Structure
**Rationale:** Service pages are the conversion engine. Research shows each service page needs embedded forms to reduce friction. Must establish content structure before form integration.

**Delivers:** Homepage with hero section + 6 service cards, 6 service pages with descriptions/benefits/process sections, layout components (Header, Footer, Navigation)

**Uses:** Server Components for static content, route groups for organization, Turkish URL structure for SEO

**Implements:** Architecture Pattern 1 (Server Components with Client Form Islands), Pattern 2 (Route Groups)

**Addresses:** FEATURES.md table stakes (clear service listings, clear navigation, value proposition)

**Avoids:** Pitfall #5 (Weak CTA Strategy) by planning conversion paths for each service page

### Phase 3: Form Integration & n8n Webhook
**Rationale:** Research identifies CORS errors as #2 pitfall—forms appear functional but fail silently. Must test with production n8n instance before completing development.

**Delivers:** ContactForm Client Component, n8n workflow setup, form validation (React Hook Form + Zod), success/error states, webhook submission logic

**Uses:** React Hook Form, Zod, client-side `fetch()` to n8n webhook, environment variables

**Implements:** Form submission flow with error handling, loading states, client-side validation

**Addresses:** FEATURES.md must-have (contact forms), STACK.md form integration requirements

**Avoids:** Pitfall #2 (CORS Errors) by using n8n FORM trigger and testing from production domain

### Phase 4: SEO & Metadata Optimization
**Rationale:** Static exports can't use server-side metadata generation. Must implement static metadata generation at build time for SEO.

**Delivers:** sitemap.ts, robots.ts, metadata API for each page, Open Graph images, structured data

**Uses:** Next.js MetadataRoute, static route handlers, build-time generation

**Implements:** Architecture Pattern 3 (Static Metadata Generation)

**Addresses:** FEATURES.md table stakes (SEO-friendly structure), ARCHITECTURE.md metadata responsibilities

### Phase 5: Polish, Testing & Deployment
**Rationale:** Research shows cPanel deployment issues (#3 pitfall) and mobile conversion problems (#4 pitfall). Must test on real devices and staging environment before launch.

**Delivers:** Mobile responsiveness audit, cross-browser testing, cPanel deployment with `.htaccess` configuration, Lighthouse performance optimization, accessibility audit

**Uses:** Real device testing (iOS/Android), Lighthouse audit, cPanel file manager, `.htaccess` rewrite rules

**Addresses:** FEATURES.md table stakes (mobile responsive, fast page load), PITFALLS.md #3 and #4

**Avoids:** Pitfall #3 (Broken Routing on cPanel), Pitfall #4 (Poor Mobile Conversions)

### Phase 6: PMK Lead Scoring Demo
**Rationale:** This is Moka Dijital's key differentiator. Implementing after core foundation is established allows focus on the complex real-time tracking and visualization features.

**Delivers:** Interactive lead scoring demo on PMK page, real-time status tracking visualization, n8n workflow integration for demo, before/after metrics display

**Uses:** Framer Motion for animations, WebSocket or polling for real-time updates, client-side state management

**Addresses:** FEATURES.md differentiators (live n8n demo, real-time tracking, workflow visualization)

**Implements:** Competitive edge showcase demonstrating agency's n8n capabilities

### Phase Ordering Rationale

- **Why this order:** Foundation must be solid before adding features; forms depend on pages; SEO depends on content structure; polish depends on everything working; PMK demo is the advanced feature that builds on established patterns
- **Why this grouping:** Phase 1-2 establish the static site structure; Phase 3 adds interactivity; Phase 4 optimizes for discovery; Phase 5 ensures production readiness; Phase 6 adds competitive differentiation
- **How this avoids pitfalls:** Each phase proactively addresses specific pitfalls—Phase 1 avoids static export incompatibility, Phase 3 prevents CORS errors, Phase 5 addresses cPanel and mobile issues

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** n8n FORM trigger configuration and CORS setup — complex integration, requires testing with production n8n instance
- **Phase 5:** cPanel `.htaccess` configuration for Next.js static export — hosting-specific, sparse official documentation
- **Phase 6:** Real-time lead tracking visualization — custom feature, no established patterns to follow

Phases with standard patterns (skip research-phase):
- **Phase 1:** Next.js + TypeScript + Tailwind setup — well-documented, established patterns
- **Phase 2:** Server Components with static content — official Next.js documentation comprehensive
- **Phase 4:** SEO metadata generation — Next.js MetadataRoute well-documented

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Official Next.js documentation, established patterns for static export |
| Features | MEDIUM | Digital agency features well-researched, but Turkish market validation needed |
| Architecture | HIGH | Next.js App Router patterns documented, static export architecture proven |
| Pitfalls | HIGH | Multiple community sources confirm common failure modes, solutions verified |

**Overall confidence:** HIGH

### Gaps to Address

- **Turkish SEO validation:** Most research sources are English-language; Turkish SEO best practices may differ slightly — validate meta descriptions, title lengths, and keyword strategies for Turkish search engines
- **n8n FORM trigger configuration:** Official documentation exists but real-world CORS issues common — test early with production n8n instance
- **cPanel `.htaccess` patterns:** Hosting-specific configurations vary — create staging environment for testing before production deployment

## Sources

### Primary (HIGH confidence)
- [Next.js 15 Documentation](https://nextjs.org/docs) — Framework configuration, static export, App Router, Server Components
- [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports) — Official static export documentation (Oct 2025)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — Utility-first framework configuration
- [React Hook Form](https://react-hook-form.com) — Form management and validation
- [Zod](https://zod.dev) — Schema validation
- [n8n Documentation](https://docs.n8n.io) — Webhook and FORM trigger configuration

### Secondary (MEDIUM confidence)
- [Top 10 React & Next.js UI Libraries 2025](https://dev.to/shaahzaibrehman/top-10-react-nextjs-ui-libraries-to-use-in-2025-11j6) — Radix UI as top choice (2025)
- [Tailwind CSS Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns) — Design tokens and patterns
- [9 Essential Digital Agency Website Trends for 2026](https://brief.pt/2025/09/digital-agency-website/) — Feature expectations for agency sites
- [20 Lead Generation Form Examples with Best Practices](https://unbounce.com/conversion-rate-optimization/optimize-lead-gen-forms/) — Conversion optimization patterns
- [How to Create a High-Converting Services Page](https://www.intelusagency.com/blog/marketing-agency-services-page-example) — Service page structure
- [next-export-optimize-images GitHub](https://github.com/dc7290/next-export-optimize-images) — Static export image optimization (Latest: Aug 31, 2025)

### Tertiary (LOW confidence)
- [How to Deploy Next.js Apps on cPanel: Complete Guide 2025](https://www.nihardaily.com/96-deploy-nextjs-on-cpanel-hosting-ultimate-tutorial-with-troubleshooting-tips) — cPanel deployment, but hosting-specific variations exist
- [n8n Community: CORS error when submitting form trigger](https://community.n8n.io/t/cors-error-when-submitting-form-trigger/246488) — CORS issues common, solutions vary by setup

---
*Research completed: 2026-02-02*
*Ready for roadmap: yes*
