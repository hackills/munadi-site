# Munadi website

Live: https://munadi-prayer.vercel.app/

The public landing page for **Munadi**, a lightweight, private prayer-times app
for Qatar. It presents the app, its features, privacy policy, licenses, and the
latest signed APK release.

## Stack

- [Astro](https://astro.build) static site
- Local DM Sans and Noto Sans Arabic fonts
- No client framework, cookies, analytics, or tracking scripts
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Build the production output:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

No custom domain is required. Vercel assigns a `*.vercel.app` URL when the
project is created; it is not a domain you buy separately.

1. Sign in to [Vercel](https://vercel.com) with the GitHub account that owns
   `hackills/munadi-site`. Use one Vercel account; a separate GitHub identity is
   not needed.
2. Install the Vercel GitHub App and grant it access **only** to
   `hackills/munadi-site`. Do not grant access to the private Android source
   repository.
3. In Vercel, choose **Add New → Project** and import `hackills/munadi-site`.
4. Keep the detected **Astro** preset. Build command: `npm run build`; output
   directory: `dist`.
5. Choose a project name. Vercel will show the assigned URL after creation; do
   not assume a particular name is available. Canonical links, the sitemap, and
   social metadata read `VERCEL_PROJECT_PRODUCTION_URL` at build time, so they
   follow the URL Vercel assigns.
6. Deploy. No environment variables are required.

Pushes to `main` deploy to production. Pull requests get preview URLs.

### Optional environment variables

- `GITHUB_TOKEN` — avoids GitHub API rate limits when the build reads the latest
  release. The site falls back to the pinned release data if the API is
  unavailable.
- `SITE_URL` — only needed if a custom domain is added later.

## Release data

`src/lib/release.ts` reads the latest public release from
`hackills/munadi-apks` at build time and displays its version, size, download
link, and SHA-256 digest.

The same file contains a fallback release. Update it after a release so the site
still has a working download if GitHub's API is unavailable during a build.

## Structure

```text
public/              fonts, screenshots, license texts, OG image
src/components/      header, footer, phone frame, icons, landing sections
src/data/content.ts  English and Arabic copy
src/lib/release.ts   latest GitHub release and fallback
src/pages/           /, /ar/, /privacy, /licenses, 404
src/styles/          global design system
vercel.json          security headers and caching
```

## Privacy

The site is static and uses no cookies, analytics, or tracking scripts. Vercel
processes standard request logs to serve and protect the site. See `/privacy`.

## License

The website code and original content are proprietary. See [LICENSE](LICENSE)
and [THIRD-PARTY.md](THIRD-PARTY.md).
