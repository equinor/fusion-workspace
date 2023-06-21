import { defineConfig } from 'vite';
import { Plugin } from 'vite-plugin-cdn-import';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
  appType: 'custom',
  build: {
    rollupOptions: {
      plugins: [
        injectProcessEnv({
          NODE_ENV: 'production',
        }) as any,
      ],
    },
    outDir: 'dist',
    lib: {
      entry: './src/index.tsx',
      fileName: 'workspace',
      formats: ['es'],
      name: 'workspace',
    },
  },
});
