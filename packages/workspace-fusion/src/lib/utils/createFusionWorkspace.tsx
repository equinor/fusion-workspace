import { FusionWorkspaceBuilder } from '../classes';
import { FUSION_FILTER_PROVIDER_NAME } from './filter/addFilterContext';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: Omit<FusionWorkspaceBuilder<TData, TError>, 'viewController'>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(config: AppConfig<TData>, builderFunc: UserConfig<TData, TError>) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.getIdentifier, config.appKey));

	const { viewController } = builder;

	/** Check if filter provider is present, otherwise bypass data */
	if (!viewController.providers.find(({ name }) => name === FUSION_FILTER_PROVIDER_NAME)) {
		builder.addMiddleware(({ dataService }) => dataService.onDataChange(dataService.setFilteredData));
	}

	return sortFusionTabs(viewController);
}

interface AppConfig<TData> {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
}

export type GetIdentifier<TData> = (item: TData) => string;
