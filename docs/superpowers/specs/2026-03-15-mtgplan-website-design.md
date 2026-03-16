# MTGPlan.com — Mortgage Protection Plan Website Design Spec

## Overview

A Next.js 15 static marketing website for **mtgplan.com** focused on generating organic traffic through SEO/GEO/AEO optimization and converting visitors into mortgage protection insurance leads.

- **Domain:** mtgplan.com
- **Stack:** Next.js 15 (App Router), Tailwind CSS 4, MDX, TypeScript
- **Hosting:** Coolify server via Docker Compose
- **Phase 1:** Marketing pages + lead capture (this spec)
- **Phase 2:** CRM integration (future)

---

## Target Audience & Business Model

- **Audience:** US homeowners (national, all 50 states) researching mortgage protection insurance
- **Brand tone:** Warm & approachable — family-focused, reassuring, trustworthy
- **Color scheme:** WCAG AA+ accessible, high contrast (see Design Tokens for specifics)
- **Conversion flow:** Educational Content → Quote Estimator → Lead Capture Form → Agent Follow-up

---

## Site Architecture

```
mtgplan.com/
├── /                                              (Homepage)
├── /quote                                         (Quote Estimator)
├── /what-is-mortgage-protection-insurance          (Pillar Guide)
├── /how-it-works                                  (Step-by-step Process)
├── /about                                         (About / Trust Page)
├── /faq                                           (FAQ — AEO-optimized)
├── /contact                                       (Contact Page)
├── /testimonials                                  (Social Proof)
├── /privacy-policy                                (Privacy Policy — required for lead capture)
├── /terms                                         (Terms of Service)
├── /blog/                                         (Blog Index)
│   ├── /blog/mortgage-protection-vs-term-life
│   ├── /blog/do-i-need-mortgage-protection-insurance
│   ├── /blog/how-much-does-mortgage-protection-cost
│   ├── /blog/what-happens-to-mortgage-when-you-die
│   └── /blog/mortgage-protection-for-self-employed
├── /sitemap.xml                                   (Auto-generated)
└── /robots.txt                                    (Auto-generated)
```

### URL Strategy
- Descriptive, keyword-rich slugs
- Blog articles target long-tail high-intent keywords

### Internal Linking Strategy
- Every page links to the quote estimator
- Blog posts link to the pillar guide and to each other
- Topic cluster structure for search engine authority

---

## SEO / GEO / AEO Strategy

### SEO (Search Engine Optimization)
- Static HTML generation (SSG) — fully rendered content for crawlers
- Next.js Metadata API — unique title, description, Open Graph, Twitter cards per page
- Semantic HTML (`<article>`, `<section>`, `<nav>`, `<main>`)
- Auto-generated `sitemap.xml` and `robots.txt`
- Canonical URLs on every page
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Image optimization via `next/image` (WebP/AVIF, lazy loading, alt text)
- Internal linking mesh across all content

### GEO (Generative Engine Optimization)
- Clear, concise paragraph answers at top of content pages (AI citation-friendly)
- Structured content with descriptive headings that directly answer questions
- Statistics, data points, specific numbers (AI models prefer citable facts)
- Author/source attribution for E-E-A-T signals

### AEO (Answer Engine Optimization)
- FAQ page with `FAQPage` JSON-LD schema for rich results
- Question-and-answer format in blog posts (H2 = question, first paragraph = direct answer)
- Definition boxes and summary callouts matching snippet formats
- Numbered/bulleted lists for "how to" queries

### Schema Markup (JSON-LD)
- `Organization` — business info, logo, contact
- `WebSite` — site-level search action
- `FAQPage` — FAQ page rich results
- `Article` / `BlogPosting` — blog posts with author, date, publisher
- `FinancialProduct` — quote estimator page (mortgage protection as a financial product)
- `BreadcrumbList` — breadcrumb navigation on all pages

### Analytics & Tracking
- Google Analytics 4 (GA4) via `next/script` with `afterInteractive` strategy
- Google Search Console verification meta tag
- Conversion events tracked: quote form submission, lead form submission, contact widget clicks
- `GA_MEASUREMENT_ID` stored in `.env` for easy configuration

---

## Page Designs

### Homepage Layout

