import { GridController } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData>) {
	mediator.dataService.filteredData$.subscribe((data) => {
		if (!data) return;
		gridController.rowData = data;
	});
}
