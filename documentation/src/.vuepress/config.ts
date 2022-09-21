import hope from 'vuepress-theme-hope';

export default hope.config({
	base: '/fusion-workspace/',
	title: 'Fusion Workspace',
	description:
		'Fusion Workspace is a libraries built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.',
	themeConfig: {
		logo: '/fusion.png',
		repo: 'equinor/fusion-workspace',
		docsBranch: 'main',
		editLinks: true,
		docsDir: 'docs/src',
		darkmode: 'auto-switch',
		comment: false,
		nav: [
			{
				text: 'Packages',
				link: '/packages/',
			},
			{
				text: 'Technical Specification',
				link: '/spec/',
			},
			{
				text: 'Tags',
				link: '/tag/',
			},
		],
		sidebar: [
			{
				title: 'Packages',
				path: '/packages/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: 'Workspace Core',
						path: '/packages/workspace-core',
						children: [
							'/packages/workspace-core/mediator',
							'/packages/workspace-core/services',
							'/packages/workspace-core/observable',
						],
					},
				],
			},
			{
				title: 'Technical Specification',
				path: '/spec/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: 'Workspace React',
						children: ['/spec/workspace-react/widgets', '/spec/workspace-react/wrapper'],
					},
					{
						title: 'Workspace Fusion',
						children: ['/spec/workspace-fusion/framework'],
					},
					{
						title: 'Workspace App',
						children: ['/spec/workspace-app/apps'],
					},
					{
						title: 'Data Source',
						children: ['/spec/data-source/controller'],
					},
				],
			},
		],

		mdEnhance: {
			mermaid: true,
			codegroup: true,
			container: true,
			tasklist: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
			},
		},
	},
});
