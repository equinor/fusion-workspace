import { ReactFilterController } from '@equinor/filter';
import { FusionMediator } from '../../types';

/** Sync data changes between filter controller and dataservice */
export function configureOnDataChange<TData>(
	mediator: FusionMediator<TData>,
	filterController: ReactFilterController<TData>
) {
	filterController.onFilteredDataChanged((newData) => {
		mediator.dataService.filteredData = newData;
	});
	mediator.dataService.data && filterController.setData(mediator.dataService.data);
	filterController.init();
	mediator.dataService.data$.subscribe((data) => {
		filterController.setData(data ?? []);
		filterController.init();
	});
}
