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
import { NoDataSplashScreen } from '../../components/NoDataSplashScreen';

export function addGarden<
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>(
	gardenConfig: GardenConfig<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>,
	getIdentifier: GetIdentifier<TData>
) {
	if (!gardenConfig) return;

	const gardenController = new GardenController<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext>(
		{
			...gardenConfig,
			data: [],
			getIdentifier,
			getContext: () => mediator.contextService.getContext(),
		},
		(destroy) => mediator.onUnMount(destroy)
	);

	configureDataChange(gardenController, mediator);
	configureClickEvents(gardenController, mediator, getIdentifier);
	configureGardenHighlightSelection(gardenController, mediator);
	configureBookmarkService(gardenController, mediator);

	viewController.tabController.addTab({
		Component: () => <GardenWrapper controller={gardenController} mediator={mediator} />,
		name: 'garden',
		TabIcon: GardenIcon,
		CustomHeader: () => <GardenWorkspaceHeader controller={gardenController} />,
	});
}

type GardenWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	controller: GardenController<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext>;
	mediator: FusionMediator<TData, TContext>;
};

const GardenWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({
	controller,
	mediator,
}: GardenWrapperProps<TData, TExtendedGardenFields, TCustomGroupByKeys, TError, TContext>) => {
	return (
		<NoDataSplashScreen mediator={mediator}>
			<Garden controller={controller} />
		</NoDataSplashScreen>
	);
};
