import { FilterOptions, ReactFilterController } from '@equinor/workspace-filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames, FusionMediator } from '../../types';
import { addFilterContext } from './addFilterContext';
import { configureOnDataChange } from './configureOnDataChange';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config);

	addFilterContext(viewController, filterController);
	configureOnDataChange(mediator, filterController);
	mediator.onUnMount(filterController.destroy);
}
