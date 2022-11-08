import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { BaseController, GetIdentifier, GridController } from '../types/gridController';

/**Creates a new instance of a grid controller */
export function createGridController<TData extends Record<PropertyKey, unknown>>(
	getIdentifier: GetIdentifier<TData>
): GridController<TData> {
	const controller: GridController<TData> = createObservableProxy<BaseController<TData>>({
		columnDefs: [],
		columnState: [],
		getIdentifier,
		gridOptions: undefined,
		rowData: [],
		selectedNodes: [],
		destroy: () => {
			Object.keys(controller).forEach((s) => {
				delete controller[s];
			});
		},
	});
	return controller;
}
