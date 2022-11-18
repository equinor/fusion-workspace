import { ReactFilterController } from '@equinor/workspace-filter';
import { FusionMediator } from '../../types';

/** Sync data changes between filter controller and dataservice */
export function configureOnDataChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(mediator: FusionMediator<TData, TContext>, filterController: ReactFilterController<TData>) {
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
