import { FilterOptions, ReactFilterController } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceTabNames, FusionMediator } from '../../types';
import { addFilterContext } from './addFilterContext';
import { configureOnDataChange } from './configureOnDataChange';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	{ dataService, onUnMount }: FusionMediator<TData>
) {
	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config);

	addFilterContext(viewController, filterController);
	configureOnDataChange(dataService, filterController);
	onUnMount(filterController.destroy);
}
