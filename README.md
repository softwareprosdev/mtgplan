# MTGPlan.com — Mortgage Protection Insurance Website

A high-performance, SEO-optimized marketing website for mortgage protection insurance. Built with Next.js 15 and designed for fast load times, strong search engine visibility, and lead capture via email notification.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15 | React framework with App Router and standalone Docker output |
| Tailwind CSS | 4 | Utility-first styling |
| TypeScript | 5 | Type safety |
| MDX / next-mdx-remote | — | Content authoring for blog and informational pages |
| Resend | — | Transactional email for lead notifications |
| Docker | — | Containerized deployment |

## Prerequisites

- Node.js 20 or higher
- npm (bundled with Node.js)
- Docker and Docker Compose (for containerized deployment)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Docker

Build and run the full production container locally:

```bash
docker compose up --build
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root for local development. For production, set these variables in your deployment platform.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (format: `G-XXXXXXXXXX`) |
| `RESEND_API_KEY` | Yes | Resend API key for lead email notifications |
| `NOTIFICATION_EMAIL` | Yes | Email address to receive new lead notifications |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console HTML tag verification value |

## Project Structure

```
mtgplan/
├── src/
│   └── app/             # Next.js App Router pages and API routes
├── public/              # Static assets (images, icons, fonts)
├── docs/                # Deployment and configuration documentation
│   └── coolify-env-config.md
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose for local and production use
├── next.config.ts       # Next.js configuration (standalone output enabled)
└── package.json
```

## Deployment

This project is designed to be deployed on a [Coolify](https://coolify.io) server via Docker Compose.

See [docs/coolify-env-config.md](docs/coolify-env-config.md) for the full step-by-step Coolify environment variable configuration guide.

## License

Private — all rights reserved.
