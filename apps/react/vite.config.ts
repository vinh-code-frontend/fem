import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': '/src',
      '@resource': fileURLToPath(new URL('../../resources', import.meta.url)),
    },
  },
  build: {
    outDir: '../../dist/react',
    emptyOutDir: true,
  },
});
