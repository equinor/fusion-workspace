import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `https://astro.build`,
});
