import { GardenConfig } from '../types';

export interface MockInterface {
	id: string;
	name: string;
}

export const defaultGardenConfig: GardenConfig<MockInterface, any, any, unknown> = {
	data: [],
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
	nodeLabelCallback: (s) => s.name,
	objectIdentifier: 'id',
	clickEvents: {},
	customGroupByKeys: {},
	fieldSettings: {},
};
