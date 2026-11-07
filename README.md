# Munadi website

Live: https://munadi-prayer.vercel.app/

The public landing page for **Munadi**, a lightweight, private prayer-times app
for Qatar. It presents the app, its features, privacy policy, licenses, and the
latest signed APK release.

## Stack

- [Astro](https://astro.build) static site
- Local DM Sans and Noto Sans Arabic fonts
- No client framework, cookies, analytics, or tracking scripts

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

## Release data

`src/lib/release.ts` reads the latest public release from
`hackills/munadi-apks` at build time and displays its version, size, download
link, and SHA-256 digest.

The same file contains a fallback release. Update it after a release so the site
still has a working download if GitHub's API is unavailable during a build.

## Structure

```text
public/              fonts, icons, screenshots, license texts, OG image
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
