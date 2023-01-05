import { BaseEvent } from '@equinor/workspace-core';
import { GardenController, Garden } from '@equinor/workspace-garden';
import { useWorkspaceComponents } from '../../../../hooks/useWorkspaceComponents';
import { NoDataSplashScreen } from '../../../../components/NoDataSplashScreen';
import { FusionMediator } from '../../../../types';
import { Icon } from '@equinor/eds-core-react';
import { settings } from '@equinor/eds-icons';

Icon.add({ settings });

type GardenWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = {
	controller: GardenController<TData, TExtendedGardenFields, TCustomGroupByKeys, TContext>;
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
};

export const GardenWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedGardenFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>({
	controller,
	mediator,
}: GardenWrapperProps<TData, TExtendedGardenFields, TCustomGroupByKeys, TError, TContext, TCustomSidesheetEvents>) => {
	// useWorkspaceComponents('view_settings', () => <Icon name="settings" />);
	return (
		<NoDataSplashScreen mediator={mediator}>
			<Garden controller={controller} />
		</NoDataSplashScreen>
	);
};
