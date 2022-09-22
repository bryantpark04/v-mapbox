import path from 'path';
import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'jsdom-worker',
      './tests/stubs/image-data.ts',
      './tests/stubs/gl.ts',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      'mapbox-gl': 'maplibre-gl',
    },
  },
});
