import { GardenConfig } from '../types';

export type MockInterface = {
	id: string;
	name: string;
};

export const defaultGardenConfig: GardenConfig<MockInterface, any, any, unknown> = {
	data: [],
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
	getDisplayName: (s) => s.name,
	getIdentifier: (s) => s.id,
	clickEvents: {},
	customGroupByKeys: {},
	fieldSettings: {},
};