1. **Header** — Logo (left), nav links (right): Home, How It Works, FAQ, Blog, About, Contact. Mobile: hamburger menu with slide-out drawer.
2. **Hero Section** — "Protect Your Family. Protect Your Home." + value prop subtext + dual CTA buttons (Get Your Free Quote / Learn How It Works)
3. **Video Section** — QuoteAndApply embedded video widget (script: `cdn.quoteandapply.io/widget.js`, data-strife-key: `QY8KgZDZ5Bv6AfoB`). Loaded via Next.js `<Script>` with `strategy="lazyOnload"`. Container has a fixed aspect ratio (16:9) with a skeleton placeholder (gray background + play icon) to prevent CLS. If the script fails to load, the placeholder remains with a "Video unavailable" message and a fallback CTA link.
4. **Trust Bar** — "Helping Families Protect Their Homes Nationwide" | 5-star rating icons | "Licensed in All 50 States". (No unverifiable numeric claims at launch.)
5. **3-Column Benefits** — Financial Security, Family Protection, Fast & Easy Process (with icons)
6. **How It Works** — 3 steps: Get Quote → Choose Plan → You're Covered
7. **Testimonials Carousel** — Social proof quotes (see Testimonials section below for data source)
8. **FAQ Preview** — Top 3-4 questions in accordion, links to full /faq
9. **Final CTA Banner** — "Don't Wait Until It's Too Late" + Get Your Free Quote button
10. **Footer** — Links, legal (Privacy Policy, Terms), phone, social, © 2026 MTGPlan.com

Primary CTA ("Get Your Free Quote") appears 3 times: hero, mid-page, final banner.

### Responsive Design
- **Mobile-first** approach — all components designed for 320px+ first, then scaled up
- **Header:** Hamburger menu on screens < 768px, slide-out drawer with nav links
- **Homepage sections:** Stack vertically on mobile, 3-column benefits become single-column cards
- **Quote form:** Full-width inputs on mobile, constrained max-width on desktop
- **Testimonials:** Swipeable on mobile, carousel with arrows on desktop
- **Contact widget:** Same position (bottom-right), slightly smaller on mobile, positioned above any fixed mobile browser UI

### Quote Estimator (`/quote`)

**Step 1 — Input (3 fields):**
- Mortgage balance remaining (dollar input, validated: $25,000 – $2,000,000)
- Age (number input, validated: 18 – 75)
- Zip code (5-digit input, validated: 5 digits, used for lead routing in Phase 2 CRM)
- Submit: "See My Estimate →"
- **Validation errors:** Inline red text below each field (e.g., "Please enter an age between 18 and 75")

**Step 2 — Result (inline, no page reload):**
- Shows estimated monthly cost range (e.g., "$24 – $47/mo")
- Client-side calculation using the rate table below

**Quote Calculation Rate Table:**

| Age Range | Rate per $100k mortgage (monthly) |
|-----------|-----------------------------------|
| 18–29     | $8 – $12                          |
| 30–39     | $12 – $18                         |
| 40–49     | $18 – $28                         |
| 50–59     | $28 – $45                         |
| 60–69     | $45 – $72                         |
| 70–75     | $72 – $110                        |

Formula: `(mortgage_balance / 100,000) × rate_range` → display as range.
These are ballpark estimates for engagement purposes only. Disclaimer text: "This is an estimate only. Your actual rate may vary based on health, coverage options, and other factors."

**Step 3 — Lead Capture:**
- Name, Email, Phone fields
- Submit: "Get My Personalized Quote →"
- Trust signal: "Your info is secure. No spam."
- Privacy policy link below form
- **Lead storage:** API route at `src/app/api/leads/route.ts` writes to a JSON file (`data/leads.json`) on the server. This is a simple Phase 1 solution; Phase 2 replaces with CRM API integration.
- **Lead notification:** On each new lead submission, sends an email notification to the owner via Resend (1 API key, free tier: 100 emails/day). Email includes lead name, phone, email, estimated quote range, and mortgage details. Dependency: `resend` npm package. Env var: `RESEND_API_KEY`, `NOTIFICATION_EMAIL`.

### What Is Mortgage Protection Insurance (`/what-is-mortgage-protection-insurance`)

Pillar guide page — the cornerstone SEO content page. Structure:

