import { defineConfig } from 'vite';
import { Plugin } from 'vite-plugin-cdn-import';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Plugin({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: `https://unpkg.com/react@18.2.0/umd/react.development.js`,
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: `https://unpkg.com/react-dom@18/umd/react-dom.development.js`,
        },
      ],
    }) as any,
  ],
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
