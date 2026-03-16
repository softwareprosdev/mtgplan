# MTGPlan.com Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Next.js 15 static marketing website for mtgplan.com with SEO/GEO/AEO optimization, a quote estimator, lead capture with email notifications, a blog system, and Docker deployment.

**Architecture:** Next.js 15 App Router with static generation (SSG). All pages are server components rendered at build time. The quote estimator form is a client component for interactivity. Lead capture uses a server-side API route that writes to a JSON file and sends email notifications via Resend. Blog posts are MDX files compiled at build time using `next-mdx-remote/rsc`.

**Tech Stack:** Next.js 15, Tailwind CSS 4, TypeScript, next-mdx-remote, gray-matter, Resend, sharp, Docker

**Spec:** `docs/superpowers/specs/2026-03-15-mtgplan-website-design.md`

---

## File Map

### Configuration & Deployment
| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `next.config.ts` | Next.js config (standalone output) |
| `src/styles/globals.css` | Tailwind directives + CSS custom properties + `@theme` config (Tailwind CSS 4 uses CSS-based config, no `tailwind.config.ts`) |
| `.env.example` | Environment variable template |
| `.gitignore` | Git ignore rules |
| `.dockerignore` | Docker build ignore rules |
| `Dockerfile` | Multi-stage Docker build |
| `docker-compose.yml` | Coolify deployment config |
| `README.md` | Project README for GitHub |
| `docs/coolify-env-config.md` | Environment variable configuration guide for Coolify |

### Layout & Navigation
| File | Responsibility |
|------|---------------|
| `src/app/layout.tsx` | Root layout — html, body, font, nav, footer, contact widget, analytics, org schema |
| `src/components/layout/Header.tsx` | Desktop nav bar with logo and links |
| `src/components/layout/MobileMenu.tsx` | Mobile hamburger menu with slide-out drawer (client component) |
| `src/components/layout/Footer.tsx` | Footer with links, legal, phone, copyright |
| `src/components/layout/ContactWidget.tsx` | Floating iMessage/WhatsApp bubble (client component) |

### UI Primitives
| File | Responsibility |
|------|---------------|
| `src/components/ui/Button.tsx` | Reusable button (primary/secondary/outline variants) |
| `src/components/ui/Card.tsx` | Reusable card container |
| `src/components/ui/Input.tsx` | Form input with label, validation error display |

### Homepage Sections
| File | Responsibility |
|------|---------------|
| `src/app/page.tsx` | Homepage — assembles all sections, metadata |
| `src/components/sections/Hero.tsx` | Hero with headline, subtext, dual CTAs |
| `src/components/sections/VideoSection.tsx` | QuoteAndApply video embed with skeleton fallback |
| `src/components/sections/Benefits.tsx` | 3-column benefit cards with icons |
| `src/components/sections/HowItWorks.tsx` | 3-step process section |
| `src/components/sections/Testimonials.tsx` | Testimonial carousel (client component) |
| `src/components/sections/CTABanner.tsx` | Reusable CTA banner section |

### SEO Infrastructure
| File | Responsibility |
|------|---------------|
| `src/lib/metadata.ts` | Shared metadata helper (generates title, description, OG, Twitter per page) |
| `src/lib/schema.ts` | JSON-LD schema generators (Organization, WebSite, FAQ, Article, FinancialProduct, Breadcrumb) |
| `src/components/seo/JsonLd.tsx` | JSON-LD script tag renderer |
| `src/components/seo/Breadcrumbs.tsx` | Breadcrumb nav + BreadcrumbList schema |
| `src/components/seo/Analytics.tsx` | GA4 script loader (client component) |
| `src/app/sitemap.ts` | Auto-generated sitemap.xml |
| `src/app/robots.ts` | robots.txt generation |

### Quote Estimator & Lead Capture
| File | Responsibility |
|------|---------------|
| `src/lib/quote.ts` | Quote calculation logic (rate table, formula) |
| `src/components/quote/QuoteForm.tsx` | Multi-step quote form (client component) |
| `src/app/quote/page.tsx` | Quote page with metadata, schema, breadcrumbs |
| `src/app/api/leads/route.ts` | POST endpoint — saves lead to JSON, sends Resend email |
| `src/app/api/health/route.ts` | Health check endpoint for Coolify |

