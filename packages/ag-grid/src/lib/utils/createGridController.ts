import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { BaseController, GetIdentifier, GridController } from '../types/gridController';

/**Creates a new instance of a grid controller */
export function createGridController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>(getIdentifier: GetIdentifier<TData>, destroy: (destroy: VoidFunction) => void): GridController<TData, TContext> {
	const controller: GridController<TData, TContext> = createObservableProxy<BaseController<TData, TContext>>({
		columnDefs: [],
		columnState: [],
		context: undefined,
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
	destroy(() => controller.destroy());
	return controller;
}
