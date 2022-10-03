import { ColumnState, ColDef, GridOptions } from 'ag-grid-community';
import { SubscriberProxy } from '../utils/createProxy';

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
