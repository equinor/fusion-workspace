import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateTime } from 'luxon';
import React from 'react';

import { ReactGarden, ReactGardenProps } from '../src';
import { User, USERS } from './gardenData';

// Button.stories.ts|tsx
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Garden',
	component: ReactGarden,
} as ComponentMeta<ReactGardenProps<User>>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<ReactGardenProps<User>> = (args) => <ReactGarden {...args} />;
export const Primary = Template.bind({});

Primary.args = {
	data: USERS,
	fieldSettings: {
		userId: { label: 'ID' },
		username: { key: 'Username' },
		email: { key: 'Email' },
		birthMonth: { key: 'Birthday', getKey: (s) => DateTime.fromJSDate(s.birthdate).monthLong },
	},
	initialGrouping: { horizontalGroupingAcccessor: 'birthMonth', verticalGroupingAccessor: [] },
	nodeLabelCallback: (s) => s.username,
} as ReactGardenProps<User>;

export const Secondary = Template.bind({});
Secondary.args = {
	data: [],
	fieldSettings: {},
	initialGrouping: { horizontalGroupingAcccessor: '', verticalGroupingAccessor: [] },
	nodeLabelCallback: (s) => '',
} as ReactGardenProps<User>;
