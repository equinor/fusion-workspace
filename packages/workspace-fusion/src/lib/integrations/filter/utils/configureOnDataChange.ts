import { ReactFilterController } from '@equinor/workspace-filter';
import { FusionMediator } from '../../../types';

/** Sync data changes between filter controller and dataservice */
export function configureOnDataChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(mediator: FusionMediator<TData, TContext>, filterController: ReactFilterController<TData>) {
	filterController.filteredData$.subscribe((data) => {
		mediator.dataService.filteredData = data;
	});

	if (mediator.dataService.data && mediator.dataService.data.length) {
		filterController.data$.next(mediator.dataService.data);
	}

	mediator.dataService.data$.subscribe((data) => {
		if (!data) return;
		filterController.data$.next(data);
	});
}
