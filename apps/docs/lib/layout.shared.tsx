import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// Set to your GitHub repo when published
export const gitConfig = {
  user: 'your-org',
  repo: 'adapterhub',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'AdapterHub',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
