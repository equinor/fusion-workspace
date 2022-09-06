import { FusionMediator } from './fusionController';

export type WorkspaceFusionModule = {
	name?: string;
	setup: <TData, TError>(mediator: FusionMediator<TData, TError>) => void;
};
