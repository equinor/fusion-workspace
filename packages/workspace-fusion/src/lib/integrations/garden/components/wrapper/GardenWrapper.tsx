import { BaseEvent } from '@equinor/workspace-core';
import { GardenController, Garden } from '@equinor/workspace-garden';
import { NoDataSplashScreen } from '../../../../components/NoDataSplashScreen';
import { FusionMediator } from '../../../../types';

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
	return (
		<div id="workspace_garden_wrapper" style={{ height: '100%', width: '100%' }}>
			<NoDataSplashScreen mediator={mediator}>
				<Garden controller={controller} />
			</NoDataSplashScreen>
		</div>
	);
};
