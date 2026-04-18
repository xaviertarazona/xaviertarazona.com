// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.google(),
    name: 'Inter',
    cssVariable: '--font-inter',
  },
  {
    provider: fontProviders.google(),
    name: 'Playfair Display',
    cssVariable: '--font-playfair',
  }]
});