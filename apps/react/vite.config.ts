import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sharedConfig } from '../../vite.config.ts';

export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [react()],
    build: {
      outDir: '../../dist/react',
      emptyOutDir: true,
    },
  }),
);
