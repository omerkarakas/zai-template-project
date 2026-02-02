# Architecture Research

**Domain:** Next.js Static Export Marketing Website
**Researched:** February 2, 2026
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser / Client                         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Pages   │  │ Layouts  │  │ Forms    │  │  UI      │   │
│  │ (Route)  │  │ (Shared) │  │ (Client) │  │ Components│  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       │            │            │            │              │
├───────┴────────────┴────────────┴────────────┴──────────────┤
│                  Next.js Static Export                       │
│             (HTML/CSS/JS - No Server Required)               │
├─────────────────────────────────────────────────────────────┤
│                        PHP Hosting                           │
│                   (cPanel/Plesk/Apache)                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      External Services                       │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │    n8n     │  │  Analytics │  │  Third-party APIs    │  │
│  │  Webhooks  │  │  Scripts   │  │  (optional)          │  │
│  └────────────┘  └────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Pages (Route)** | Individual route pages (home, services) | Server Components with static content |
| **Layouts** | Shared UI structure (header, footer) | Root layout + nested layouts for route groups |
| **Forms** | Contact forms with direct webhook submission | Client Components with fetch() to n8n webhook |
| **UI Components** | Reusable UI elements (buttons, cards, sections) | Shared component library |
| **Public Assets** | Static files (images, fonts, favicon) | Public folder served directly |
| **Metadata** | SEO optimization (sitemap, robots.txt) | Static route handlers generating files |

## Recommended Project Structure

```
src/
├── app/                      # App Router (required for static export)
│   ├── (marketing)/          # Route group: marketing pages
│   │   ├── page.tsx          # Homepage (/)
│   │   └── layout.tsx        # Marketing layout wrapper
│   ├── hizmetler/            # Services pages
│   │   ├── google-isletme-optimizasyonu/
│   │   │   └── page.tsx      # Service page 1
│   │   ├── seo/
│   │   │   └── page.tsx      # Service page 2
│   │   ├── potansiyel-musteri/
│   │   │   └── page.tsx      # Service page 3
│   │   ├── web-gelistirme/
│   │   │   └── page.tsx      # Service page 4
│   │   ├── digital-reklam/
│   │   │   └── page.tsx      # Service page 5
│   │   └── is-akisi-otomasyon/
│   │       └── page.tsx      # Service page 6
│   ├── _components/          # Private folder: route-specific components
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── ServiceCard.tsx   # Service listing cards
│   │   └── HeroSection.tsx   # Hero sections
│   ├── _lib/                 # Private folder: utilities
│   │   ├── forms.ts          # Form submission handlers
│   │   └── constants.ts      # Site constants (webhook URLs, etc.)
│   ├── sitemap.ts            # Dynamic sitemap generation
│   ├── robots.ts             # Robots.txt generation
│   ├── layout.tsx            # Root layout (html, body, global styles)
│   ├── globals.css           # Global styles
│   └── favicon.ico           # Site icon
├── components/               # Shared UI components (global)
│   ├── ui/                   # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── layout/               # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── lib/                      # Shared utilities
│   ├── validation.ts         # Form validation schemas
│   └── utils.ts              # Helper functions
├── styles/                   # Additional styles
├── public/                   # Static assets (images, fonts)
├── types/                    # TypeScript types
└── config/                   # Configuration files
    ├── site.ts               # Site metadata and config
    └── webhooks.ts           # Webhook endpoint configuration
```

### Structure Rationale

- **`app/` directory**: Uses App Router which has enhanced static export support (Next.js 13.4+)
- **`(marketing)` route group**: Organizes marketing pages without affecting URL structure; allows shared layout
- **`hizmetler/` folder**: Turkish URL path for services (SEO-friendly for Turkish market)
- **`_components/` and `_lib/` private folders**: Safely colocate code with routes without creating routing conflicts
- **Split components by scope**: Route-specific in `app/_components/`, globally shared in `src/components/`
- **Client-side forms**: Forms marked as Client Components for webhook integration

## Architectural Patterns

### Pattern 1: Server Components with Client Form Islands

**What:** Use Server Components for static content (pages, layouts) and Client Components only for interactive forms.

**When to use:** Marketing websites with mostly static content but requiring form submissions.

**Trade-offs:**
- **Pros:** Minimal JavaScript bundle, optimal SEO, fast initial load
- **Cons:** Forms require explicit `'use client'` directive

