import type { APIRoute } from 'astro';
import { getStore } from '@netlify/blobs';

// Persistent, cross-device invoice numbering counter for erp.html — backed by
// Netlify Blobs (no external account needed). One counter per doc-type prefix + FY,
// e.g. key "INV:2026-27".
//
// NOTE — intentionally unauthenticated: erp.html itself has no login (unlike
// Techedge's qbuilder.html, which gates both the page and this same endpoint
// behind QBUILDER_USER/PASS Basic Auth — see techedgewebsite's equivalent
// src/pages/api/invoice-seq.ts and netlify/edge-functions/qbuilder-auth.js for
// the pattern to copy here if erp.html ever gets a login).

export const prerender = false;

function badRequest(msg: string): Response {
  return new Response(msg, { status: 400 });
}

function json(body: unknown): Response {
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });
}

function keyFor(prefix: string, fy: string): string {
  return prefix + ':' + fy;
}

export const GET: APIRoute = async ({ url }) => {
  const prefix = url.searchParams.get('prefix');
  const fy = url.searchParams.get('fy');
  if (!prefix || !fy) return badRequest('prefix and fy query params are required');
  const store = getStore('invoice-sequences');
  const current = await store.get(keyFor(prefix, fy), { type: 'json' }) as { n: number } | null;
  return json({ number: current?.n || 0 });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const prefix = body?.prefix;
  const fy = body?.fy;
  if (!prefix || !fy) return badRequest('prefix and fy are required');
  const store = getStore('invoice-sequences');
  const key = keyFor(prefix, fy);
  const current = await store.get(key, { type: 'json' }) as { n: number } | null;
  const next = (current?.n || 0) + 1;
  await store.setJSON(key, { n: next });
  return json({ number: next });
};

export const PUT: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const prefix = body?.prefix;
  const fy = body?.fy;
  const value = body?.value;
  if (!prefix || !fy || typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    return badRequest('prefix, fy, and a non-negative numeric value are required');
  }
  const store = getStore('invoice-sequences');
  await store.setJSON(keyFor(prefix, fy), { n: value });
  return json({ number: value });
};
