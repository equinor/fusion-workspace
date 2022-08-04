import {
    doesItemPassCriteria,
    doesItemPassFilter,
    generateFilterValues,
    searchForIncludes,
    searchForStartsWith,
} from '../functions';
import { registerCallback } from '../functions/registerCallback';

import {
    Callback,
    FilterGroup,
    FilterItemCount,
    FilterSearchActive,
    FilterValueType,
    OnCallbackSet,
    OnFilterDataChangeCallback,
    OnFilterStateChangedCallback,
    ValueFormatterFilter,
    ValueFormatterFunction,
} from '../types';
import { filterGroupExists } from '../utils';




//TODO: Add change handlers to everything
export class FilterController<TData> {
    data: TData[] = [];
    filteredData: TData[] = [];
    filterState: FilterGroup[] = [];
    filterSearch: FilterSearchActive<TData> | null = null;
    allFilterValues: FilterGroup[] = [];
    valueFormatters: ValueFormatterFilter<TData>[] = [];

    /**
     * Callbacks
     */
    onFilteredDataChangedCallbacks: Callback<OnFilterDataChangeCallback<TData>>[] = [];
    onFilterStateChangedCallbacks: Callback<OnFilterStateChangedCallback<TData>>[] = [];

    /**
     * Register callback to be called when filter state changes
     */
    onFilterStateChange = (cb: OnFilterStateChangedCallback<TData>): OnCallbackSet =>
        registerCallback(cb, this.onFilterStateChangedCallbacks, this.unsubOnFilterStateChange);

    private unsubOnFilterStateChange = (id: string) => {
        this.onFilterStateChangedCallbacks = this.onFilterStateChangedCallbacks.filter(
            (s) => s.id !== id
        );
    };

    /**
     * Register callback to be called when filtered data changes
     */
    onFilterDataChange = (cb: OnFilterDataChangeCallback<TData>): OnCallbackSet =>
        registerCallback(cb, this.onFilteredDataChangedCallbacks, this.unsubOnFilterDataChange);

    private unsubOnFilterDataChange = (id: string) => {
        this.onFilteredDataChangedCallbacks = this.onFilteredDataChangedCallbacks.filter(
            (s) => s.id !== id
        );
    };

    private notifyFilterDataChange = () => {
        this.onFilteredDataChangedCallbacks.forEach(({ callback }) =>
            callback(this.filteredData, this)
        );
    };

    addValueFormatters = (valueFormatters: ValueFormatterFilter<TData>[]) => {
        this.valueFormatters = [...this.valueFormatters, ...valueFormatters];
    };

    /**
     * Check if a value is currently being filtered out from the dataset
     */
    checkValueIsInactive = (groupName: string, value: FilterValueType) =>
        Boolean(this.filterState.find(({ name }) => name === groupName)?.values.includes(value));

    getGroupValues = (groupName: string) =>
        this.allFilterValues.find(({ name }) => name === groupName)?.values ?? [];

    /**
    * Get all the values that are currently being filtered out from a specific group
    * @param groupName 
    * @returns 
    */
    getInactiveGroupValues = (groupName: string) =>
        this.filterState.find(({ name }) => name === groupName)?.values ?? [];

    /**
     * Gets count for all the filter values in a filter group
     * @param groupName
     * @returns
     */
    getFilterItemCountsForGroup = (groupName: string): FilterItemCount[] => {
        const filterGroup = this.allFilterValues.find(({ name }) => name === groupName);
        if (!filterGroup) return [];

        return filterGroup.values.map(
            (value): FilterItemCount => ({
                name: value,
                count: this.getCountForFilterValue(filterGroup, value),
            })
        );
    };

