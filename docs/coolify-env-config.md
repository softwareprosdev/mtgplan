# Coolify Environment Variable Configuration

This guide covers how to configure environment variables for MTGPlan.com when deploying via Coolify using Docker Compose.

## Environment Variables Reference

| Variable | Required | Description | How to Get |
|----------|----------|-------------|------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID | Google Analytics → Admin → Data Streams → Measurement ID (format: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification value | Search Console → Settings → Ownership verification → HTML tag |
| `RESEND_API_KEY` | Yes | Resend API key for lead email notifications | Sign up at [resend.com](https://resend.com) → API Keys → Create API Key |
| `NOTIFICATION_EMAIL` | Yes | Email address to receive new lead notifications | Your business email address |
| `NODE_ENV` | Yes | Must be set to `production` | Already set in `docker-compose.yml` — no action needed |

## Step-by-Step Coolify Setup

1. **Create a new resource** in your Coolify dashboard. Select **Docker Compose** as the resource type.

2. **Point to the GitHub repository**: `github.com/softwareprosdev/mtgplan`
   - Connect your GitHub account if not already linked.
   - Select the `main` branch (or your preferred deployment branch).

3. **Add environment variables** in the Coolify dashboard under the **Environment Variables** section. Add each required variable from the table above with its corresponding value.

4. **Set the health check URL** to `/api/health` so Coolify can verify the container is running correctly after each deployment.

5. **Configure the domain**: Set the primary domain to `mtgplan.com`. Add `www.mtgplan.com` as an additional domain if needed and configure a redirect to the apex domain.

6. **Enable SSL**: Coolify will automatically provision and renew a Let's Encrypt TLS certificate for the configured domain. Ensure your DNS A record points to the Coolify server's IP address before deploying.

7. **Deploy**: Click **Deploy** in the Coolify dashboard. Coolify will clone the repository, run `docker compose up --build`, and route traffic through the configured domain once the health check passes.

## Notes

- `NEXT_PUBLIC_*` variables are embedded into the client-side JavaScript bundle at build time. If you change these values you must trigger a full rebuild and redeploy.
- `RESEND_API_KEY` and `NOTIFICATION_EMAIL` are server-side only and safe to rotate without a rebuild — a container restart is sufficient.
- Lead data written to `/app/data` inside the container is persisted via the `lead-data` Docker volume defined in `docker-compose.yml`.
