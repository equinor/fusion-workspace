import { defineConfig } from 'vite';
import { WorkspaceVitePlugin } from './src/plugin';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [WorkspaceVitePlugin()],
	appType: 'custom',
	build: {
		rollupOptions: {
			plugins: [
				injectProcessEnv({
					NODE_ENV: 'production',
				}),
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
