import { defineConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { sharedConfig } from '../../vite.config.ts';

export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [vue()],
    build: {
      outDir: '../../dist/vue',
      emptyOutDir: true,
    },
  }),
);
