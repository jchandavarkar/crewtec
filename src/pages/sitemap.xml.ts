import type { APIRoute } from 'astro';
import { cyberServices } from '../data/cyberServices.js';
import { industries } from '../data/industries.js';
import { solutions } from '../data/solutions.js';
import { getCollection } from 'astro:content';

const SITE = 'https://crewtec.in';
const TODAY = new Date().toISOString().split('T')[0];

function url(path: string, priority: string, freq: string): string {
  return `
  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const staticPages = [
    url('/', '1.0', 'weekly'),
    url('/services', '0.9', 'weekly'),
    url('/solutions', '0.8', 'monthly'),
    url('/industries', '0.8', 'monthly'),
    url('/about', '0.7', 'monthly'),
    url('/contact', '0.8', 'monthly'),
    url('/blog', '0.8', 'weekly'),
  ];

  const servicePages = cyberServices.map((s: any) =>
    url(`/services/${s.id}`, '0.9', 'monthly')
  );

  const solutionPages = solutions.map((s: any) =>
    url(`/solutions/${s.id}`, '0.7', 'monthly')
  );

  const industryPages = industries.map((i: any) =>
    url(`/industries/${i.id}`, '0.8', 'monthly')
  );

  const blogPages = posts.map(p =>
    url(`/blog/${p.slug}`, '0.7', 'monthly')
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...servicePages, ...solutionPages, ...industryPages, ...blogPages].join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
