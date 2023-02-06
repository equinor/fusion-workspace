import { defineConfig } from 'vite';
import resolve from 'vite-plugin-resolve';
import { react } from 'vite-plugin-resolve/presets';
import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	appType: 'custom',

	build: {
		outDir: 'dist',
		lib: {
			entry: './src/index.ts',
			fileName: 'workspace',
			formats: ['es'],
			name: 'workspace',
		},
		rollupOptions: {
			external: (id) => /^react|styled-jsx/.test(id),
		},
	},
	server: {
		port: 3000,
	},
});
