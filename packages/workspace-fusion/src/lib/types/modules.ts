import { FusionMediator } from './fusionController';

export type FusionWorkspaceModule<TData> = {
	name: string;
	setup: (mediator: FusionMediator<TData>, appKey: string) => void;
	subModules?: FusionWorkspaceModule<TData>[];
};