1. **Summary box** — 2-3 sentence direct answer (AEO-optimized, featured snippet target)
2. **What Is Mortgage Protection Insurance?** — Definition, how it differs from PMI
3. **How Does It Work?** — Premium payments, coverage triggers (death, disability, job loss)
4. **Who Needs It?** — Target demographics, life situations
5. **Types of Coverage** — Level term, decreasing term, return of premium
6. **Pros and Cons** — Balanced comparison table
7. **How Much Does It Cost?** — Cost factors, link to quote estimator
8. **How to Get Covered** — Step-by-step, CTA to quote estimator
9. **Related Articles** — Links to all blog posts (internal linking)

### How It Works (`/how-it-works`)

1. **Hero** — "Getting Protected Is Simple" + subtext
2. **Step 1: Get Your Free Quote** — Description + screenshot/illustration of the estimator. CTA: "Start Your Quote"
3. **Step 2: Choose Your Plan** — Explanation of coverage options, what to consider
4. **Step 3: You're Covered** — What happens after approval, when coverage starts
5. **FAQ mini-section** — 2-3 common questions about the process
6. **CTA Banner** — "Ready to Get Started?" + quote button

### About Page (`/about`)

1. **Company mission statement** — Why MTGPlan exists, commitment to families
2. **Our approach** — How we help homeowners find the right protection
3. **Trust signals** — Licensed, regulated, carrier partnerships
4. **Values section** — Transparency, simplicity, family-first (3 cards with icons)
5. **CTA** — "Let Us Help Protect Your Family" + quote button

### Contact Page (`/contact`)

1. **Phone number** — 407-486-4555, click-to-call link (`tel:4074864555`)
2. **Contact form** — Name, Email, Phone, Message fields. Submissions sent to the same `api/leads/route.ts` endpoint with a `type: "contact"` flag
3. **WhatsApp link** — Direct chat link
4. **iMessage link** — SMS link
5. **Business hours** — (to be provided, or "We respond within 24 hours")
6. **Privacy note** — Link to privacy policy

### Testimonials

- **Data source:** Hardcoded array in `src/lib/testimonials.ts` — an array of objects with `name`, `location` (state), `quote`, and `rating` fields
- **Content:** Written testimonials reflecting common mortgage protection scenarios (family protection after loss, peace of mind, easy process)
- Displayed on both the homepage carousel and the dedicated `/testimonials` page
- Disclaimer: "Names have been changed for privacy. Results may vary."

### Privacy Policy (`/privacy-policy`)

- Standard privacy policy covering: data collected (name, email, phone, mortgage info), how it's used (lead follow-up), data storage, third-party sharing, user rights, contact info for privacy questions
- Required for legal compliance with lead capture forms

### Terms of Service (`/terms`)

- Standard terms covering: service description (informational/lead generation, not insurance advice), disclaimers, limitation of liability, governing law

### Floating Contact Widget (all pages)

- Bottom-right corner, always visible
- Circular chat bubble icon with subtle pulse animation on first visit
- On click/tap expands to show two options:
  - **iMessage** — `sms:4074864555`
  - **WhatsApp** — `https://wa.me/14074864555`
- Collapses back when dismissed
- Mobile-responsive, doesn't block content or CTAs
- Phone: 407-486-4555

---

## Blog System

### Content Pipeline
- MDX files in `src/content/blog/` with frontmatter (title, description, date, keywords, image, author)
- Blog posts are loaded using `fs.readdir` + `fs.readFile` at build time (not `@next/mdx` page-level MDX)
- Use `gray-matter` to parse frontmatter, then `next-mdx-remote` to serialize and render MDX content
- `generateStaticParams()` in `[slug]/page.tsx` enumerates all `.mdx` files to generate static paths
- Auto-generates `BlogPosting` JSON-LD schema per post
- Table of contents generated from headings
- Related posts section at bottom (internal linking)
- Reading time estimate displayed

### Frontmatter Schema
```yaml
---
title: "Article Title"
description: "Meta description for SEO"
date: "2026-03-15"
author: "MTGPlan Team"
keywords: ["keyword1", "keyword2"]
image: "/images/blog/article-slug.jpg"
---
```

### Initial Articles (5)

