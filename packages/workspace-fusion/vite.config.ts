import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import { WorkspaceVitePlugin } from './src/plugin';
import { Plugin } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		EnvironmentPlugin({ NODE_ENV: 'production' }),
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
		}),
	],
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
