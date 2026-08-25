import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://m1ke-27.github.io',
  base: '/michi-pop',
  output: 'static',
  build: {
    format: 'directory',
  },
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
  integrations: [react(), tailwind()],
  compressHTML: true,
});
