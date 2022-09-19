import { ReactFilterController } from '@equinor/filter';
import { DataService } from '@workspace/workspace-core';

/** Sync data changes between filter controller and dataservice */
export function configureOnDataChange<TData>(
	dataService: DataService<TData>,
	filterController: ReactFilterController<TData>
) {
	filterController.onFilteredDataChanged(dataService.setFilteredData);
	dataService.data && filterController.setData(dataService.data);
	filterController.init();
	dataService.onDataChange((data) => {
		filterController.setData(data);
		filterController.init();
	});
}
