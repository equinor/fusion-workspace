import { FilterController, FilterOptions } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceTabNames } from '../types';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	{ dataService }: FusionMediator<TData, TError>
) {
	const filterController = new FilterController<TData>();
	filterController.addValueFormatters(config);
	filterController.onFilteredDataChanged(dataService.setFilteredData);
	dataService.data && filterController.setData(dataService.data);
	filterController.init();
	dataService.onDataChange((data) => {
		filterController.setData(data);
		filterController.init();
	});
}
