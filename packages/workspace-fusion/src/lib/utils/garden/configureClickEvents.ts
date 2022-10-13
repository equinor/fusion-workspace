import { GardenController, GardenGroup } from '@equinor/garden';
import { FusionMediator } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';

/** Adds clickevents from mediator on garden controller  */
export function configureClickEvents<TData, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
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
function findItemsRecursively<TData>(item: GardenGroup<TData>): TData[] {
	if (item.items.length > 0) return item.items;
	return item.subGroups.map((s) => findItemsRecursively(s)).flat();
}
