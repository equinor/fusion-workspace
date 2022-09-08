import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: Omit<FusionWorkspaceBuilder<TData, TError>, 'viewController'>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	getIdentifier: GetIdentifier<TData>,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(getIdentifier));

	const { viewController, addMiddleware } = builder;

	if (!viewController.filter.FilterComponent) {
		addMiddleware(({ dataService }) => {
			dataService.onDataChange(dataService.setFilteredData);
		});
	}

	return sortFusionTabs(viewController);
}

export type GetIdentifier<TData> = (item: TData) => string;
