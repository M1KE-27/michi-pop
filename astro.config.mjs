import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://m1ke-27.github.io' : 'https://lightgray-ostrich-908108.hostingersite.com',
  base: isGitHubPages ? '/michi-pop' : '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
  integrations: [react(), tailwind()],
  compressHTML: true,
});
