import { defineConfig } from 'vite';

import test from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	preview: { port: 3000 },
	server: {
		port: 3000,
	},
	plugins: [test()],
	resolve: {
		alias: {
			'@equinor/garden': path.resolve(__dirname, '../garden/src/index.ts'),
			'@equinor/sidesheet': path.resolve(__dirname, '../sidesheet/src/index.ts'),
			'@equinor/status-bar': path.resolve(__dirname, '../status-bar/src/index.ts'),
			'@equinor/workspace-fusion': path.resolve(__dirname, '../workspace-fusion/src/index.ts'),
			'@equinor/workspace-fusion-modules': path.resolve(__dirname, '../workspace-fusion-modules/src/index.ts'),
			'@equinor/workspace-react': path.resolve(__dirname, '../workspace-react/src/index.ts'),
			'@workspace/data-source': path.resolve(__dirname, '../data-source/src/index.ts'),
			'@workspace/grid': path.resolve(__dirname, '../ag-grid/src/index.ts'),
			'@workspace/power-bi': path.resolve(__dirname, '../power-bi/src/index.ts'),
			'@workspace/workspace-core': path.resolve(__dirname, '../workspace-core/src/index.ts'),
			'@equinor/filter': path.resolve(__dirname, '../filter/src/index.ts'),
			'@equinor/powerbi': path.resolve(__dirname, '../power-bi/src/index.ts'),
		},
	},
});