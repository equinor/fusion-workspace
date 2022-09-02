import { GardenController, GardenGroup } from '@equinor/garden';
import { FusionMediator } from '../../types';

export function configureClickEvents<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData, TError>,
	objectIdentifier: keyof TData
) {
	gardenController.clickEvents.onClickItem = (item) => {
		mediator.click({ item: item });
		mediator.selection.setSelection([{ id: item[objectIdentifier as unknown as string] }]);
	};

	gardenController.clickEvents.onClickGroup = (item) => {
		const items = findItemsRecursively(item);
		mediator.selection.setSelection(items.map((s) => ({ id: s[objectIdentifier] as unknown as string })));
	};
}

function findItemsRecursively<TData>(item: GardenGroup<TData>): TData[] {
	if (item.items.length > 0) return item.items;
	return item.subGroups.map((s) => findItemsRecursively(s)).flat();
}
