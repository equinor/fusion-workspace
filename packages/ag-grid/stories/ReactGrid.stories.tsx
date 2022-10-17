import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ReactGrid } from '../src';
import { User, USERS } from './gridData';

import { DateTime } from 'luxon';

// Button.stories.ts|tsx
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Grid',
	component: ReactGrid,
} as ComponentMeta<typeof ReactGrid>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReactGrid> = (args) => <ReactGrid {...args} />;
export const Primary = Template.bind({});

Primary.args = {
	height: 600,
	rowData: USERS,
	colDefs: [
		{ field: 'userId' },
		{ field: 'username' },
		{ field: 'email' },
		{
			field: 'avatar',
			cellRenderer: (props) => <img style={{ borderRadius: '50%', height: '35px' }} src={props.value}></img>,
		},
		{
			field: 'birthdate',
			valueGetter: (props) => DateTime.fromJSDate((props.data as User).birthdate).toRelative(),
		},
	],
} as Parameters<typeof ReactGrid>[0];

export const Secondary = Template.bind({});
Secondary.args = {
	height: 600,
	rowData: USERS,
	colDefs: [{ field: 'userId' }],
	gridOptions: { defaultColDef: { sortable: true, filter: 'search' }, pagination: true, paginationPageSize: 100 },
} as Parameters<typeof ReactGrid>[0];
