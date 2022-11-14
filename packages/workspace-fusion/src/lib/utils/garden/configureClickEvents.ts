import { GardenController, GardenGroup } from '@equinor/workspace-garden';
import { FusionMediator } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';

/** Adds clickevents from mediator on garden controller  */
export function configureClickEvents<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys,
	TCustomState,
	TContext
>(
	gardenController: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
	{ selectionService, clickService }: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>
) {
	gardenController.clickEvents.onClickItem = (item) => {
		clickService.click({ item: item });
		selectionService.selectedNodes = [getIdentifier(item)];
	};

	gardenController.clickEvents.onClickGroup = (group) => {
		const items = findItemsRecursively(group);
		selectionService.selectedNodes = items.map(getIdentifier);
	};
}

/** Finds all items in subgroups or recursively through all subgroups */
function findItemsRecursively<TData extends Record<PropertyKey, unknown>>(item: GardenGroup<TData>): TData[] {
	if (item.items.length > 0) return item.items;
	return item.subGroups.map((group) => findItemsRecursively(group)).flat();
}