### Content Pages
| File | Responsibility |
|------|---------------|
| `src/app/what-is-mortgage-protection-insurance/page.tsx` | Pillar guide page |
| `src/app/how-it-works/page.tsx` | How it works page |
| `src/app/about/page.tsx` | About / trust page |
| `src/app/faq/page.tsx` | FAQ page with FAQPage schema |
| `src/app/contact/page.tsx` | Contact page with form |
| `src/app/testimonials/page.tsx` | Full testimonials page |
| `src/app/privacy-policy/page.tsx` | Privacy policy |
| `src/app/terms/page.tsx` | Terms of service |
| `src/lib/testimonials.ts` | Hardcoded testimonials data |
| `src/components/contact/ContactForm.tsx` | Contact page form (client component) |

### Blog System
| File | Responsibility |
|------|---------------|
| `src/lib/blog.ts` | Blog utilities (readdir, frontmatter parsing, reading time) |
| `src/app/blog/page.tsx` | Blog index page |
| `src/app/blog/[slug]/page.tsx` | Dynamic blog post page with generateStaticParams |
| `src/content/blog/mortgage-protection-vs-term-life.mdx` | Blog article 1 |
| `src/content/blog/do-i-need-mortgage-protection-insurance.mdx` | Blog article 2 |
| `src/content/blog/how-much-does-mortgage-protection-cost.mdx` | Blog article 3 |
| `src/content/blog/what-happens-to-mortgage-when-you-die.mdx` | Blog article 4 |
| `src/content/blog/mortgage-protection-for-self-employed.mdx` | Blog article 5 |

### Assets
| File | Responsibility |
|------|---------------|
| `public/logo.svg` | MTGPlan logo (shield/home + wordmark) |
| `public/favicon.svg` | Favicon (SVG format for modern browsers) |
| `public/images/` | Stock imagery directory |

---

## Chunk 1: Project Scaffolding & Configuration

### Task 1: Initialize Next.js project with dependencies

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.env.example`, `.gitignore`

- [ ] **Step 1: Create Next.js 15 project**

```bash
cd /home/sigma/Documents/mtgplan
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Select defaults when prompted. This generates `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/styles/globals.css`.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install next-mdx-remote@^5 gray-matter resend sharp
npm install -D @types/node
```

- [ ] **Step 3: Configure next.config.ts for standalone output**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Create .env.example**

```bash
# .env.example
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=your@email.com
```

- [ ] **Step 5: Update .gitignore**

Append to the generated `.gitignore`:

```
# Lead data
data/leads.json

# Environment
.env
.env.local

# Firebase
firebase-debug.log
```

- [ ] **Step 6: Verify build works**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts .env.example .gitignore src/ postcss.config.mjs eslint.config.mjs
git commit -m "feat: initialize Next.js 15 project with dependencies"
git push
```

---

### Task 2: Configure Tailwind CSS 4 theme with design tokens

**Files:**
- Modify: `src/styles/globals.css`
- [ ] **Step 1: Set up CSS custom properties and Tailwind theme in globals.css**

Note: Tailwind CSS 4 uses CSS-based configuration via `@theme` in `globals.css`. No `tailwind.config.ts` file is needed. If `create-next-app` generated one, it can be deleted.

Replace the contents of `src/styles/globals.css` with:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-primary: #1e40af;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e3a8a;
  --color-accent: #f59e0b;
  --color-accent-hover: #d97706;
  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f4;
  --color-neutral-200: #e7e5e4;
  --color-neutral-700: #44403c;
  --color-neutral-900: #1c1917;
  --color-success: #16a34a;
  --color-error: #dc2626;

  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
}

@layer base {
  body {
    @apply bg-neutral-50 text-neutral-700 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-neutral-900;
  }
}
```

- [ ] **Step 2: Install typography plugin**

```bash
npm install @tailwindcss/typography
```

- [ ] **Step 3: Configure Inter font in root layout**

Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MTGPlan - Mortgage Protection Insurance",
  description: "Protect your family and your home with affordable mortgage protection insurance. Get a free quote in 30 seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/styles/globals.css src/app/layout.tsx package.json package-lock.json
git commit -m "feat: configure Tailwind CSS 4 theme with design tokens and Inter font"
git push
```

---

