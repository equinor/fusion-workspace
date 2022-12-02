import { ReactFilterController } from '@equinor/workspace-filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FilterConfig } from '../';
import { WorkspaceTabNames, FusionMediator } from '../../../types';
import { addFilterContext } from './addFilterContext';
import { configureOnDataChange } from './configureOnDataChange';

export function addFilter<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	config: FilterConfig<TData> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext, any>
) {
	if (!config) {
		mediator.dataService.data$.subscribe((val) => {
			if (!val) return;
			mediator.dataService.filteredData = val;
		});
		return;
	}

	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config.filterGroups);

	addFilterContext(viewController, filterController);
	configureOnDataChange(mediator, filterController);
	mediator.onUnMount(filterController.destroy);
}
