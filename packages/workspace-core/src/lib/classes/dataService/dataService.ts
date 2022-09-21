import { OnchangeCallback } from '../../types';
import { Observable } from '../observable';

/**
 * Handling data related to workspace.
 * For more documentation see docs here.
 * [Data Service](https://equinor.github.io/fusion-workspace/packages/workspace-core/services/#data-service)
 */
export class DataService<TData> {
	/** Register a callback to be called when filtered data changes*/
	onDataChange: (callback: OnchangeCallback<TData[]>) => () => void;

	/** The data used for the workspace */
	data: TData[] | undefined;

	/** Sets the data */
	setData: (value: TData[]) => void;

	/** Register a callback to be called when filtered data changes*/
	onFilterDataChange: (callback: OnchangeCallback<TData[]>) => () => void;

	/** The filtered data used for the workspace */
	filteredData: TData[] | undefined;

	/** Sets the filtered data */
	setFilteredData: (value: TData[]) => void;

	constructor() {
		const data = new Observable<TData[]>();
		this.onDataChange = data.onchange;
		data.onchange((val) => {
			this.data = val;
		});
		this.setData = data.setValue;

		const filterData = new Observable<TData[]>();
		this.onFilterDataChange = filterData.onchange;
		filterData.onchange((val) => {
			this.filteredData = val;
		});
		this.setFilteredData = filterData.setValue;
	}
}
