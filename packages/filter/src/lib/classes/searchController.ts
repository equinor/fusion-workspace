import { FilterSearchActive } from '../types';
import { searchForIncludes, searchForStartsWith } from '../utils';
// import { Observable, OnchangeCallback } from './observable';

export class SearchController<TData> {
	// filterSearch: FilterSearchActive<TData> | null = null;
	// /** Clears the search and filters the data using the current filterstate */
	// clearSearch: () => void;
	// /** Callback for when search object changes */
	// onSearchChanged: (callback: OnchangeCallback<FilterSearchActive<TData> | null>) => () => void;
	// /** Search across multiple filter groups for a value that matches at least one */
	// setSearch: (value: FilterSearchActive<TData> | null) => void;
	// constructor() {
	// 	const { onchange, setValue } = new Observable<FilterSearchActive<TData> | null>(null);
	// 	this.onSearchChanged = onchange;
	// 	this.setSearch = setValue;
	// 	this.clearSearch = () => {
	// 		setValue(null);
	// 	};
	// }
	// /**Function for performing a search */
	// handleSearch = (data: TData[], filteredData: TData[]) => {
	// 	if (this.filterSearch === null) return;
	// 	const { searchIn, searchValue, type, valueFormatters } = this.filterSearch;
	// 	const haystack = searchIn === 'Data' ? data : filteredData;
	// 	const needle = searchValue.toLowerCase();
	// 	const results =
	// 		type === 'includes'
	// 			? searchForIncludes(valueFormatters, haystack, needle)
	// 			: searchForStartsWith(valueFormatters, haystack, needle);
	// 	return results;
	// };
}