    getCountForFilterValue = (
        filterGroup: FilterGroup,
        filterItem: FilterValueType,
        valueFormatterFunc?: ValueFormatterFunction<unknown>
    ) => {
        const valueFormatter =
            valueFormatterFunc ??
            this.valueFormatters.find(({ name }) => name === filterGroup.name)?.valueFormatter;
        if (!valueFormatter) return -1;

        const uncheckedValues = filterGroup.values.filter((value) => value !== filterItem);

        return this.filteredData.reduce((count, val) => {
            return doesItemPassCriteria(uncheckedValues, valueFormatter(val)) ? count + 1 : count;
        }, 0);
    };

    /**
     * @internal
     */
    filter = () => {
        if (!this.data || this.data.length === 0) return;
        this.setFilteredData(
            this.data.filter((item) =>
                doesItemPassFilter(item, this.filterState, this.valueFormatters)
            )
        );
        if (this.filterSearch !== null) {
            this.handleSearch();
        }
    };

    createFilterValues = () => {
        this.allFilterValues = generateFilterValues(this.valueFormatters, this.data);
    };

    /** Add or remove a filter value from the blacklist */
    changeFilterItem = (
        action: 'MarkInactive' | 'MarkActive',
        groupName: string,
        newValue: FilterValueType,
        preventFiltering?: boolean
    ) => {
        if (filterGroupExists(groupName, this.filterState)) {
            /**
             * Group exists add or remove
             */
            const group = this.filterState.find(({ name }) => name === groupName);
            if (!group) return;
            group.values =
                action === 'MarkInactive'
                    ? [...group.values, newValue]
                    : [...group.values.filter((value) => value !== newValue)];
        } else {
            if (action === 'MarkActive') return;
            /** only add */
            this.filterState.push({ name: groupName, values: [newValue] });
        }
        /** Actually do the filtering */
        !preventFiltering && this.filter();
        this.onFilterStateChangedCallbacks.forEach(({ callback }) =>
            callback(this.filterState, this)
        );
    };

    /**
     * Add or remove all values in a filter group
     */
    markAllValuesActive = (groupName: string) => {
        const group = this.filterState.find(({ name }) => name === groupName);
        if (!group) return;
        this.setFilterState(this.filterState.filter(({ name }) => name !== groupName));
        this.filter();
    };

    /**
     * Manually set the filter state
     */
    setFilterState = (newFilterState: FilterGroup[]) => {
        this.filterState = newFilterState;
        this.onFilterStateChangedCallbacks.forEach(({ callback }) =>
            callback(newFilterState, this)
        );
    };

    /**
     * Destroys the filter
     */
    destroyFilter = () => {
        this.setFilteredData(this.data);
        this.setFilterState([]);
        this.setAllFilterValues([]);
    };

    /** Clears all active filters */
    clearActiveFilters = () => {
        this.setFilterState([]);
    };

    /**
     * @internal
     * Set filter values
     * @param newFilterValues
     */
    setAllFilterValues = (newFilterValues: FilterGroup[]) => {
        this.allFilterValues = newFilterValues;
    };

    /**
     * @internal
     * Set filter data
     */
    setFilteredData = (newData: TData[]) => {
        this.filteredData = newData;
        this.notifyFilterDataChange();
    };
    /**
     * @internal
     * Set filter data
     */
    setData = (newData: TData[]) => {
        this.data = newData;
    };

    /** Clears the search and filters the data using the current filterstate */
    clearSearch = (): void => {
        this.filterSearch = null;
        this.filter();
    };

    handleSearch = () => {
        if (this.filterSearch === null) return;
        const { searchIn, searchValue, type, valueFormatters } = this.filterSearch;
        const haystack = searchIn === 'Data' ? this.data : this.filteredData;
        const needle = searchValue.toLowerCase();

        const results =
            type === 'includes'
                ? searchForIncludes(valueFormatters, haystack, needle)
                : searchForStartsWith(valueFormatters, haystack, needle);

        this.setFilteredData(results);
    };

    /** Search across multiple filter groups for a value that matches at least one */
    search = (searchArgs: FilterSearchActive<TData>): void => {
        if (searchArgs.valueFormatters.length === 0) return;
        this.filterSearch = searchArgs;
    };
}
