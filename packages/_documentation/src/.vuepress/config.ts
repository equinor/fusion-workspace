import hope from 'vuepress-theme-hope';

export default hope.config({
	base: '/fusion-workspace/',
	title: 'Fusion Workspace',
	description:
		'Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.',
	themeConfig: {
		logo: '/fusion.png',
		repo: 'equinor/fusion-workspace',
		hostname: '#',
		docsBranch: 'main',
		editLinks: true,
		docsDir: 'vue-press/src',
		darkmode: 'auto-switch',
		comment: false,
		nav: [
			{
				text: 'Tech-Spec',
				link: '/tech-spec/',
			},
			{
				text: 'Projects',
				link: '/projects/',
			},
			{
				text: 'Tags',
				link: '/tag/',
			},
		],
		sidebar: [
			{
				title: 'Tech-Spec',
				path: '/tech-spec/',
				collapsable: false,
				sidebarDepth: 3,
				children: ['tech-spec/workspace-core'],
			},
			{
				title: 'Projects',
				path: '/projects/',
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: 'Workspace Core',
						path: '/projects/workspace-core',
						collapsable: true,
						sidebarDepth: 3,
						children: [
							'projects/workspace-core/observable',
							'projects/workspace-core/mediator',
							'projects/workspace-core/services',
						],
					},
				],
			},
		],

		mdEnhance: {
			enableAll: true,
			mermaid: true,
			codegroup: true,
			container: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
			},
		},
	},
});
