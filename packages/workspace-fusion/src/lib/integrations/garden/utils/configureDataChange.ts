import { BaseEvent } from '@equinor/workspace-core';
import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator } from '../../../types';

/** Updates data on gardencontroller whenever filtered data on mediator changes */
export function configureDataChange<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>,
	{ dataService }: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	dataService.filteredData$.subscribe((newData) => {
		if (newData) {
			gardenController.setData(newData);
		}
	});
}
