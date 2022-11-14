import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator } from '../../types';

/** Updates data on gardencontroller whenever filtered data on mediator changes */
export function configureDataChange<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
	{ dataService }: FusionMediator<TData>
) {
	dataService.filteredData$.subscribe((newData) => newData && gardenController.data.setValue(newData));
}
