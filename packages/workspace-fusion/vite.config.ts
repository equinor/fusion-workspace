import { defineConfig } from 'vite';
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
