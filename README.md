This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is configured for automated deployment to the **"do app"** Vercel project via GitHub Actions.

### CI/CD Workflow

The `.github/workflows/deploy.yml` workflow runs on every push and pull request to `main`:

| Trigger | Action |
|---|---|
| Push to `main` | Lint → Build → **Deploy to Production** |
| Pull Request to `main` | Lint → Build → **Deploy Preview** (URL posted as PR comment) |

### One-time Setup: Link Vercel Project

Before the workflow can deploy, add the following **GitHub repository secrets** (Settings → Secrets and variables → Actions):

| Secret name | How to get it |
|---|---|
| `VERCEL_TOKEN` | Vercel dashboard → Account Settings → Tokens → Create |
| `VERCEL_ORG_ID` | Run `vercel link` locally, then copy `orgId` from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Run `vercel link` locally, then copy `projectId` from `.vercel/project.json` |

#### Linking the project locally

```bash
npm install --global vercel
vercel link        # follow prompts; select the existing "do app" project (do NOT create a new one)
cat .vercel/project.json   # copy orgId and projectId for the secrets above
```

### Rollback

To roll back a production deployment, go to the Vercel dashboard → **Deployments**, find the previous deployment, and click **Promote to Production**.

### Manual one-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/divsandviews/Demo-App)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
