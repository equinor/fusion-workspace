import { Garden, GardenConfig, GardenController } from '@equinor/garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../../icons/GardenIcon';
import { FusionMediator, WorkspaceTabNames } from '../../types';
import { configureBookmarkService } from './configureBookmarkService';
import { configureClickEvents } from './configureClickEvents';
import { configureDataChange } from './configureDataChange';
import { configureGardenHighlightSelection } from './configureHighlight';

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
	configureBookmarkService(gardenController, mediator);

	viewController.tabs.addTab({
		Component: () => <Garden controller={gardenController} />,
		name: 'garden',
		HeaderComponent: GardenIcon,
	});
}