### Task 3: Create Docker deployment files and documentation

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `.dockerignore`
- Create: `README.md`
- Create: `docs/coolify-env-config.md`

- [ ] **Step 1: Create multi-stage Dockerfile**

```dockerfile
# Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

- [ ] **Step 2: Create docker-compose.yml**

```yaml
# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_GA_MEASUREMENT_ID=${NEXT_PUBLIC_GA_MEASUREMENT_ID}
      - RESEND_API_KEY=${RESEND_API_KEY}
      - NOTIFICATION_EMAIL=${NOTIFICATION_EMAIL}
    restart: unless-stopped
    volumes:
      - lead-data:/app/data

volumes:
  lead-data:
```

- [ ] **Step 3: Create .dockerignore**

```
node_modules
.next
.git
.env
.env.local
docs
```

- [ ] **Step 4: Create README.md**

Create a README with: project overview, tech stack, local development instructions (`npm install`, `npm run dev`), Docker build instructions, deployment notes, env vars reference, project structure overview.

- [ ] **Step 5: Create Coolify env config guide**

Create `docs/coolify-env-config.md` documenting all environment variables needed for Coolify deployment:

| Variable | Required | Description | How to Get |
|----------|----------|-------------|------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID | Google Analytics → Admin → Data Streams → Measurement ID (format: G-XXXXXXXXXX) |
| `RESEND_API_KEY` | Yes | Resend API key for lead email notifications | Sign up at resend.com → API Keys → Create API Key |
| `NOTIFICATION_EMAIL` | Yes | Email address that receives lead notifications | Your email address |
| `NODE_ENV` | Yes | Set to `production` | Already set in docker-compose.yml |

Include step-by-step Coolify setup instructions: where to paste env vars, how to configure the Docker build, health check URL (`/api/health`), and DNS/SSL notes.

- [ ] **Step 6: Commit**

```bash
git add Dockerfile docker-compose.yml .dockerignore README.md docs/coolify-env-config.md
git commit -m "feat: add Docker build, docker-compose, README, and Coolify env config docs"
git push
```

---

## Chunk 2: UI Primitives & Layout Components

### Task 4: Create UI primitive components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Input.tsx`

- [ ] **Step 1: Create Button component**

Reusable button with variants (primary/secondary/outline), sizes (sm/md/lg), optional `href` for Link-based buttons. Uses Tailwind classes for accent and primary colors.

- [ ] **Step 2: Create Card component**

Simple container with white bg, rounded corners, shadow, border, and padding.

- [ ] **Step 3: Create Input component**

Form input with label, validation error display (red text below), focus ring, required indicator.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add UI primitive components (Button, Card, Input)"
git push
```

---

### Task 5: Create Logo SVG and favicon

**Files:**
- Create: `public/logo.svg`
- Create: `public/favicon.svg`

- [ ] **Step 1: Create shield/home logo SVG**

SVG with a blue shield containing a white house icon, followed by "MTGPlan" wordmark text. Viewbox: 240x48.

- [ ] **Step 2: Create favicon**

SVG favicon using just the shield portion of the logo.

- [ ] **Step 3: Update layout metadata to reference favicon**

Add `icons: { icon: "/favicon.svg" }` to layout metadata.

- [ ] **Step 4: Commit**

```bash
git add public/logo.svg public/favicon.svg src/app/layout.tsx
git commit -m "feat: add MTGPlan logo and favicon"
git push
```

---

### Task 6: Create Header with mobile menu

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/MobileMenu.tsx`

- [ ] **Step 1: Create Header component**

Sticky header with logo (left), nav links (right, hidden on mobile): Home, How It Works, FAQ, Blog, About, Contact. CTA button: "Get a Free Quote" linking to `/quote`. Renders `<MobileMenu>` for mobile.

- [ ] **Step 2: Create MobileMenu client component**

Client component with hamburger toggle. When open, renders full-screen overlay with nav links and quote CTA. Closes on link click.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/MobileMenu.tsx
git commit -m "feat: add Header with responsive mobile menu"
git push
```

---

### Task 7: Create Footer component

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

4-column grid (brand/phone, Company links, Resources links, Legal links). Dark blue background (`primary-dark`), white/blue-200 text. Copyright line at bottom. Phone number as click-to-call link.

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer component with nav links and legal"
git push
```

---

