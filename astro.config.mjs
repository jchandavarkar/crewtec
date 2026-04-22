import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://crewtec.in',
  compressHTML: true,
  integrations: [
    tailwind(),
    mdx(),
    // sitemap handled via src/pages/sitemap.xml.ts
  ],
});
