import { ReactFilterController } from '@equinor/workspace-filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FilterConfig } from '../../integrations/filter';
import { WorkspaceTabNames, FusionMediator } from '../../types';
import { addFilterContext } from './addFilterContext';
import { configureOnDataChange } from './configureOnDataChange';

export function addFilter<TData extends Record<PropertyKey, unknown>, TError>(
	config: FilterConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config.filterGroups);

	addFilterContext(viewController, filterController);
	configureOnDataChange(mediator, filterController);
	mediator.onUnMount(filterController.destroy);
}
