import { defineConfig } from 'vite';
import resolve from 'vite-plugin-resolve';
import { react } from 'vite-plugin-resolve/presets';
import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [EnvironmentPlugin({ NODE_ENV: 'production' })],
	appType: 'custom',
	build: {
		outDir: 'dist',
		lib: {
			entry: './src/index.tsx',
			fileName: 'workspace',
			formats: ['es'],
			name: 'workspace',
		},
	},
	server: {
		port: 3000,
	},
});
