import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { GardenConfig, GardenWorkspaceHeader } from '../';
import { GardenIcon } from '../icons/GardenIcon';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../../types';
import { configureBookmarkService } from '../utils/configureBookmarkService';
import { configureClickEvents } from '../utils/configureClickEvents';
import { configureDataChange } from '../utils/configureDataChange';
import { configureGardenHighlightSelection } from '../utils/configureHighlight';
import { GardenWrapper } from './wrapper/GardenWrapper';
import { BaseEvent } from '@equinor/workspace-core';

export function addGarden<
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	gardenConfig: GardenConfig<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
) {
	if (!gardenConfig) return;

	const gardenController = new GardenController<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext>(
		{
			...gardenConfig,
			data: [],
			getIdentifier: mediator.getIdentifier,
			getContext: () => mediator.contextService.getContext(),
		},
		(destroy) => void 0
	);

	configureDataChange(gardenController, mediator);
	configureClickEvents(gardenController, mediator);
	configureGardenHighlightSelection(gardenController, mediator);
	configureBookmarkService(gardenController, mediator);

	viewController.tabController.addTab({
		Component: () => <GardenWrapper controller={gardenController} mediator={mediator} />,
		name: 'garden',
		TabIcon: GardenIcon,
		CustomHeader: () => <GardenWorkspaceHeader controller={gardenController} />,
	});
}
