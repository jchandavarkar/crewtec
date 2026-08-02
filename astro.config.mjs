import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://crewtec.in',
  compressHTML: true,
  output: 'hybrid', // static by default; /src/pages/api/* opts into SSR via `export const prerender = false`
  adapter: netlify(),
  integrations: [
    tailwind(),
    mdx(),
    // sitemap handled via src/pages/sitemap.xml.ts
  ],
});
