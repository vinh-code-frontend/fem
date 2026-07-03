import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@resource': fileURLToPath(new URL('../../resources', import.meta.url)),
    },
  },
  build: {
    outDir: '../../dist/vue',
    emptyOutDir: true,
  },
});
