import { defineConfig } from 'vite';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
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
