import { FusionMediator } from './fusionController';

export type FusionWorkspaceModule<TData extends Record<PropertyKey, unknown>> = {
	name: string;
	setup: (mediator: FusionMediator<TData>, appKey: string) => void;
	subModules?: FusionWorkspaceModule<TData>[];
};
