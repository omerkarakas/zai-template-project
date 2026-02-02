# Technology Stack

**Domain:** Digital Agency Website (Next.js Static Export)
**Researched:** 2026-02-02
**Confidence:** HIGH

---

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Next.js** | 15.1.x | React framework with static export | Industry standard for React apps. Static export (`output: 'export'`) enables PHP hosting deployment without Node.js server. App Router with React Server Components provides superior performance and DX. |
| **React** | 19.0.x | UI library | Latest stable with improved App Router compatibility, automatic batching, and concurrent rendering. Required for Next.js 15. |
| **TypeScript** | 5.7.x | Type safety | Catches bugs at compile time, improves IDE support, essential for production apps. Next.js has first-class TypeScript support. |
| **Node.js** | 20.x LTS | Build runtime | Required by Next.js 15. Use Active LTS (currently 20.x) for stability and security updates. |

### Styling & UI

| Technology | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Tailwind CSS** | 3.4.x | Utility-first CSS | Primary styling framework. 30% faster development for agencies. Use @apply sparingly; prefer utility classes. |
| **@radix-ui/react-*** | Latest | Unstyled accessible primitives | Form components, dialogs, dropdowns, tooltips. Fully accessible, customizable, works with static export. |
| **lucide-react** | Latest | Icon library | 1000+ clean, tree-shakeable SVG icons. Top-ranked Next.js icon library for 2025. |
| **clsx** + **tailwind-merge** | Latest | Conditional class merging | Combine Tailwind classes conditionally without conflicts. Essential for reusable components. |
| **next-themes** | Latest | Dark mode | Flicker-free theme switching with SSR support. Known hydration issues in Next.js 15—use `suppressHydrationWarning` on html tag. |

### Forms & Validation

| Technology | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **React Hook Form** | 7.54.x | Form state management | All contact forms. Client-side validation with minimal re-renders. Works perfectly with static export. |
| **Zod** | 3.24.x | Schema validation | Validate form submissions on client. Type-safe schemas infer TypeScript types automatically. |
| **@hookform/resolvers** | Latest | Zod integration | Connect React Hook Form with Zod schemas. |

### Animation

| Technology | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Framer Motion** | 11.12.x | Production-ready animations | Page transitions, scroll animations, micro-interactions. Fully SSR-compatible. Requires `'use client'` directive. |

### Image Optimization (Critical for Static Export)

| Technology | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **next-export-optimize-images** | 3.x | Build-time image optimization | **REQUIRED** for static exports. Next.js Image component doesn't optimize with `output: 'export'`. This plugin optimizes at build time using Sharp. |
| **sharp** | 0.33.x | Image processing engine | Dependency for image optimization. Automatically installed by next-export-optimize-images. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **ESLint** | Code linting | Use `next/core-web-vitals` preset. Enables strict TypeScript rules. |
| **Prettier** | Code formatting | Consistent code style. Configure with ESLint integration. |
| **@next/eslint-plugin-next** | Next.js-specific linting | Catches common Next.js mistakes. |

---

## Installation

```bash
# Core framework
npm install next@15.1.6 react@19 react-dom@19

# TypeScript
npm install -D typescript@5.7.2 @types/react@19 @types/node@20 @types/react-dom@19

# Styling
npm install -D tailwindcss@3.4.17 postcss@8 autoprefixer@10
npm install clsx tailwind-merge@2.6.0

# UI Components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip lucide-react

# Forms
npm install react-hook-form@7.54.2 zod@3.24.1 @hookform/resolvers@3.9.1

# Animation
npm install framer-motion@11.12.0

# Theme
npm install next-themes@0.4.4

# Image optimization (CRITICAL for static export)
npm install -D next-export-optimize-images@3.4.0 sharp@0.33.5
```

---

## Configuration

### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Enables static export for PHP hosting
  output: 'export',

  // Image optimization for static export
  images: {
    unoptimized: false, // next-export-optimize-images handles this
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Clean URLs (optional)
  trailingSlash: false,

  // Optimize CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

// Image optimization plugin
const withOptimizeImages = require('next-export-optimize-images');

module.exports = withOptimizeImages(nextConfig);
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    },
    // STRONG TYPING
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add brand colors here
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| **next-export-optimize-images** | next-image-export-optimizer | When you need post-export optimization workflow. next-export-optimize-images is more actively maintained (Aug 2025). |
| **React Hook Form** | Next.js Server Actions | When you have minimal forms and want zero client JS. Not recommended for agency sites with multiple forms. |
| **Framer Motion** | CSS-only animations | When you need maximum performance and minimal JS. Use for simple transitions only. |
| **@radix-ui** | shadcn/ui | When you want pre-styled components. shadcn/ui is built on Radix—just a wrapper. We use Radix directly for full control. |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **next/image without optimization plugin** | Static export doesn't optimize images. Images stay full size, killing performance. | next-export-optimize-images with Sharp |
| **next-pwa** | Heavy dependency. In 2025, native Service Worker implementation is preferred. | Native Service Worker or next-pwa-pack for simple setups |
| **@apply extensively** | Creates maintenance burden. Defeats purpose of utility-first. | Utility classes directly or component classes |
| **Formik** | Heavier than React Hook Form. Less active development. | React Hook Form + Zod |
| **styled-components** | Runtime CSS-in-JS. Larger bundle, slower performance. | Tailwind CSS (zero runtime) |
| **Font Awesome** | Large bundle, not tree-shakeable. | lucide-react (tree-shakeable, SVG) |
| **jQuery** | Legacy, not needed with modern React. | Native DOM APIs or React libraries |

