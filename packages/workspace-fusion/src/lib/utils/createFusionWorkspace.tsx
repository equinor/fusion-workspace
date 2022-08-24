import { Workspace } from '@equinor/workspace-react';
import { FusionWorkspaceBuilder } from '../classes';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	appKey: string,
	color: string,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder<TData, TError>(appKey, color));

	return () => <Workspace controller={builder.viewController} />;
}
