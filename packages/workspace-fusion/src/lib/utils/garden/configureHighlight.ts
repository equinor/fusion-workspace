import { GardenController } from '@equinor/garden';
import { FusionMediator } from '../../types';

/** Configures gardencontroller to highlight nodes when mediator selection changes */
export function configureGardenHighlightSelection<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.onSelectionChanged((val) => {
		gardenController.selectedNodes.setValue(val.map(({ id }) => id));
	});
}
