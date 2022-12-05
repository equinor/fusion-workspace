import { WorkspaceController } from './fusionController';

export type OnWorkspaceReadyEvent<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	api: WorkspaceController<TData, TContext>;
};

export interface WorkspaceOnClick<TData> {
	item: TData;
}
