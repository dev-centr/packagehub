import { create } from 'create-fumadocs-app';

await create({
  outputDir: 'apps/docs',
  template: '+next+fuma-docs-mdx',
  packageManager: 'pnpm',
});
