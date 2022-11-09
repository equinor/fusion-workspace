import { PreConfig, UserConfig } from 'lib/types';
import { FusionWorkspaceBuilder } from '../classes';
import { FUSION_FILTER_PROVIDER_NAME } from './filter/addFilterContext';
import { sortFusionTabs } from './fusionTabOrder';

export function createFusionWorkspace<TData extends Record<PropertyKey, unknown>>(
	config: PreConfig<TData>,
	builderFunc: UserConfig<TData>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.getIdentifier, config.appKey));

	const { viewController } = builder;

	/** Check if filter provider is present, otherwise bypass data */
	if (!viewController.providers.find(({ name }) => name === FUSION_FILTER_PROVIDER_NAME)) {
		builder.addMiddleware(({ dataService }) => {
			dataService.data$.subscribe((val) => {
				if (!val) return;
				dataService.filteredData = val;
			});
		});
	}

	return sortFusionTabs(viewController);
}
