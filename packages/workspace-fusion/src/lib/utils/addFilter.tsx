import { FilterContextProvider, FilterOptions, ReactFilterController } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceTabNames } from '../types';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	{ dataService, onUnMount }: FusionMediator<TData, TError>
) {
	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config);
	filterController.onFilteredDataChanged(dataService.setFilteredData);

	viewController.addProvider(({ children }) => (
		<FilterContextProvider controller={filterController}>{children}</FilterContextProvider>
	));
	dataService.data && filterController.setData(dataService.data);
	filterController.init();
	onUnMount(filterController.destroy);
	dataService.onDataChange((data) => {
		filterController.setData(data);
		filterController.init();
	});
}
