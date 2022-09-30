import { ColDef, ColumnState, GridOptions } from 'ag-grid-community';

export type GetIdentifier<TData> = (item: TData) => string;

export function createGridController<T>(getIdentifier: GetIdentifier<T>): ProxyGrid<T> {
	return proxyDecorator(new GridController(getIdentifier));
}

export type ProxyGrid<T> = GridController<T> & {
	subscribe: <K extends keyof GridController<T>>(key: K, cb: (ev: GridController<T>[K]) => void) => void;
};

class GridController<TData> {
	getIdentifier: GetIdentifier<TData>;

	constructor(getIdentifier: GetIdentifier<TData>) {
		this.getIdentifier = getIdentifier;
	}

	columnState?: ColumnState[];

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

type OnChangeCallback<T, K extends keyof T> = (ev: T[K]) => void;

function proxyDecorator<T>(obj: T) {
	const subMap = new Map<string, OnChangeCallback<T, keyof T>[]>(Object.keys(obj).map((key) => [key, []]));

	return new Proxy(
		{
			...obj,
			subscribe: <K extends keyof T>(key: K, cb: OnChangeCallback<T, K>) => {
				if (typeof key !== 'string') return;
				const arr = subMap.get(key);
				if (Array.isArray(arr)) {
					subMap.set(key, [...arr, cb as OnChangeCallback<T, keyof T>]);
				}
			},
		},
		{
			set(prop, index, newVal) {
				if (index === 'subscribe') return false;
				/** Emits new value */

				if (typeof newVal !== 'function') {
					console.log(newVal);
					//Functions cant be cloned
					subMap.get(index as string)?.forEach((s) => s(newVal));
				}
				// eslint-disable-next-line no-param-reassign
				prop[index as keyof T] = newVal;
				return true;
			},
		}
	);
}
