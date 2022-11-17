import { FusionMediator } from './fusionController';

export type OnWorkspaceReadyEvent<TData extends Record<PropertyKey, unknown>> = {
	api: FusionMediator<TData>;
};