### Task 8: Create ContactWidget (floating chat bubble)

**Files:**
- Create: `src/components/layout/ContactWidget.tsx`

- [ ] **Step 1: Create ContactWidget client component**

Fixed bottom-right, z-50. Circular blue button with chat icon. On click, expands to show iMessage (`sms:4074864555`) and WhatsApp (`https://wa.me/14074864555`) options. Pulse animation for first 5 seconds. Close button when expanded.

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/ContactWidget.tsx
git commit -m "feat: add floating contact widget with iMessage and WhatsApp"
git push
```

---

### Task 9: Wire layout components into root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update root layout with Header, Footer, ContactWidget, Analytics**

Import and render Header, Footer, ContactWidget, Analytics. Set comprehensive metadata: metadataBase, title template, description, openGraph, twitter, robots (index/follow, googleBot settings), icons. Body uses `min-h-screen flex flex-col`, main uses `flex-1`.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire Header, Footer, ContactWidget into root layout with full metadata"
git push
```

---

## Chunk 3: SEO Infrastructure

### Task 10: Create JSON-LD schema generators

**Files:**
- Create: `src/lib/schema.ts`
- Create: `src/components/seo/JsonLd.tsx`

- [ ] **Step 1: Create schema generator functions**

Functions for: `organizationSchema()`, `websiteSchema()`, `faqSchema(faqs)`, `articleSchema({title, description, url, image, datePublished, author})`, `financialProductSchema()`, `breadcrumbSchema(items)`. All return plain objects with `@context: "https://schema.org"`.

- [ ] **Step 2: Create JsonLd renderer component**

Server component that renders a `<script type="application/ld+json">` tag. Uses `JSON.stringify(data)` for the content. Note: JSON-LD content is safe structured data (not user input), so the script tag injection is the standard schema.org pattern.

- [ ] **Step 3: Commit**

```bash
git add src/lib/schema.ts src/components/seo/JsonLd.tsx
git commit -m "feat: add JSON-LD schema generators and renderer"
git push
```

---

### Task 11: Create Breadcrumbs component

**Files:**
- Create: `src/components/seo/Breadcrumbs.tsx`

- [ ] **Step 1: Create Breadcrumbs with schema**

Renders breadcrumb nav with links separated by `/`. Last item is plain text (current page). Also renders `BreadcrumbList` JSON-LD schema. Accepts `items: { label: string; href: string }[]`.

- [ ] **Step 2: Commit**

```bash
git add src/components/seo/Breadcrumbs.tsx
git commit -m "feat: add Breadcrumbs component with BreadcrumbList schema"
git push
```

---

### Task 12: Create Analytics, sitemap, robots, and metadata helper

**Files:**
- Create: `src/components/seo/Analytics.tsx`
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/lib/metadata.ts`

- [ ] **Step 1: Create Analytics component**

Client component. Loads GA4 via `next/script` with `afterInteractive` strategy. Reads `NEXT_PUBLIC_GA_MEASUREMENT_ID` from `process.env`. Returns null if not set. Also exports a `trackEvent(action: string, params?: Record<string, string>)` utility function that calls `window.gtag('event', action, params)` for conversion tracking.

- [ ] **Step 2: Create sitemap.ts**

Uses `MetadataRoute.Sitemap` return type. Lists all static pages + dynamically reads blog MDX files from `src/content/blog/`. Homepage priority: 1, quote: 0.9, others: 0.8, blog posts: 0.7. Weekly change frequency for static, monthly for blog.

- [ ] **Step 3: Create robots.ts**

Uses `MetadataRoute.Robots` return type. Allows all except `/api/`. Points to sitemap at `https://mtgplan.com/sitemap.xml`.

- [ ] **Step 4: Create metadata helper**

`createMetadata()` function that takes `{title, description, path, image?, noIndex?}` and returns a `Metadata` object with title, description, canonical URL, openGraph, twitter cards. Defaults OG image to `/og-default.png`.

- [ ] **Step 5: Add Analytics to root layout and Google Search Console verification**

Import and render `<Analytics />` in `src/app/layout.tsx`. Add Google Search Console verification meta tag to root layout metadata:
```tsx
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
},
```
Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to `.env.example`.

- [ ] **Step 6: Add conversion tracking to QuoteForm and ContactForm**

