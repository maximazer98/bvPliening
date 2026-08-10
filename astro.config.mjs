import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bv-pliening.de',
  base: process.env.SITE_BASE || '/',
});
