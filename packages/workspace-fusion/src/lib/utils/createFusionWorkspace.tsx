import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder/fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	config: MandatoryConfig<TData>,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.objectIdentifier, config.appKey));

	return sortFusionTabs(builder.viewController);
}

type MandatoryConfig<TData> = {
	appKey: string;
	objectIdentifier: keyof TData;
};
