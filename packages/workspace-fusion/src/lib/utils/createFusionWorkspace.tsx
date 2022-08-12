import { Workspace } from '@equinor/workspace-react';
import { FusionWorkspaceBuilder } from '../classes';
import { FusionWorkspaceController } from '../types';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceController<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	appKey: string,
	color: string,
	builderFunc: UserConfig<TData, TError>
) {
	const fusionWorkspace = builderFunc(new FusionWorkspaceBuilder(appKey, color));
	return () => <Workspace controller={fusionWorkspace.controllers.view} />;
}
