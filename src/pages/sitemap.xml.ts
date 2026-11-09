import type { APIRoute } from 'astro';
import { homeFor, locales } from '../i18n/routing';

export const GET: APIRoute = ({ site }) => {
  const urls = locales.flatMap(locale => ['', 'privacidad'].map(page => new URL(homeFor(locale) + page, site).href));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `<url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
