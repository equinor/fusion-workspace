import { Filter, FilterContextProvider, FilterOptions, ReactFilterController } from '@equinor/filter';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceTabNames } from '../types';

export function addFilter<TData, TError>(
	config: FilterOptions<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	{ dataService, onUnMount }: FusionMediator<TData>
) {
	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config);
	filterController.onFilteredDataChanged(dataService.setFilteredData);
	// eslint-disable-next-line no-param-reassign
	viewController.filter.FilterComponent = () => <FusionFilter controller={filterController} />;
	dataService.data && filterController.setData(dataService.data);
	filterController.init();
	onUnMount(filterController.destroy);
	dataService.onDataChange((data) => {
		filterController.setData(data);
		filterController.init();
	});
}

interface FusionFilterProps<TData> {
	controller: ReactFilterController<TData>;
}

function FusionFilter<TData>({ controller }: FusionFilterProps<TData>) {
	return (
		<FilterContextProvider controller={controller}>
			<Filter />
		</FilterContextProvider>
	);
}
