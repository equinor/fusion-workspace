import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: Omit<FusionWorkspaceBuilder<TData, TError>, 'viewController'>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	objectIdentifier: keyof TData,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(objectIdentifier));

	const { viewController, addMiddleware } = builder;

	if (!viewController.filter.FilterComponent) {
		addMiddleware((s) => {
			s.onDataChange(s.setFilteredData);
		});
	}

	return sortFusionTabs(viewController);
}
