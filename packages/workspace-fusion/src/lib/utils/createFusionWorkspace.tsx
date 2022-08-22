import { Workspace, WorkspaceViewController } from '@equinor/workspace-react';
import { FusionWorkspaceBuilder } from '../classes';
import { WorkspaceTabNames } from '../types';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => WorkspaceViewController<WorkspaceTabNames, TError>;

export function createFusionWorkspace<TData, TError>(
	appKey: string,
	color: string,
	builderFunc: UserConfig<TData, TError>
) {
	const viewController = builderFunc(new FusionWorkspaceBuilder(appKey, color));
	return () => <Workspace controller={viewController} />;
}