Import `trackEvent` from Analytics. Call `trackEvent('quote_estimate_submitted')` when the quote calculation is shown, `trackEvent('lead_form_submitted')` on successful lead submission, and `trackEvent('contact_form_submitted')` on contact form submission. Call `trackEvent('contact_widget_clicked', { channel: 'imessage' | 'whatsapp' })` in ContactWidget on link clicks.

- [ ] **Step 6: Commit**

```bash
git add src/components/seo/Analytics.tsx src/app/sitemap.ts src/app/robots.ts src/lib/metadata.ts src/app/layout.tsx .env.example
git commit -m "feat: add Analytics, sitemap, robots.txt, and metadata helper"
git push
```

---

## Chunk 4: Homepage Sections

### Task 13: Create homepage section components

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/VideoSection.tsx`
- Create: `src/components/sections/Benefits.tsx`
- Create: `src/components/sections/HowItWorks.tsx`
- Create: `src/components/sections/CTABanner.tsx`

- [ ] **Step 1: Create Hero section**

Gradient background (primary-dark to primary). H1: "Protect Your Family. Protect Your Home." Subtext about affordable MPI. Two CTA buttons: "Get Your Free Quote" (accent, links to /quote) and "Learn How It Works" (outline, links to /how-it-works).

- [ ] **Step 2: Create VideoSection**

Gray background section. H2: "See How Mortgage Protection Works". Fixed 16:9 aspect ratio container with `id="container-id"`. Loads QuoteAndApply script via `next/script` with `strategy="lazyOnload"`, `data-strife-key="QY8KgZDZ5Bv6AfoB"`, `data-strife-container-id="container-id"`. Noscript fallback with "Video unavailable" and link to /how-it-works.

- [ ] **Step 3: Create Benefits section**

H2: "Why Choose Mortgage Protection Insurance?" 3-column grid (stacks on mobile). Cards with SVG icons: shield (Financial Security), heart (Family Protection), clock (Fast & Easy Process). Each has title and description.

- [ ] **Step 4: Create HowItWorks section**

Gray background. H2: "How It Works". 3-column grid with numbered circles (accent bg): 1. Get Your Free Quote, 2. Choose Your Plan, 3. You're Covered. Each with description.

- [ ] **Step 5: Create CTABanner section**

Primary background, white text. Configurable headline (default: "Don't Wait Until It's Too Late"), subtext, button text, button href. Reusable across pages.

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/
git commit -m "feat: add homepage section components (Hero, Video, Benefits, HowItWorks, CTA)"
git push
```

---

### Task 14: Create Testimonials data and carousel component

**Files:**
- Create: `src/lib/testimonials.ts`
- Create: `src/components/sections/Testimonials.tsx`

- [ ] **Step 1: Create testimonials data**

Array of 5 testimonials with `name`, `location` (state), `quote`, `rating` (all 5 stars). Scenarios: spouse passing, disability, simple process, comparison decision, self-employed single parent.

- [ ] **Step 2: Create Testimonials carousel**

Client component. Shows one testimonial at a time with star rating, quote, name, location. Prev/next arrow buttons. Dot indicators. H2: "What Our Clients Say". Disclaimer below: "Names have been changed for privacy. Results may vary."

- [ ] **Step 3: Commit**

```bash
git add src/lib/testimonials.ts src/components/sections/Testimonials.tsx
git commit -m "feat: add testimonials data and carousel component"
git push
```

---

### Task 15: Assemble homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build complete homepage**

