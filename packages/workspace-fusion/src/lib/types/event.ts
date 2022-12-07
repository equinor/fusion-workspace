import { WorkspaceController } from './fusionController';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from './fusionController';

export type OnWorkspaceReadyEvent<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = {
	api: WorkspaceController<TData, TContext, TCustomSidesheetEvents>;
};

//TODO: deprecate
export interface WorkspaceOnClick<TData> {
	item: TData;
}
