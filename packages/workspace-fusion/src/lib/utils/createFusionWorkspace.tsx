import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData> = (
	builder: Omit<FusionWorkspaceBuilder<TData>, 'viewController'>
) => FusionWorkspaceBuilder<TData>;

export function createFusionWorkspace<TData>(config: AppConfig<TData>, builderFunc: UserConfig<TData>) {
	const builder = builderFunc(new FusionWorkspaceBuilder(config.getIdentifier, config.appKey));

	const { viewController, addMiddleware } = builder;

	if (!viewController.filter.FilterComponent) {
		addMiddleware(({ dataService }) => {
			dataService.onDataChange(dataService.setFilteredData);
		});
	}

	return sortFusionTabs(viewController);
}

interface AppConfig<TData> {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
}

export type GetIdentifier<TData> = (item: TData) => string;
