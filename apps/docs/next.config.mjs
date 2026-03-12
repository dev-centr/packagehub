import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// For GitHub Pages: basePath/assetPrefix only in production build (CI).
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'adapterhub';
const orgOrUser = 'dev-centr';

const isVercel = process.env.VERCEL === '1';
const exportMode = isProd && !isVercel;

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: exportMode ? 'export' : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: exportMode ? `/${repoName}` : '',
  assetPrefix: exportMode ? `https://${orgOrUser}.github.io/${repoName}/` : '',
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
