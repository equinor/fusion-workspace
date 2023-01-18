import { GridController } from '@equinor/workspace-ag-grid';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../types';

/**Update data on gridController whenever filtered data on mediator changes */
export function configureDataChange<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridController: GridController<TData, TContext>, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	return () => {
		const sub = mediator.dataService.filteredData$.subscribe((data) => {
			if (!data) return;
			gridController.rowData = data;
		});
		return () => {
			sub.unsubscribe();
		};
	};
}
