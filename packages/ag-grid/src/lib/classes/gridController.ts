import { ColDef, ColumnState, GridOptions } from 'ag-grid-community';
import { DecoratedProxy, proxyDecorator } from '../utils/proxyDecorator';

export type GetIdentifier<TData> = (item: TData) => string;

export function createGridController<T extends object>(getIdentifier: GetIdentifier<T>): ProxyGrid<T> {
	return proxyDecorator(new GridController(getIdentifier));
}

export type ProxyGrid<T extends object> = DecoratedProxy<GridController<T>>;

//Proxy needs subscribe-able fields to be defined even if they're undefined
class GridController<TData> {
	getIdentifier: GetIdentifier<TData>;

	columnState: ColumnState[] | undefined = undefined;

	constructor(getIdentifier: GetIdentifier<TData>) {
		this.getIdentifier = getIdentifier;
	}

	selectedNodes: string[] = [];

	/** The data to be used in the grid */
	rowData: TData[] = [];

	/** The column definitions for the grid */
	columnDefs: ColDef[] = [];

	/** The grid options to be used in the grid */
	gridOptions: GridOptions | undefined = undefined;

	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
