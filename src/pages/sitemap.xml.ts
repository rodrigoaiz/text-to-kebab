import { defaultCanonical } from '../../src/config/site';

export async function GET() {
  const site = import.meta.env.SITE || '';
  const origin = site || defaultCanonical(site);

  // List of static routes to include in the sitemap. Add more routes as you create pages.
  const routes = [
    '/',
  ];

  const urls = routes.map((route) => `\t<url>\n\t\t<loc>${new URL(route, origin).toString()}</loc>\n\t</url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
