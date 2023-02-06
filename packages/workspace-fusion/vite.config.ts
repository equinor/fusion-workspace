import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			//uncomment to debug
			// plugins: [bundleAnalyzer({})],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	server: {
		port: 3000,
	},
});
