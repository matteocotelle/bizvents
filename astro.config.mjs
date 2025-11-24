// astro.config.mjs
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// --- Retirez cette ligne :
// import tailwindcss from '@tailwindcss/vite'; 

// https://astro.build/config
export default defineConfig({
  base: '/bizvents',
  site: 'https://matteocotelle.github.io/',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});