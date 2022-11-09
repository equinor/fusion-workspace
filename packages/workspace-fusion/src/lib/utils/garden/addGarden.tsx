import { Garden, GardenController } from '@equinor/workspace-garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../../icons/GardenIcon';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../types';
import { configureBookmarkService } from './configureBookmarkService';
import { configureClickEvents } from './configureClickEvents';
import { configureDataChange } from './configureDataChange';
import { configureGardenHighlightSelection } from './configureHighlight';
import { GardenWorkspaceHeader } from './gardenWorkspaceHeader';
import { GardenConfig } from '../../types';

export function addGarden<
	TData extends Record<PropertyKey, unknown>,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TError extends Record<PropertyKey, unknown>
>(
	gardenConfig: GardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>
) {
	const gardenController = new GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>({
		...gardenConfig,
		data: [],
		getIdentifier,
	});
	configureDataChange(gardenController, mediator);
	configureClickEvents(gardenController, mediator, getIdentifier);
	configureGardenHighlightSelection(gardenController, mediator);
	configureBookmarkService(gardenController, mediator);

	viewController.tabController.addTab({
		Component: () => <Garden controller={gardenController} />,
		name: 'garden',
		TabIcon: GardenIcon,
		CustomHeader: () => <GardenWorkspaceHeader controller={gardenController} />,
	});

	mediator.onUnMount(gardenController.destroy);
}
