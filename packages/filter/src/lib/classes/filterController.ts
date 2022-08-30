import { doesItemPassCriteria, doesItemPassFilter, generateFilterValues } from '../utils';

import { FilterGroup, FilterItemCount, FilterValueType, ValueFormatterFilter, ValueFormatterFunction } from '../types';
import { FilterStateController } from './filterStateController';
import { SearchController } from './searchController';
import { Observable, OnchangeCallback } from './observable';

export class FilterController<TData> {
	filterGroups: FilterGroup[] = [];
	filterStateController = new FilterStateController();
	searchController = new SearchController<TData>();
	valueFormatters: ValueFormatterFilter<TData>[] = [];

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
			this.searchController.filteredData = newData;
		});
		const data = new Observable<TData[]>();
		this.setData = data.setValue;
		this.onDataChange = data.onchange;
		data.onchange((newData) => {
			this.data = newData;
			this.searchController.data = newData;
		});
		/** Filters the data whenever the filter state changes */
		this.filterStateController.onFilterStateChange(this.filter);
	}

	/** Returns all the filtervalues from a given group */
	getGroupValues = (groupName: string) => this.filterGroups.find(({ name }) => name === groupName)?.values ?? [];

	/** Generates filter values based on the given valueformatters from data */
	createFilterValues = () => this.setFilterValues(generateFilterValues(this.valueFormatters, this.data));

	/** Gets count for all the filter values in a filter group  */
	getFilterItemCountsForGroup = (groupName: string): FilterItemCount[] => {
		const filterGroup = this.filterGroups.find(({ name }) => name === groupName);
		if (!filterGroup) return [];

		return filterGroup.values.map(
			(value): FilterItemCount => ({
				name: value,
				count: this.getCountForFilterValue(filterGroup, value),
			})
		);
	};

	/** Returns the count for a specific filter value */
	getCountForFilterValue = (
		filterGroup: FilterGroup,
		filterItem: FilterValueType,
		valueFormatterFunc?: ValueFormatterFunction<unknown>
	) => {
		const valueFormatter =
			valueFormatterFunc ?? this.valueFormatters.find(({ name }) => name === filterGroup.name)?.valueFormatter;
		if (!valueFormatter) return -1;

		const uncheckedValues = filterGroup.values.filter((value) => value !== filterItem);

		return this.filteredData.reduce(
			(count, val) => (doesItemPassCriteria(uncheckedValues, valueFormatter(val)) ? count + 1 : count),
			0
		);
	};

	private filter = () => {
		if (!this.data || this.data.length === 0) return;
		this.setFilteredData(
			this.data.filter((item) =>
				doesItemPassFilter(item, this.filterStateController.filterState, this.valueFormatters)
			)
		);
		if (this.searchController.filterSearch !== null) {
			this.setFilteredData(this.searchController.handleSearch() ?? []);
		}
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
