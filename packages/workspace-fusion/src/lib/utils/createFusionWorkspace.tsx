import { FusionWorkspaceBuilder } from '../classes';
import { FUSION_FILTER_PROVIDER_NAME } from './filter/addFilterContext';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData> = (
	builder: Omit<FusionWorkspaceBuilder<TData>, 'viewController'>
) => FusionWorkspaceBuilder<TData>;

export function createFusionWorkspace<TData>(config: AppConfig<TData>, builderFunc: UserConfig<TData>) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.getIdentifier, config.appKey));

	const { viewController } = builder;

	/** Check if filter provider is present, otherwise bypass data */
	if (!viewController.providers.find(({ name }) => name === FUSION_FILTER_PROVIDER_NAME)) {
		builder.addMiddleware(({ dataService }) =>
			dataService.data$.subscribe(
				({ newValue }) => newValue && dataService.setFilteredData(newValue, 'Bypass filter')
			)
		);
	}

	return sortFusionTabs(viewController);
}

type AppConfig<TData> = {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
};

export type GetIdentifier<TData> = (item: TData) => string;
