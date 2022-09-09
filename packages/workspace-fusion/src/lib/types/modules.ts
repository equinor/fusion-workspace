import { FusionMediator } from './fusionController';

export type FusionWorkspaceModule<TData, TError> = {
	name: string;
	setup: (mediator: FusionMediator<TData, TError>, appKey: string) => void;
	subModules?: FusionWorkspaceModule<TData, TError>[];
};
