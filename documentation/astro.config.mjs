import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: "https://equinor.github.io/",
	base: "fusion-workspace",
	integrations: [
		preact(),
		// Enable React for the Algolia search component.
		react(),
		mdx(),
	],
  	outDir: "../dist",
});
