# Phase 1: Proje Kurulumu & Temel Konfigürasyon - Context

**Gathered:** 2026-02-03
**Status:** Ready for planning

## Phase Boundary

Next.js 15 projesi statik export (`output: 'export'`) ile PHP hostinge deploy edilebilen proje yapısı kurulur. TypeScript, Tailwind CSS, temel UI component library ve görsel optimizasyon sistemini içerir. Bu bir altyapı kurulum fazıdır — sayfa içerikleri ve formlar sonraki fazlarda.

## Implementation Decisions

### UI Component Library
- **Shadcn/ui** — Copy-paste component system with Radix UI + Tailwind
- Install components as needed (not all upfront, not just core)
- User will provide brand colors/logo for custom theming

### Form Handling
- **React Hook Form + Zod** for form validation
- Industry standard, works well with shadcn components
- 7 contact forms total (homepage + 6 service pages)

### Theming
- Custom theme colors (extending Tailwind config)
- User will share brand assets/colors for exact palette

### Claude's Discretion
- Icon system choice (Lucide, Heroicons, Phosphor) — choose what fits lead generation agency site
- Exact Tailwind config structure
- TypeScript configuration details
- ESLint/Prettier setup
- Image optimization implementation details (next-export-optimize-images approach)
- Project folder structure (app router patterns, component organization)

## Specific Ideas

User will provide brand colors/logo separately for theming. Open to standard professional agency approach in the meantime.

## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 01-project-setup*
*Context gathered: 2026-02-03*
