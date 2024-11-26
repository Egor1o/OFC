import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';
export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: 'toc', maxDepth: 3 } ] ],
  },
  //defaults. / does not work
  redirects: {
    '/' : '/english',
    '/events' : '/events/english',
    '/association': '/association/english',
    '/member' : '/member/english'
  }
});
