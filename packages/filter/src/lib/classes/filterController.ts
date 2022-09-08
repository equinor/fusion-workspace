import { doesItemPassFilter, generateFilterValues } from '../utils';

import { FilterGroup, FilterValueType, ValueFormatterFilter } from '../types';
import { FilterStateController } from './filterStateController';
import { SearchController } from './searchController';
import { Observable, OnchangeCallback } from './observable';
import { CountController } from './countController';

export class FilterController<TData> {
	filterGroups: FilterGroup[] = [];
	filterStateController = new FilterStateController();
	private searchController = new SearchController<TData>();
	valueFormatters: ValueFormatterFilter<TData>[] = [];
	private countController = new CountController<TData>();
	data: TData[] = [];
	onDataChange: (callback: OnchangeCallback<TData[]>) => () => void;
	setData: (newData: TData[]) => void;

	filteredData: TData[] = [];
	setFilteredData: (newData: TData[]) => void;
	onFilteredDataChanged: (callback: OnchangeCallback<TData[]>) => () => void;

	/**Function for adding a valueformatter */
	addValueFormatters = (valueFormatters: ValueFormatterFilter<TData>[]) => {
		this.valueFormatters = [...this.valueFormatters, ...valueFormatters];
	};

	/** Initializes the filter */
	init = () => {
		this.createFilterValues();
		this.filter();
	};

	constructor() {
		const fData = new Observable<TData[]>();
		this.setFilteredData = fData.setValue;
		this.onFilteredDataChanged = fData.onchange;
		fData.onchange((newData) => {
			this.filteredData = newData;
		});
		const data = new Observable<TData[]>();
		this.setData = data.setValue;
		this.onDataChange = data.onchange;
		data.onchange((newData) => {
			this.data = newData;
		});
		/** Filters the data whenever the filter state changes */
		this.filterStateController.onFilterStateChange(this.filter);
	}

	/** Returns all the filtervalues from a given group */
	getGroupValues = (groupName: string) => this.filterGroups.find(({ name }) => name === groupName)?.values ?? [];

	/** Generates filter values based on the given valueformatters from data */
	createFilterValues = () => this.setFilterValues(generateFilterValues(this.valueFormatters, this.data));

	private filter = () => {
		if (!this.data || this.data.length === 0) return;
		this.setFilteredData(
			this.data.filter((item) =>
				doesItemPassFilter(item, this.filterStateController.filterState, this.valueFormatters)
			)
		);
		if (this.searchController.filterSearch !== null) {
			this.setFilteredData(this.searchController.handleSearch(this.data, this.filteredData) ?? []);
		}
	};

	setSearch = this.searchController.setSearch;

	getFilterItemCountsForGroup = (groupName: string) => {
		const group = this.filterGroups.find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) return;
		return this.countController.getFilterItemCountsForGroup(group, valueFormatter, this.filteredData);
	};

	getCountForFilterValue = (groupName: string, filterItem: FilterValueType) => {
		const group = this.filterGroups.find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) return;

		return this.countController.getCountForFilterValue(group, filterItem, valueFormatter, this.filteredData);
	};

	/** Destroys the filter */
	destroyFilter = () => {
		this.setData([]);
		this.setFilteredData([]);
		this.filterStateController.setFilterState([]);
		this.setFilterValues([]);
	};

	/** Set filter values */
	setFilterValues = (newFilterValues: FilterGroup[]) => {
		this.filterGroups = newFilterValues;
	};
}
