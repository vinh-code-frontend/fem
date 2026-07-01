import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export const sharedConfig = defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
