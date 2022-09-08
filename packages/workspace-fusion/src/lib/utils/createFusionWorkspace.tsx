import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder/fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(config: AppConfig<TData>, builderFunc: UserConfig<TData, TError>) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.getIdentifier, config.appKey));

	return sortFusionTabs(builder.viewController);
}

interface AppConfig<TData> {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
}

export type GetIdentifier<TData> = (item: TData) => string;
