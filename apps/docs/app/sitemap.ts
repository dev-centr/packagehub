import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const BASE = 'https://dev-centr.github.io/packagehub';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: `${BASE}/`,
  };

  const docs = source.getPages().map((page) => {
    const path = page.url.endsWith('/') ? page.url : `${page.url}/`;
    return {
      url: `${BASE}${path.startsWith('/') ? path : `/${path}`}`,
    };
  });

  return [home, ...docs];
}