Assemble all sections in order: JsonLd (org + website schemas), Hero, VideoSection, Trust Bar (inline section with checkmarks and stars — "Helping Families Protect Their Homes Nationwide", 5 stars, "Licensed in All 50 States"), Benefits, HowItWorks, Testimonials, FAQ Preview (3 questions in `<details>` accordions with link to /faq), CTABanner.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble complete homepage with all sections and schema markup"
git push
```

---

## Chunk 5: Quote Estimator & Lead Capture

### Task 16: Create quote calculation logic

**Files:**
- Create: `src/lib/quote.ts`

- [ ] **Step 1: Implement rate table and calculation**

`calculateQuote(mortgageBalance, age)` — returns `{low, high}` monthly cost range. Rate table per spec (6 brackets from age 18-75, rates per $100k). Formula: `(mortgage / 100000) * rate`. `validateQuoteInputs(mortgage, age, zip)` — returns `{valid, errors}` with specific error messages per field.

- [ ] **Step 2: Commit**

```bash
git add src/lib/quote.ts
git commit -m "feat: add quote calculation logic with rate table and validation"
git push
```

---

### Task 17: Create QuoteForm client component

**Files:**
- Create: `src/components/quote/QuoteForm.tsx`

- [ ] **Step 1: Create multi-step quote form**

Client component with 4 steps: "quote" (3 inputs: mortgage, age, zip), "result" (shows estimated range + button to continue), "lead" (name, email, phone fields), "success" (thank you message). Uses `calculateQuote` and `validateQuoteInputs` from `src/lib/quote.ts`. Submits lead data to `/api/leads` via fetch POST. Clears field errors on change. Shows inline validation errors. Privacy policy link on lead form.

- [ ] **Step 2: Commit**

```bash
git add src/components/quote/QuoteForm.tsx
git commit -m "feat: add multi-step QuoteForm with validation and lead capture"
git push
```

---

### Task 18: Create leads API route with Resend notification

**Files:**
- Create: `src/app/api/leads/route.ts`
- Create: `src/app/api/health/route.ts`

- [ ] **Step 1: Create leads API route**

POST handler. Parses JSON body, adds `id` (timestamp) and `createdAt`. Ensures `data/` directory and `leads.json` exist. Appends lead to JSON file. Calls `sendNotification()` which uses Resend SDK to email `NOTIFICATION_EMAIL` with lead details (name, phone, email, mortgage info, estimate). Non-blocking notification (fire and forget with error logging). Returns 201 on success, 500 on error.

- [ ] **Step 2: Create health check endpoint**

GET handler. Returns `{ status: "ok", timestamp: ISO string }`.

- [ ] **Step 3: Create data directory**

```bash
mkdir -p data
echo "[]" > data/leads.json
```

Note: `data/leads.json` is in `.gitignore`. The directory is created by the Dockerfile (`RUN mkdir -p /app/data`).

- [ ] **Step 4: Commit**

```bash
git add src/app/api/
git commit -m "feat: add leads API route with Resend email notifications and health check"
git push
```

---

### Task 19: Create quote page

**Files:**
- Create: `src/app/quote/page.tsx`

- [ ] **Step 1: Build quote page with metadata and schema**

Uses `createMetadata` for SEO (title: "Get Your Free Mortgage Protection Insurance Quote"). Renders `FinancialProduct` JSON-LD schema. Breadcrumbs: Home > Get a Quote. H1 and subtext. Renders `<QuoteForm />`.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/quote/
git commit -m "feat: add quote estimator page with form, schema, and breadcrumbs"
git push
```

---

## Chunk 6: Content Pages

### Task 20: Create pillar guide page

**Files:**
- Create: `src/app/what-is-mortgage-protection-insurance/page.tsx`

- [ ] **Step 1: Create comprehensive pillar guide**

~1500 words. Sections per spec: AEO summary box (blue-left-border callout), Table of Contents, What Is MPI (with PMI comparison), How It Works (coverage triggers list), Who Needs It (5 demographics), Types of Coverage (comparison table: Level Term, Decreasing Term, Return of Premium), Pros and Cons (side-by-side green/red cards), How Much Does It Cost (price range, factors, CTA to quote), How to Get Covered (4 steps with link to estimator), Related Articles (links to all 5 blog posts). Uses `createMetadata`, breadcrumbs, CTABanner at bottom.

- [ ] **Step 2: Commit**

```bash
git add src/app/what-is-mortgage-protection-insurance/
git commit -m "feat: add pillar guide page — What Is Mortgage Protection Insurance"
git push
```

---

### Task 21: Create How It Works, About, FAQ, Contact, Testimonials pages

**Files:**
- Create: `src/app/how-it-works/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/faq/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/testimonials/page.tsx`
- Create: `src/components/contact/ContactForm.tsx` (client component)

- [ ] **Step 1: Create How It Works page**

Hero: "Getting Protected Is Simple". 3 detailed steps with descriptions and CTAs. Mini FAQ (2-3 questions in accordions). CTA banner: "Ready to Get Started?" Uses `createMetadata`, breadcrumbs.

