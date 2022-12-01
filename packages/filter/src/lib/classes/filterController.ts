import { doesItemPassFilter, generateFilterValues, searchForIncludes, searchForStartsWith } from '../utils';

import { FilterGroup, FilterItemCount, FilterSearchActive, FilterValueType, ValueFormatterFilter } from '../types';
import { FilterStateController } from './filterStateController';

import { CountController } from './countController';
import { CountCache } from './countCache';
import { BehaviorSubject } from 'rxjs';

export class FilterController<TData> {
	filterStateController = new FilterStateController();

	valueFormatters: ValueFormatterFilter<TData>[] = [];

	private countController = new CountController<TData>();

	#data = new BehaviorSubject<TData[]>([]);

	getData = () => this.#data.value;

	setData = (data: TData[]) => this.#data.next(data);

	data$ = this.#data.asObservable();

	#filteredData = new BehaviorSubject<TData[]>([]);

	getFilteredData = () => this.#filteredData.value;

	setFilteredData = (data: TData[]) => this.#filteredData.next(data);

	filteredData$ = this.#filteredData.asObservable();

	#filterValues = new BehaviorSubject<FilterGroup[]>([]);

	getFilterValues = () => this.#filterValues.value;

	filterValues$ = this.#filterValues.asObservable();

	#setFilterValues = (val: FilterGroup[]) => this.#filterValues.next(val);

	private countCache = new CountCache();

	constructor() {
		/** Filters the data whenever the filter state changes */
		this.filterStateController.onFilterStateChange(this.filter);

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
	getGroupValues = (groupName: string) => this.getFilterValues().find(({ name }) => name === groupName)?.values ?? [];

	/** Generates filter values based on the given valueformatters from data */
	createFilterValues = () => this.#setFilterValues(generateFilterValues(this.valueFormatters, this.#data.value));

	private filter = () => {
		if (!this.#data.value || this.#data.value.length === 0) return;
		this.setFilteredData(
			this.#data.value.filter((item) =>
				doesItemPassFilter(item, this.filterStateController.filterState, this.valueFormatters)
			)
		);
		if (this.filterSearch !== null) {
			this.setFilteredData(this.handleSearch(this.#data.value, this.#filteredData.value) ?? []);
		}
	};

	setSearch = (value: FilterSearchActive<TData> | null) => {
		this.filterSearch = value;
	};

	getFilterItemCountsForGroup = (groupName: string): FilterItemCount[] => {
		const group = this.getFilterValues().find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');
		const count = this.countController.getFilterItemCountsForGroup(group, valueFormatter, this.#filteredData.value);

		return count;
	};

	getCountForFilterValue = (groupName: string, filterItem: FilterValueType): number => {
		const cached = this.countCache.getCount(`${groupName}${filterItem}`);
		if (cached) {
			return cached;
		}
		const group = this.getFilterValues().find((s) => s.name === groupName);
		const valueFormatter = this.valueFormatters.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');

		const count = this.countController.getCountForFilterValue(
			group,
			filterItem,
			valueFormatter,
			this.#filteredData.value
		);
		this.countCache.addCount(`${groupName}${filterItem}`, count);
		return count;
	};

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		this.#data.complete();
		this.#filteredData.complete();
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
