import { GardenController } from '@equinor/workspace-garden';
import { FusionMediator } from '../../types';

/** Configures gardencontroller to highlight nodes when mediator selection changes */
export function configureGardenHighlightSelection<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData>
) {
	mediator.selectionService.selectedNodes$.subscribe((val) => {
		gardenController.selectedNodes.setValue(val);
	});
}
