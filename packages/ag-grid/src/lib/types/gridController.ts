import { SubscriberProxy } from '@equinor/observable-proxy';
import { ColumnState, ColDef, GridOptions } from 'ag-grid-community';

export type GetIdentifier<TData> = (item: TData) => string;

type BaseController<TData extends Record<PropertyKey, unknown>> = {
	getIdentifier: GetIdentifier<TData>;
	columnState: ColumnState[] | undefined;
	selectedNodes: string[];
	rowData: TData[];
	columnDefs: ColDef[];
	gridOptions: GridOptions | undefined;
	destroy: () => void;
};

export type GridController<T extends Record<PropertyKey, unknown>> = SubscriberProxy<BaseController<T>>;
