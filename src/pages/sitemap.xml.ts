import type { APIRoute } from 'astro';
import { solutions } from '../data/solutions.js';
import { digitalGrowthServices } from '../data/digitalGrowth.js';
import { appServices } from '../data/appDevelopment.js';
import { industries } from '../data/industries.js';
import { getCollection } from 'astro:content';

const SITE = 'https://crewtec.in';
const TODAY = new Date().toISOString().split('T')[0];

function url(path: string, priority: string, changefreq: string, lastmod = TODAY) {
  return `
  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`.trim();
}

export const GET: APIRoute = async () => {
  const blogPosts = await getCollection('blog');

  const staticUrls = [
    // Core pages — highest priority
    url('/',                  '1.0', 'weekly'),
    url('/about',             '0.8', 'monthly'),
    url('/contact',           '0.9', 'monthly'),
    url('/blog',              '0.7', 'weekly'),

    // Pillar landing pages
    url('/it-solutions',      '0.9', 'monthly'),
    url('/digital-growth',    '0.9', 'monthly'),
    url('/app-development',   '0.9', 'monthly'),
    url('/industries',        '0.8', 'monthly'),

    // IT Solution detail pages
    ...solutions.map(s =>
      url(`/it-solutions/${s.id}`, '0.8', 'monthly')
    ),

    // Digital Growth service pages
    ...digitalGrowthServices.map(s =>
      url(`/digital-growth/${s.id}`, '0.8', 'monthly')
    ),

    // App Development service pages
    ...appServices.map(s =>
      url(`/app-development/${s.id}`, '0.8', 'monthly')
    ),

    // Industry pages
    ...industries.map(i =>
      url(`/industries/${i.id}`, '0.7', 'monthly')
    ),

    // Blog posts
    ...blogPosts.map(p =>
      url(`/blog/${p.slug}`, '0.6', 'monthly', p.data.pubDate.toISOString().split('T')[0])
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
