import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import { WorkspaceVitePlugin } from './src/plugin';
import { Plugin } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [EnvironmentPlugin({ NODE_ENV: 'production' }), WorkspaceVitePlugin()],
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
});