**Example:**
```typescript
// app/hizmetler/potansiyel-musteri/page.tsx (Server Component)
import { ContactForm } from '../_components/ContactForm'

export default function PotansiyelMusteriPage() {
  return (
    <main>
      <h1>Potansiyel Müşteri Kazanımı</h1>
      <p>Dönüşüm odaklı lead generation...</p>
      <ContactForm service="potansiyel-musteri" />
    </main>
  )
}

// app/hizmetler/_components/ContactForm.tsx (Client Component)
'use client'

export function ContactForm({ service }: { service: string }) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, service }),
    })
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

### Pattern 2: Route Groups for Layout Organization

**What:** Use route groups `(group-name)` to organize pages by layout/purpose without affecting URLs.

**When to use:** Multiple page sections sharing layouts (marketing pages, services pages).

**Trade-offs:**
- **Pros:** Clear organization, shared layouts, no URL impact
- **Cons:** Additional nesting level in directory structure

**Example:**
```
app/
├── (marketing)/
│   ├── layout.tsx          # Marketing layout (no header/footer)
│   └── page.tsx            # → /
├── (services)/
│   ├── layout.tsx          # Services layout (with sidebar)
│   ├── page.tsx            # → /hizmetler
│   └── [...slug]/
│       └── page.tsx        # → /hizmetler/slug
```

### Pattern 3: Static Metadata Generation

**What:** Use Route Handlers to generate static files (sitemap.xml, robots.txt) at build time.

**When to use:** SEO optimization for static sites.

**Trade-offs:**
- **Pros:** Automatic SEO, no manual file updates
- **Cons:** Requires TypeScript Route Handler knowledge

**Example:**
```typescript
// app/sitemap.ts (generates sitemap.xml at build time)
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mokadijital.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // ... service pages
  ]
}
```

## Data Flow

### Request Flow

```
User navigates to URL
    ↓
Browser requests HTML
    ↓
Next.js Static Export (pre-built HTML/CSS/JS)
    ↓
Static HTML returned instantly (no server required)
    ↓
[If form submission]
    ↓
User submits form
    ↓
Client Component fetch() → n8n Webhook
    ↓
n8n processes lead (scoring, email, CRM)
    ↓
Response returned to browser
```

### Form Submission Flow

```
User fills contact form
    ↓
Form validation (client-side)
    ↓
POST request to n8n webhook URL
    ↓
n8n workflow processes:
  - Lead scoring
  - Email notification
  - CRM integration
  - Auto-responder
    ↓
Success response to user
    ↓
Thank you message / redirect
```

### Key Data Flows

1. **Page navigation:** Pure client-side routing (no server round-trip after initial load)
2. **Form submission:** Direct client → n8n webhook (bypassing Next.js API routes)
3. **Static assets:** Served directly from `public/` folder via web server

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k visitors/month | Single static export, direct webhook calls, basic n8n workflow |
| 1k-100k visitors/month | Add CDN (Cloudflare), optimize images, implement rate limiting on n8n |
| 100k+ visitors/month | Consider Vercel Edge deployment, advanced caching, A/B testing infrastructure |

### Scaling Priorities

1. **First bottleneck:** n8n webhook capacity (rate limits, processing time)
   - **Fix:** Use n8n cloud/enterprise, implement queue system, add Redis for rate limiting

2. **Second bottleneck:** Static asset delivery (images, fonts)
   - **Fix:** CDN (Cloudflare), image optimization, lazy loading

## Anti-Patterns

### Anti-Pattern 1: Using API Routes with Static Export

**What people do:** Creating `/app/api/` routes with `output: 'export'` enabled

**Why it's wrong:** Next.js API routes are **not supported** with static exports. They require a Node.js server.

**Do this instead:** Submit forms directly to external webhooks (n8n) from client-side components:

```typescript
// ❌ WRONG - won't work with static export
// app/api/contact/route.ts
export async function POST(request: Request) {
  // This won't be built/exported
}

// ✅ CORRECT - client-side submission
// app/_components/ContactForm.tsx
'use client'

