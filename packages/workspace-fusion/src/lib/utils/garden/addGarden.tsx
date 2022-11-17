import { Garden, GardenController } from '@equinor/workspace-garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenConfig } from '../../integrations/garden';
import { GardenIcon } from '../../icons/GardenIcon';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../types';
import { configureBookmarkService } from './configureBookmarkService';
import { configureClickEvents } from './configureClickEvents';
import { configureDataChange } from './configureDataChange';
import { configureGardenHighlightSelection } from './configureHighlight';
import { GardenWorkspaceHeader } from './gardenWorkspaceHeader';
import { BehaviorSubject } from 'rxjs';

export function addGarden<
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TCustomState extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>(
	gardenConfig: GardenConfig<TData, TExtendedGardenFields, TCustomGroupByKeys, TCustomState, TContext>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>,
	context: BehaviorSubject<TCustomState>
) {
	const gardenController = new GardenController<
		TData,
		TExtendedGardenFields,
		TCustomGroupByKeys,
		TCustomState,
		TContext
	>(
		{
			...gardenConfig,
			data: [],
			getIdentifier,
			getCustomState: () => context.getValue(),
		},
		(destroy) => mediator.onUnMount(destroy)
	);

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
}
