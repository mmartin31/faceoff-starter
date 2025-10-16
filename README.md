# FaceOff — Starter Monorepo

This repo is a monorepo scaffold for FaceOff (mobile + web + api + ui packages).

Structure
- apps/mobile — Expo React Native app (TypeScript)
- apps/web — Next.js web app (TypeScript)
- services/api — Node + Express API (TypeScript)
- packages/ui — shared basic UI utilities (TypeScript)

How to use (local)
1. Create the repo on GitHub (https://github.com/mmartin31/faceoff-starter) or locally.
2. Clone it:
   git clone https://github.com/mmartin31/faceoff-starter.git
   cd faceoff-starter

3. Install dependencies (pnpm recommended for workspaces):
   npm install -g pnpm
   pnpm install

4. Run the web app:
   cd apps/web
   pnpm install
   pnpm dev
   -> open http://localhost:3000

5. Run the mobile app (Expo):
   cd apps/mobile
   pnpm install
   pnpm start
   -> open in Expo Go or emulator

6. Run the API:
   cd services/api
   pnpm install
   pnpm dev
   -> open http://localhost:4000

Development workflow
- A simple workspace is configured. Add packages to /packages for shared code.
- Add environment variables for API and DB as needed.
- Use Prisma (schema provided) to connect to Postgres.

If you want me to push this scaffold into the repo for you, either:
- Grant push permission (accept the authorization prompt), then reply "Push scaffold" and I will push and open the PR, or
- Run the steps above locally to push.

Next steps I can do:
- Add CI (GitHub Actions) and an initial PR template.
- Flesh out the Challenges screen with mocked data.
- Scaffold DB migrations and Prisma client generation.
