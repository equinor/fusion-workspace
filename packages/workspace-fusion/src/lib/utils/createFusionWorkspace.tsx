import { Workspace } from '@equinor/workspace-react';
import { FusionWorkspaceBuilder } from '../classes';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	appKey: string,
	color: string,
	objectIdentifier: keyof TData,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(appKey, color, objectIdentifier));

	return () => <Workspace controller={builder.viewController} />;
}
