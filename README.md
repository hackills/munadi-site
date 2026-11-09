# Munadi website

Live: https://munadi-prayer.vercel.app/

The public landing page for **Munadi**, a lightweight, private prayer-times app
built for Qatar first and now available in other regions, including Pakistan and the Gulf. It presents the app, its features, privacy policy, licenses, and the
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

## Search indexing

The site ships `robots.txt` and an Astro-generated `sitemap-index.xml`, and every
page is marked `index, follow`. To have Google index it:

1. Open [Google Search Console](https://search.google.com/search-console/) and click
   **Add a website** (older guides call this **Add property**).
2. On **Select a property type**, choose **URL prefix** — not **Domain**. A
   Domain property requires DNS verification, which isn't possible on a
   `vercel.app` subdomain. Enter `https://munadi-prayer.vercel.app/` and continue.
3. Choose the **HTML tag** verification method and copy only the `content`
   value from the tag Google shows (not the whole `<meta>` element).

4. Add the token to Vercel and redeploy:
   1. Open the project at [vercel.com/dashboard](https://vercel.com/dashboard)
      and go to **Settings → Environment Variables**.
   2. In the **Add Environment Variable** form, choose **Config** as the type
      (the verification token is public and Config stays readable later). Set
      the key to `GOOGLE_SITE_VERIFICATION`, paste the token as the value,
      select **Production**, then click **Save**.
   3. Confirm the production branch contains the `google-site-verification`
      support from `src/layouts/Base.astro`. If that change is not pushed yet,
      deploy it as well, otherwise the meta tag will not exist even after the
      variable is added.
   4. Open **Deployments**, find the newest production deployment, click its
      **⋯** menu, and choose **Redeploy**. Confirm in the
      **Redeploy to Production** dialog. Environment variable changes only
      apply to new builds.
   5. Wait for the deployment to reach **Ready**. Open
      `https://munadi-prayer.vercel.app/`, view the page source (`Ctrl+U`), and
      search for `google-site-verification`. The tag must be in the homepage
      `<head>` before you click **Verify** in Search Console.

5. Back in Search Console, click **Verify**. If verification fails, wait a few
   minutes, confirm the production deployment is live, and retry.

6. Submit the sitemap:
   1. Open **Indexing → Sitemaps** in the left sidebar.
   2. Under **Add a new sitemap**, enter `sitemap-index.xml` (Search Console
      prepends the property URL) and click **Submit**.
   3. The status can sit on **Pending** for a few hours. It should eventually
      read **Success** and show the discovered URLs.

7. Request indexing for the main pages:
   1. Click the **Inspect any URL in "munadi-prayer.vercel.app"** search bar at
      the top of Search Console.
   2. Enter `https://munadi-prayer.vercel.app/` and press Enter.
   3. When the inspection finishes, click **Request Indexing**.
   4. Repeat for `https://munadi-prayer.vercel.app/ar/`.

   Requests are rate-limited. One request per page is enough; repeating it does
   not speed anything up. Requesting indexing asks Google to crawl sooner; it
   does not guarantee the page will be indexed.

8. After a few days, open **Indexing → Pages** to see which URLs Google indexed
   and why any were excluded. Use **URL Inspection** to check a specific page.

A custom domain is worth adding eventually: `*.vercel.app` URLs are indexable,
but a domain you own carries more trust and makes DNS verification possible.

## Privacy

The site is static and uses no cookies, analytics, or tracking scripts. Vercel
processes standard request logs to serve and protect the site. See `/privacy`.

## License

The website code and original content are proprietary. See [LICENSE](LICENSE)
and [THIRD-PARTY.md](THIRD-PARTY.md).
