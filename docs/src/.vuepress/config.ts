import { searchPlugin } from '@vuepress/plugin-search';
import { defineUserConfig } from 'vuepress';
import theme from './theme';

import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	title: 'Fusion Workspace',
	description:
		'Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.',
	theme,
	plugins: [
		searchPlugin(),
		registerComponentsPlugin({
			components: {
				ModuleBadge: path.resolve(__dirname, './components/ModuleBadge.vue'),
			},
		}),
	],
});
