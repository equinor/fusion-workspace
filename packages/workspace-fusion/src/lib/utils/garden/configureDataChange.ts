import { GardenController } from '@equinor/garden';
import { FusionMediator } from '../../types';

export function configureDataChange<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.onFilterDataChange(gardenController.data.setValue);
}
