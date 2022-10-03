import { GetIdentifier, GridController } from '../types/gridController';
import { createProxy } from './createProxy';

export function createGridController<TData extends Record<PropertyKey, unknown>>(
	getIdentifier: GetIdentifier<TData>
): GridController<TData> {
	const controller: GridController<TData> = createProxy({
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
