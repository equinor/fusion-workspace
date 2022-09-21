import { GardenController } from '@equinor/garden';
import { FusionMediator } from '../../types';

/** Updates data on gardencontroller whenever filtered data on mediator changes */
export function configureDataChange<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	{ dataService }: FusionMediator<TData>
) {
	dataService.onFilterDataChange(gardenController.data.setValue);
}
