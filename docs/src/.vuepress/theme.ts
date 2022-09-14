import { hopeTheme, HopeThemeSidebarArrayConfig } from 'vuepress-theme-hope';

export default hopeTheme({
	logo: '/fusion.png',
	repo: 'equinor/fusion-workspace',
	hostname: '#',
	docsBranch: 'main',
	docsDir: 'docs/src',
	darkmode: 'auto',
	themeColor: {
		default: 'red',
	},
	navbar: [
		{
			text: 'Tech-Spec',
			link: '/tech-spec/',
		},
		{
			text: 'Projects',
			link: '/projects/',
		},
		// {
		// 	text: 'Tags',
		// 	link: '/tags/',
		// },
	],
	sidebar: [
		{
			text: 'Tech-Spec',
			link: '/tech-spec/',
			collapsable: true,
			children: [
				{
					text: 'Workspace Core Spec',
					link: '/tech-spec/workspace-core',
				},
			],
		},
		{
			text: 'Projects',
			link: '/projects/',
			collapsable: true,
			children: [
				{
					text: 'Workspace Core',
					link: '/projects/workspace-core/',
					collapsable: false,
					children: [
						{
							text: 'Observable',
							link: '/projects/workspace-core/observable',
						},
						{
							text: 'Mediator',
							link: '/projects/workspace-core/mediator',
						},
						{
							text: 'Services',
							link: '/projects/workspace-core/services',
						},
					],
				},
			],
		},
	] as HopeThemeSidebarArrayConfig,
	plugins: {
		mdEnhance: {
			mermaid: true,
			codetabs: true,
			container: true,
			tasklist: true,
			vuePlayground: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
			},
		},
	},
});
