import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator } from '../../types';

/** Updates data on gardencontroller whenever filtered data on mediator changes */
export function configureDataChange<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	{ dataService }: FusionMediator<TData>
) {
	dataService.filteredData$.subscribe((newData) => newData && gardenController.data.setValue(newData));
}
