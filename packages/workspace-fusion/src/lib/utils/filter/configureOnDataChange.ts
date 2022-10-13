import { ReactFilterController } from '@equinor/filter';
import { FusionMediator } from '../../types';

/** Sync data changes between filter controller and dataservice */
export function configureOnDataChange<TData>(
	mediator: FusionMediator<TData>,
	filterController: ReactFilterController<TData>
) {
	filterController.onFilteredDataChanged((newData) => {
		mediator.dataService.setFilteredData(newData, 'filter');
	});

	filterController.init();
	mediator.dataService.data$.subscribe((data) => {
		filterController.setData(data ?? []);
		filterController.init();
	});
}
