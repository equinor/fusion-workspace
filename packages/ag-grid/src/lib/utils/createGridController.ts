import { createObservableProxy } from '@equinor/observable-proxy';
import { GetIdentifier, GridController } from '../types/gridController';

export function createGridController<TData extends Record<PropertyKey, unknown>>(
	getIdentifier: GetIdentifier<TData>
): GridController<TData> {
	const controller: GridController<TData> = createObservableProxy({
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
