export const SITE = {
	title: 'Workspace Docs',
	description: 'Fusion workspace documentation.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
	Configuration: [
		{ text: 'Introduction', link: 'introduction' },
		{ text: 'Data', link: 'config/data-options' },
		{ text: 'Grid', link: 'config/grid-options' },
		{ text: 'Garden', link: 'config/garden-options' },
		{ text: 'PowerBi', link: 'config/powerbi-options' },
		{ text: 'Filter', link: 'config/filter-options' },
		{ text: 'Context', link: 'config/context-options' },
	],
	Examples: [
		{ text: 'PowerBi only', link: 'examples/power-bi-only' },
		{ text: 'Simple', link: 'examples/simple' },
		{ text: 'Advanced', link: 'examples/advanced' },
	],
};
