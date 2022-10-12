import { Garden, GardenConfig, GardenController } from '@equinor/garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../../icons/GardenIcon';
import { FusionMediator, WorkspaceTabNames } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';
import { configureBookmarkService } from './configureBookmarkService';
import { configureClickEvents } from './configureClickEvents';
import { configureDataChange } from './configureDataChange';
import { configureGardenHighlightSelection } from './configureHighlight';
import { GardenWorkspaceHeader } from './gardenWorkspaceHeader';

export function addGarden<TData, TCustomGroupByKeys, TCustomState, TContext, TError>(
	gardenConfig: GardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>
) {
	const gardenController = new GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>(gardenConfig);
	gardenConfig.configFunction && gardenConfig.configFunction(gardenController);
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

	mediator.unMount$.subscribe(gardenController.destroy);
}
