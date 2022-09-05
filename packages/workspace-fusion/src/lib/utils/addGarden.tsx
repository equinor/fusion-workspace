import { Garden, GardenConfig, GardenController, GardenGroup } from '@equinor/garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../icons/GardenIcon';
import { FusionMediator, WorkspaceTabNames } from '../types';

export function addGarden<TData, TCustomGroupByKeys, TCustomState, TContext, TError>(
	gardenConfig: GardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>,
	objectIdentifier: keyof TData
) {
	const gardenController = new GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>(gardenConfig);

	configureDataChange(gardenController, mediator);
	configureClickEvents(gardenController, mediator, objectIdentifier);
	configureGardenHighlightSelection(gardenController, mediator);

	viewController.tabs.addTab({
		Component: () => <Garden controller={gardenController} />,
		name: 'garden',
		HeaderComponent: GardenIcon,
	});
}

export function configureGardenHighlightSelection<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.selection.onSelectionChanged((val) => {
		gardenController.selectedNodes.setValue(val.map(({ id }) => id));
	});
}

function configureClickEvents<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData, TError>,
	objectIdentifier: keyof TData
) {
	gardenController.clickEvents.onClickItem = (item) => {
		mediator.click({ item: item });
		mediator.selection.setSelection([{ id: item[objectIdentifier as unknown as string] }]);
	};

	gardenController.clickEvents.onClickGroup = (item) => {
		const items = findItems(item);
		mediator.selection.setSelection(items.map((s) => ({ id: s[objectIdentifier] as unknown as string })));
	};
}

function configureDataChange<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.onFilterDataChange(gardenController.data.setValue);
}

function findItems<TData>(item: GardenGroup<TData>): TData[] {
	if (item.items.length > 0) return item.items;
	return item.subGroups.map((s) => findItems(s)).flat();
}
