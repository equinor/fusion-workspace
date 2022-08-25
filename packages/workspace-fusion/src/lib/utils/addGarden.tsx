import { Garden, GardenConfig, GardenController } from '@equinor/garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../icons/GardenIcon';
import { FusionWorkspaceController, WorkspaceTabNames } from '../types';

export function addGarden<TData, TCustomGroupByKeys, TCustomState, TContext, TError>(
	gardenConfig: GardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	const gardenController = new GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>(gardenConfig);

	configureDataChange(gardenController, mediator);
	configureClickEvents(gardenController, mediator);
	configureGardenHighlightSelection(gardenController, mediator);

	viewController.tabs.push({
		Component: () => <Garden controller={gardenController} />,
		name: 'garden',
		HeaderComponent: GardenIcon,
	});
}

export function configureGardenHighlightSelection<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	mediator.highlightedItem.onchange(gardenController.setHighlightedNode);
}

function configureClickEvents<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	gardenController.clickEvents.onClickItem = (item) => {
		mediator.click({ item: item });
	};
}

function configureDataChange<TData, TError, TCustomGroupByKeys, TCustomState, TContext>(
	gardenController: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>,
	mediator: FusionWorkspaceController<TData, TError>
) {
	mediator.onFilterDataChange(gardenController.data.setValue);
}
