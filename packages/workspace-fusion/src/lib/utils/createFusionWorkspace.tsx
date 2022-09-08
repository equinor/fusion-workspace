import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder/fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	getIdentifier: GetIdentifier<TData>,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(getIdentifier));

	return sortFusionTabs(builder.viewController);
}

export type GetIdentifier<TData> = (item: TData) => string;