---

## Static Export Constraints

### What Works with `output: 'export'`
- Static pages (App Router and Pages Router)
- Dynamic routes with `generateStaticParams()`
- Client-side data fetching (useEffect, SWR, TanStack Query)
- API routes → become static JSON (limited)
- Image optimization (with plugin)
- next-themes (with hydration fix)

### What Does NOT Work
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Next.js API routes (use n8n webhooks instead)
- getServerSideProps
- Middleware (for most use cases)
- Image optimization without plugin

### Deployment to PHP Hosting
```bash
# Build static export
npm run build

# Output directory: ./out

# Deploy: Upload /out contents to public_html via FTP/SFTP
# - All files are static HTML/CSS/JS
# - No Node.js required on server
# - Works on cPanel, Plesk, any static host
```

---

## Stack Patterns by Variant

### If building with shadcn/ui preference:
- Use `npx shadcn-ui@latest init` for scaffolding
- Still install Radix primitives directly when needed
- shadcn/ui components are copied to your project—full control

### If prioritizing maximum performance:
- Skip animation libraries → CSS transitions
- Minimize client-side JavaScript
- Use native browser APIs when possible
- Preload critical images

### If needing multilingual support:
- Add `next-intl` or `next-i18next`
- Static export supports SSG for multiple locales
- Use `generateStaticParams()` for locale routes

---

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js 15.1.x | React 19.x | Required. Not compatible with React 18. |
| next-export-optimize-images 3.x | Next.js 15.x, Sharp 0.33.x | Verified compatibility (Aug 2025). |
| next-themes 0.4.x | Next.js 15.x | Compatible but hydration errors possible. Use `suppressHydrationWarning`. |
| Framer Motion 11.x | React 19.x, Next.js 15.x | Requires `'use client'` directive. |
| React Hook Form 7.54.x | React 19.x | Full compatibility. |
| Tailwind CSS 3.4.x | Next.js 15.x | PostCSS 8 required. |

---

## Contact Form Integration with n8n

### Recommended Approach
```typescript
// app/api/contact/route.ts (client-side fetch)
// No API routes in static export!

// Instead: Client-side form submission to n8n webhook
const submitToN8n = async (data: FormData) => {
  const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
```

### Why This Works
- Static export = no backend
- n8n webhook = external backend
- Form submits directly to n8n from browser
- n8n handles email notifications, lead scoring, CRM sync

---

## Sources

### Official Documentation (HIGH Confidence)
- [Next.js 15 Documentation](https://nextjs.org/docs) — Framework configuration, static export, image optimization
- [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports) — Official static export documentation (Oct 2025)
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15) — Features and breaking changes (Oct 21, 2024)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — Utility-first framework
- [Radix UI Primitives](https://www.radix-ui.com/primitives) — Unstyled component library
- [Lucide Icons](https://lucide.dev/guide/packages/lucide-react) — Icon library documentation
- [React Hook Form](https://react-hook-form.com) — Form management
- [Zod](https://zod.dev) — Schema validation

### Community & Best Practices (MEDIUM Confidence)
- [Top 10 React & Next.js UI Libraries 2025](https://dev.to/shaahzaibrehman/top-10-react-nextjs-ui-libraries-to-use-in-2025-11j6) — Radix UI as top choice (2025)
- [Tailwind CSS Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns) — Design tokens and patterns (Dec 10, 2025)
- [Next.js Form Validation 2025](https://www.hashbuilds.com/articles/next-js-form-validation-server-actions-vs-react-hook-form-2025) — Server Actions vs RHF comparison (Jan 2026)
- [Building Offline-First Next.js 15 App](https://github.com/vercel/next.js/discussions/82498) — Service Worker patterns (Aug 11, 2025)
- [Top Icon Libraries for Next.js 2025](https://dev.to/icons/icon-libraries-for-nextjs-1915) — Lucide ranking (April 2025)
- [n8n Contact Form Workflow](https://n8n.io/workflows/4337-n8n-contact-form-workflow/) — Official n8n template for contact forms

### Tools & Plugins (MEDIUM Confidence)
- [next-export-optimize-images GitHub](https://github.com/dc7290/next-export-optimize-images) — Static export image optimization (Latest: Aug 31, 2025)
- [Mastering the n8n Webhook Node](https://automategeniushub.com/mastering-the-n8n-webhook-node-part-a/) — Webhook integration guide for static sites

---

*Stack research for: Moka Dijital Agency Website*
*Researched: 2026-02-02*
*Next.js 15 | React 19 | TypeScript 5.7 | Tailwind CSS 3.4*
