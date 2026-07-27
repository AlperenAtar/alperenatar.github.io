// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Kök kurulum: https://KULLANICIADI.github.io
  // Kendi alan adını bağlarsan burayı ona çevir (ör. 'https://fotografciadi.com')
  site: 'https://alperenatar.github.io',

  // Tamamen statik çıktı — GitHub Pages sunucu çalıştırmaz.
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});