export function ContactForm() {
  async function handleSubmit(e: React.FormEvent) {
    await fetch('https://n8n.your-domain.com/webhook/...', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}
```

### Anti-Pattern 2: Overusing Client Components

**What people do:** Marking everything as `'use client'` to avoid thinking about server/client boundaries

**Why it's wrong:** Defeats the purpose of Next.js static export - increases bundle size, reduces SEO benefits

**Do this instead:** Use Server Components by default, Client Components only for:
- Forms (user interaction)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect)

```typescript
// ❌ WRONG - unnecessary client component
'use client'
export function HeroSection() {
  return <h1>Our Services</h1>  // No interactivity needed!
}

// ✅ CORRECT - server component
export function HeroSection() {
  return <h1>Our Services</h1>
}
```

### Anti-Pattern 3: Dynamic Routes without generateStaticParams

**What people do:** Creating dynamic routes like `[slug].tsx` without `generateStaticParams()`

**Why it's wrong:** Static export requires all routes to be known at build time

**Do this instead:** Either use `generateStaticParams()` or avoid dynamic routes entirely for static sites

```typescript
// ❌ WRONG - fails build with static export
// app/hizmetler/[slug]/page.tsx
export default function ServicePage({ params }: { params: { slug: string } }) {
  // This won't build without generateStaticParams
}

// ✅ CORRECT - explicit routes
// app/hizmetler/google-isletme-optimizasyonu/page.tsx
// app/hizmetler/seo/page.tsx
// app/hizmetler/potansiyel-musteri/page.tsx
```

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **n8n Webhooks** | Client-side `fetch()` POST from ContactForm component | Store webhook URL in `.env.local` as `NEXT_PUBLIC_N8N_WEBHOOK_URL` |
| **Google Analytics** | Script tag in root layout or `next/script` component | Use `next/script` for optimal loading |
| **Google Tag Manager** | `next/script` component with strategy="afterInteractive" | Load in root layout |
| **Facebook Pixel** | `next/script` component | Load for conversion tracking |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| **Server Components ↔ Client Components** | Props (one-way data flow) | Pass functions as props for callbacks |
| **Pages ↔ Layouts** | Nested rendering | Layout wraps page content automatically |
| **Forms ↔ Webhook** | HTTP POST (JSON) | Handle CORS if webhook on different domain |

## Build Order Recommendations

### Phase 1: Foundation (No Dependencies)
1. Project setup (Next.js, TypeScript, Tailwind)
2. Root layout and global styles
3. Basic UI component library (Button, Card, Input)
4. Layout components (Header, Footer, Navigation)

### Phase 2: Core Pages (Depends on Phase 1)
1. Homepage (`(marketing)/page.tsx`)
2. Service pages structure (`hizmetler/*/page.tsx`)
3. Static assets (logo, images)

### Phase 3: Forms Integration (Depends on Phase 1 & 2)
1. n8n webhook setup and testing
2. ContactForm component with webhook integration
3. Form validation and error handling
4. Success/thank you states

### Phase 4: SEO Optimization (Depends on Phase 2)
1. sitemap.ts generation
2. robots.ts generation
3. Metadata API for each page
4. Open Graph images

### Phase 5: Polish & Testing (Depends on All Previous)
1. Mobile responsiveness
2. Form submission testing
3. Performance optimization
4. Accessibility audit

## Sources

- [Next.js Static Exports Guide (Official)](https://nextjs.org/docs/app/guides/static-exports) (October 2025) - HIGH confidence
- [Next.js Project Structure (Official)](https://nextjs.org/docs/app/getting-started/project-structure) (December 2025) - HIGH confidence
- [5 Design Patterns for Scalable Next.js Apps](https://dev.to/nithya_iyer/5-design-patterns-for-building-scalable-nextjs-applications-1c80) (February 2025) - MEDIUM confidence
- [State Management Strategies for React Server Components](https://medium.com/@rameshkannanyt0078/state-management-strategies-for-react-server-components-in-next-js-a58f1e9df7b6) - MEDIUM confidence
- [Next.js vs Astro for Static Sites 2026](https://altalks.com/tech/next-js-vs-astro-for-static-sites-in-2026-which-framework-is-better/) (January 2026) - MEDIUM confidence
- [Static Site Form Handling Best Practices](https://medium.com/@irishgeoff20/when-a-static-website-includes-a-form-the-challenge-is-handling-form-submissions-since-static-bd296154221e) - MEDIUM confidence
- [n8n Webhook Documentation](https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/) - HIGH confidence

---
*Architecture research for: Next.js Static Export Marketing Website*
*Researched: February 2, 2026*
