import { MandatoryConfig } from '../types';

export interface MockInterface {
	id: string;
	name: string;
}

export const defaultGardenConfig: MandatoryConfig<MockInterface, unknown> = {
	data: [],
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
	nodeLabelCallback: (s) => s.name,
	objectIdentifier: 'id',
	clickEvents: {},
	customGroupByKeys: {},
	fieldSettings: {},
};
