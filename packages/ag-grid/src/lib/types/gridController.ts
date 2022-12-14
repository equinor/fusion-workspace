import { ObservableProxy } from '@equinor/workspace-observable-proxy';
import { ColumnState, ColDef, GridOptions } from 'ag-grid-community';

export type GetIdentifier<TData> = (item: TData) => string;

export type BaseController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	getIdentifier: GetIdentifier<TData>;
	columnState: ColumnState[] | undefined;
	context: undefined | TContext;
	selectedNodes: string[];
	rowData: TData[];
	columnDefs: ColDef[];
	gridOptions: GridOptions | undefined;
	destroy: () => void;
};

export type GridController<
	T extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = ObservableProxy<BaseController<T, TContext>>;
