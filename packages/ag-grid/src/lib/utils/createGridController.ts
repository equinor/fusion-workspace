import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { BaseController, GetIdentifier, GridController } from '../types/gridController';
import { setGridStyle } from './setGridStyle';

/**Creates a new instance of a grid controller */
export function createGridController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(getIdentifier: GetIdentifier<TData>): GridController<TData, TContext> {
	const removeStyle = setGridStyle();

	const controller: GridController<TData, TContext> = createObservableProxy<BaseController<TData, TContext>>({
		columnDefs: [],
		columnState: [],
		context: undefined,
		getIdentifier,
		gridOptions: undefined,
		rowData: [],
		selectedNodes: [],
		destroy: () => {
			removeStyle();
			Object.keys(controller).forEach((s) => {
				delete controller[s];
			});
		},
	});
	return controller;
}
