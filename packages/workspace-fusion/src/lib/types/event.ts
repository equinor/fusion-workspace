import { FusionMediator } from './fusionController';

export type OnWorkspaceReadyEvent<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	api: FusionMediator<TData, TContext>;
};

export interface WorkspaceOnClick<TData> {
	item: TData;
}
