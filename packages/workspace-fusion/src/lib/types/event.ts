import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from './fusionController';

export type OnWorkspaceReadyEvent<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
> = {
	api: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
};

export interface WorkspaceOnClick<TData> {
	item: TData;
}
