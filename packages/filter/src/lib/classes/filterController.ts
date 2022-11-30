import { doesItemPassFilter, generateFilterValues, searchForIncludes, searchForStartsWith } from '../utils';

import { FilterGroup, FilterItemCount, FilterSearchActive, FilterValueType, ValueFormatterFilter } from '../types';
import { FilterStateController } from './filterStateController';
import { Observable, OnchangeCallback } from './observable';
import { CountController } from './countController';
import { CountCache } from './countCache';

export class FilterController<TData> {
	filterGroups: FilterGroup[] = [];

	filterStateController = new FilterStateController();

	valueFormatters: ValueFormatterFilter<TData>[] = [];

	private countController = new CountController<TData>();

	data: TData[] = [];

	onDataChange: (callback: OnchangeCallback<TData[]>) => () => void;

	setData: (newData: TData[]) => void;

	filteredData: TData[] = [];

	setFilteredData: (newData: TData[]) => void;

	onFilteredDataChanged: (callback: OnchangeCallback<TData[]>) => () => void;

	onFilterValuesGenerated: (callback: OnchangeCallback<FilterGroup[]>) => () => void;

	private countCache = new CountCache();

	/** Set filter values */
	private setFilterValues: (value: FilterGroup[]) => void;

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

		const filterValues = new Observable<FilterGroup[]>([]);
		this.onFilterValuesGenerated = filterValues.onchange;
		this.setFilterValues = filterValues.setValue;
		filterValues.onchange((val) => {
			this.filterGroups = val;
		});

		this.filterStateController.onFilterStateChange(this.countCache.clear);
	}

	search = (search: FilterSearchActive<TData>) => {
		this.setSearch(search);
		this.filter();
	};

	private filterSearch: FilterSearchActive<TData> | null = null;
	private handleSearch = (data: TData[], filteredData: TData[]) => {
		if (this.filterSearch === null) return;
		const { searchIn, searchValue, type, valueFormatters } = this.filterSearch;
		const haystack = searchIn === 'Data' ? data : filteredData;
		const needle = searchValue.toLowerCase();

		const results =
			type === 'includes'
				? searchForIncludes(valueFormatters, haystack, needle)
				: searchForStartsWith(valueFormatters, haystack, needle);

		return results;
	};

	clearSearch = () => {
		this.filterSearch = null;
		this.filter();
	};

	/**Function for adding a valueformatter */
	addValueFormatters = (valueFormatters: ValueFormatterFilter<TData>[]) => {
		this.valueFormatters = [...this.valueFormatters, ...valueFormatters];
	};

	/** Initializes the filter */
	init = () => {
		this.createFilterValues();
		this.filter();
	};

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
		if (this.filterSearch !== null) {
			this.setFilteredData(this.handleSearch(this.data, this.filteredData) ?? []);
		}
	};

	setSearch = (value: FilterSearchActive<TData> | null) => {
		this.filterSearch = value;
	};

	getFilterItemCountsForGroup = (groupName: string): FilterItemCount[] => {
		const group = this.filterGroups.find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');
		const count = this.countController.getFilterItemCountsForGroup(group, valueFormatter, this.filteredData);

		return count;
	};

	getCountForFilterValue = (groupName: string, filterItem: FilterValueType): number => {
		const cached = this.countCache.getCount(`${groupName}${filterItem}`);
		if (cached) {
			return cached;
		}
		const group = this.filterGroups.find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');

		const count = this.countController.getCountForFilterValue(group, filterItem, valueFormatter, this.filteredData);
		this.countCache.addCount(`${groupName}${filterItem}`, count);
		return count;
	};

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
