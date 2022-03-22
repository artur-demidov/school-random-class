import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        name: 'Анкета первоклассника',
        short_name: 'Анкета первоклассника',
        theme_color: '#4F46E5',
        display: 'standalone',
        lang: 'ru',
        icons: [
          {
            src: 'icons-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