- [ ] **Step 2: Create About page**

Mission statement, "Our Approach" section, trust signals (licensed, regulated), Values section (3 cards: Transparency, Simplicity, Family First with icons). CTA: "Let Us Help Protect Your Family". Uses `createMetadata`, breadcrumbs.

- [ ] **Step 3: Create FAQ page with FAQPage schema**

10-15 comprehensive questions in `<details>` accordion format. Renders `FAQPage` JSON-LD schema using `faqSchema()`. Categories: coverage questions, cost questions, process questions, eligibility questions. Link to `/quote` in relevant answers. Uses `createMetadata`, breadcrumbs.

- [ ] **Step 4: Create ContactForm client component**

Client component at `src/components/contact/ContactForm.tsx`. Fields: Name, Email, Phone, Message (textarea). Submits to `/api/leads` with `type: "contact"`. Success/error states.

- [ ] **Step 5: Create Contact page**

Phone: 407-486-4555 (click-to-call). ContactForm component. WhatsApp link. iMessage link. "We respond within 24 hours." Privacy policy link. Uses `createMetadata`, breadcrumbs.

- [ ] **Step 6: Create Testimonials page**

Grid of all testimonials from `src/lib/testimonials.ts`. Each in a Card with stars, quote, name, location. Disclaimer at bottom. CTA banner. Uses `createMetadata`, breadcrumbs.

- [ ] **Step 7: Verify build**

```bash
npm run build
```

- [ ] **Step 8: Commit**

```bash
git add src/app/how-it-works/ src/app/about/ src/app/faq/ src/app/contact/ src/app/testimonials/ src/components/contact/
git commit -m "feat: add content pages (How It Works, About, FAQ, Contact, Testimonials)"
git push
```

---

### Task 22: Create Privacy Policy and Terms pages

**Files:**
- Create: `src/app/privacy-policy/page.tsx`
- Create: `src/app/terms/page.tsx`

- [ ] **Step 1: Create Privacy Policy**

Standard privacy policy covering: data collected (name, email, phone, mortgage info), how it's used (lead follow-up, email notifications via Resend), data storage (server-side), no third-party selling of personal data, user rights (request data deletion by contacting 407-486-4555), contact info. `noIndex: true` in metadata. Breadcrumbs.

- [ ] **Step 2: Create Terms of Service**

Standard terms: service description (informational/lead generation, not insurance advice or binding quotes), disclaimer (estimates are illustrative only), limitation of liability, intellectual property, governing law (Florida). `noIndex: true` in metadata. Breadcrumbs.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy-policy/ src/app/terms/
git commit -m "feat: add Privacy Policy and Terms of Service pages"
git push
```

---

## Chunk 7: Blog System

### Task 23: Create blog utilities

**Files:**
- Create: `src/lib/blog.ts`

- [ ] **Step 1: Create blog content loading utilities**

`getAllPosts()` — reads all `.mdx` files from `src/content/blog/`, parses frontmatter with `gray-matter`, calculates reading time (200 wpm), returns sorted by date descending. `getPostBySlug(slug)` — reads single post. `getAllSlugs()` — returns array of slug strings. Types: `BlogFrontmatter` (title, description, date, author, keywords, image), `BlogPost` (slug, frontmatter, content, readingTime).

- [ ] **Step 2: Commit**

```bash
git add src/lib/blog.ts
git commit -m "feat: add blog content loading utilities with frontmatter parsing"
git push
```

---

### Task 24: Create blog index and post pages

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create blog index page**

Lists all posts from `getAllPosts()`. Each post in a Card with title (links to `/blog/[slug]`), description, date, reading time. Uses `createMetadata`, breadcrumbs.

- [ ] **Step 2: Create dynamic blog post page**

Uses `generateStaticParams()` from `getAllSlugs()`. Uses `generateMetadata()` with `createMetadata` for dynamic per-post SEO. Renders MDX via `compileMDX` from `next-mdx-remote/rsc` with `parseFrontmatter: false` (already parsed). Renders `BlogPosting` JSON-LD via `articleSchema()`. Header with title, author, date, reading time. **Table of contents** generated from headings — extract H2/H3 headings from MDX content using regex before rendering, display as a nav list with anchor links at top of article. Prose-styled content via `@tailwindcss/typography`. Related posts section (3 other posts). CTABanner at bottom. Breadcrumbs: Home > Blog > [Post Title]. `params` is `Promise<{ slug: string }>` (Next.js 15 async params).

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/
git commit -m "feat: add blog index and dynamic blog post pages with MDX rendering"
git push
```

