import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vercel exposes the production URL at build time. This keeps canonical links
// and the sitemap correct without assuming a `*.vercel.app` name. SITE_URL can
// override it later if a custom domain is added.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321');

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
