// astro.config.mjs
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // On supprime base et assetsPrefix car on est sur Vercel (racine du site)
  site: 'https://www.bizvents.com/',
  
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});