import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	appType: 'custom',
	build: {
		outDir: 'dist',
		lib: {
			entry: './src/index.ts',
			fileName: 'workspace',
			formats: ['iife', 'es'],
			name: 'workspace',
		},
	},
	server: {
		port: 3000,
	},
});