| Article | Target Keyword | Est. Monthly Searches |
|---|---|---|
| Mortgage Protection vs Term Life Insurance | mortgage protection vs term life | ~1,600 |
| Do I Need Mortgage Protection Insurance? | do i need mortgage protection insurance | ~2,400 |
| How Much Does Mortgage Protection Insurance Cost? | mortgage protection insurance cost | ~1,900 |
| What Happens to Your Mortgage When You Die? | what happens to mortgage when you die | ~3,200 |
| Mortgage Protection Insurance for the Self-Employed | mortgage protection self employed | ~800 |

---

## Project Structure

```
mtgplan/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── quote/page.tsx
│   │   ├── what-is-mortgage-protection-insurance/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── api/
│   │   │   ├── health/route.ts
│   │   │   └── leads/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ContactWidget.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── VideoSection.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── quote/
│   │   │   └── QuoteForm.tsx
│   │   └── seo/
│   │       ├── JsonLd.tsx
│   │       ├── Breadcrumbs.tsx
│   │       └── Analytics.tsx
│   ├── content/
│   │   └── blog/ (5 MDX files)
│   ├── lib/
│   │   ├── metadata.ts
│   │   ├── schema.ts
│   │   ├── quote.ts
│   │   ├── blog.ts          # Blog content loading utilities (readdir, gray-matter, etc.)
│   │   └── testimonials.ts  # Hardcoded testimonials data
│   ├── data/
│   │   └── leads.json       # Lead storage (Phase 1, replaced by CRM in Phase 2)
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── logo.svg
│   └── favicon.ico
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

---

## Tech Stack & Dependencies

- `next` 15 — framework
- `tailwindcss` 4 — styling
- `next-mdx-remote` — MDX rendering for blog posts (content-collection pattern)
- `gray-matter` — frontmatter parsing for MDX files
- `sharp` — image optimization in Docker
- `resend` — email notifications for new leads
- `typescript` — type safety
- No external UI library (custom components for minimal bundle size)

---

## Deployment

### Dockerfile (multi-stage)
```
Stage 1 (deps):    node:20-alpine — install dependencies
Stage 2 (builder): node:20-alpine — build app
Stage 3 (runner):  node:20-alpine — production standalone output
```

### docker-compose.yml
```yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    volumes:
      - lead-data:/app/data  # Persist lead data across container restarts
volumes:
  lead-data:
```

### Next.js Config
- `output: "standalone"` for minimal Docker image (~100MB)
- Health check endpoint at `/api/health` for Coolify monitoring
- `.env.example` for GA4 measurement ID, Resend API key, notification email, and future CRM API keys

---

## Design Tokens

### Colors (Tailwind CSS 4 custom theme)
```css
/* Warm trust palette — WCAG AA+ compliant */
--color-primary: #1e40af;        /* Trust blue — headings, nav, links */
--color-primary-light: #3b82f6;  /* Lighter blue — hover states */
--color-primary-dark: #1e3a8a;   /* Dark blue — footer, emphasis */
--color-accent: #f59e0b;         /* Warm amber — CTAs, buttons, highlights */
--color-accent-hover: #d97706;   /* Darker amber — button hover */
--color-neutral-50: #fafaf9;     /* Off-white — page background */
--color-neutral-100: #f5f5f4;    /* Light gray — section backgrounds */
--color-neutral-700: #44403c;    /* Dark gray — body text */
--color-neutral-900: #1c1917;    /* Near-black — headings */
--color-success: #16a34a;        /* Green — success states, checkmarks */
--color-error: #dc2626;          /* Red — form validation errors */
```

### Typography
- **Font stack:** `Inter, system-ui, -apple-system, sans-serif` (Inter loaded via `next/font/google` for performance)
- **Headings:** Bold, `neutral-900`
- **Body:** Regular, `neutral-700`, 16px base
- **CTAs:** Semi-bold, uppercase or sentence case depending on context

### Logo
- Custom SVG logo — shield/home icon combined with "MTGPlan" wordmark
- Conveys protection, home, trust
- Works on both light and dark backgrounds

### Imagery
- Stock photos of families, homes — warm and reassuring
- Consistent warm color grading across all images
- All images optimized via `next/image` with descriptive alt text

---

## Future Considerations (Phase 2)

- CRM integration via API routes (replace `leads.json` file storage)
- Upgrade lead notifications (SMS via Twilio, push notifications)
- A/B testing on CTAs and quote form
- Analytics dashboard
- State-specific landing pages for expanded SEO
- Zip code → regional pricing/agent routing
