import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../types';

export type Controller = {
	close: VoidFunction;
	invalidate?: VoidFunction;
};

export type SidesheetConfig<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent<string>
> = {
	Sidesheet: (props: SidesheetProps<TData, TContext, TCustomSidesheetEvents>) => JSX.Element;
};

export type SidesheetProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent<string>
> = {
	ev: Parameters<FusionMediator<TData, TContext, TCustomSidesheetEvents>['sidesheetService']['sendEvent']>[0];
	controller: Controller;
};
