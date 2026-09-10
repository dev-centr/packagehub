import type { MetadataRoute } from 'next';

const BASE = 'https://dev-centr.github.io/packagehub';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
