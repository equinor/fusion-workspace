import { GridController } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext>) {
	mediator.dataService.filteredData$.subscribe((data) => {
		if (!data) return;
		gridController.rowData = data;
	});
}
