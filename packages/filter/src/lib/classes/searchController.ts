import { Observable, OnchangeCallback } from '@workspace/workspace-core';
import { FilterSearchActive } from '../types';
import { searchForIncludes, searchForStartsWith } from '../utils';

export class SearchController<TData> {
	filterSearch: FilterSearchActive<TData> | null = null;

	data: TData[] = [];
	filteredData: TData[] = [];
	/** Clears the search and filters the data using the current filterstate */
	clearSearch: () => void;

	onSearchChanged: (callback: OnchangeCallback<FilterSearchActive<TData> | null>) => () => void;

	constructor() {
		const { onchange, setValue } = new Observable<FilterSearchActive<TData> | null>(null);
		this.onSearchChanged = onchange;
		this.setSearch = setValue;
		this.clearSearch = () => {
			setValue(null);
		};
	}

	handleSearch = () => {
		if (this.filterSearch === null) return;
		const { searchIn, searchValue, type, valueFormatters } = this.filterSearch;
		const haystack = searchIn === 'Data' ? this.data : this.filteredData;
		const needle = searchValue.toLowerCase();

		const results =
			type === 'includes'
				? searchForIncludes(valueFormatters, haystack, needle)
				: searchForStartsWith(valueFormatters, haystack, needle);

		return results;
	};

	/** Search across multiple filter groups for a value that matches at least one */
	setSearch: (value: FilterSearchActive<TData> | null) => void;
}
