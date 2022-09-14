import hope from 'vuepress-theme-hope';

export default hope.config({
	base: '/',
	title: 'Fusion Workspace',
	description:
		'Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.',
	themeConfig: {
		logo: '/fusion.png',
		repo: 'workspace',
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
				text: 'Tech-Spec',
				link: '/tech-spec/',
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
				path: '/tech-spec/',
				children: ['/tech-spec/workspace-core'],
			},
		],

		mdEnhance: {
			mermaid: true,
			codegroup: true,
			container: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
			},
		},
	},
});