---

### Task 25: Write 5 blog articles

**Files:**
- Create: `src/content/blog/mortgage-protection-vs-term-life.mdx`
- Create: `src/content/blog/do-i-need-mortgage-protection-insurance.mdx`
- Create: `src/content/blog/how-much-does-mortgage-protection-cost.mdx`
- Create: `src/content/blog/what-happens-to-mortgage-when-you-die.mdx`
- Create: `src/content/blog/mortgage-protection-for-self-employed.mdx`

Each article should be 800-1200 words with proper frontmatter (title, description, date, author: "MTGPlan Team", keywords array, image). Structure each for AEO: H2 = question, first paragraph = direct concise answer. Include internal links to `/quote`, `/what-is-mortgage-protection-insurance`, and other blog posts.

- [ ] **Step 1: Create content/blog directory**

```bash
mkdir -p src/content/blog
```

- [ ] **Step 2: Write Article 1 — Mortgage Protection vs Term Life**

Target: "mortgage protection vs term life". Content: direct answer, comparison table (coverage, beneficiary, flexibility, cost, medical exam), detailed breakdown of each, when to choose which, CTA.

- [ ] **Step 3: Write Article 2 — Do I Need Mortgage Protection Insurance?**

Target: "do i need mortgage protection insurance". Content: direct answer, checklist/quiz (single income? new homeowner? self-employed? health conditions?), life scenarios, alternatives, CTA.

- [ ] **Step 4: Write Article 3 — How Much Does Mortgage Protection Cost?**

Target: "mortgage protection insurance cost". Content: direct answer ($20-$70/mo), cost factors, rate table by age, comparison examples, ways to lower cost, CTA to quote.

- [ ] **Step 5: Write Article 4 — What Happens to Your Mortgage When You Die?**

Target: "what happens to mortgage when you die". Content: direct answer, legal process, what happens to spouse/co-signer, options (sell, refinance, assume), how MPI prevents foreclosure, CTA.

- [ ] **Step 6: Write Article 5 — Mortgage Protection for Self-Employed**

Target: "mortgage protection self employed". Content: direct answer, why self-employed need it more (no employer benefits), income instability, no medical exam options, coverage types, CTA.

- [ ] **Step 7: Verify build with all blog posts**

```bash
npm run build
```

Expected: All 5 blog posts generate as static pages.

- [ ] **Step 8: Commit**

```bash
git add src/content/blog/
git commit -m "feat: add 5 SEO-optimized blog articles for mortgage protection"
git push
```

---

## Chunk 8: Final Integration & Verification

### Task 26: Full build verification

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Build succeeds with all pages generated statically. Output shows page list with sizes.

- [ ] **Step 2: Run dev server and verify all pages**

```bash
npm run dev
```

Check all pages at `http://localhost:3000`:
- Homepage (all sections render)
- `/quote` (form works, calculation works)
- `/what-is-mortgage-protection-insurance` (content renders)
- `/how-it-works`
- `/about`
- `/faq`
- `/contact`
- `/testimonials`
- `/blog` (index lists all posts)
- `/blog/mortgage-protection-vs-term-life` (MDX renders)
- `/privacy-policy`
- `/terms`
- Contact widget (iMessage + WhatsApp links work)
- Mobile menu (resize browser < 768px)

- [ ] **Step 3: Fix any issues found**

Address any build errors, rendering issues, or broken links.

- [ ] **Step 4: Final commit and push**

```bash
git add -A
git commit -m "feat: complete MTGPlan.com mortgage protection website"
git push
```

---

## Post-Deployment Checklist

After deploying to Coolify:

- [ ] Set environment variables in Coolify (see `docs/coolify-env-config.md`)
- [ ] Point mtgplan.com DNS to Coolify server
- [ ] Verify SSL certificate is active
- [ ] Submit sitemap to Google Search Console (`https://mtgplan.com/sitemap.xml`)
- [ ] Verify site in Google Search Console
- [ ] Test lead form submission and email notification
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test on mobile devices
