import { BaseController } from '@workspace/basecontroller';
import {
    doesItemPassCriteria,
    doesItemPassFilter,
    generateFilterValues,
    searchForIncludes,
    searchForStartsWith,
} from '../Functions';
import {
    FilterGroup,
    FilterItemCount,
    FilterSearchActive,
    ValueFormatterFilter,
    ValueFormatterFunction,
} from '../Hooks';
import { FilterValueType } from '../Types';
import { filterGroupExists, shouldFilter } from '../Utils';

export class FilterController<T> extends BaseController {
    data: T[] = [];
    filteredData: T[] = [];
    filterState: FilterGroup[] = [];
    filterSearch: FilterSearchActive<T> | null = null;
    allFilterValues: FilterGroup[] = [];
    valueFormatters: ValueFormatterFilter<T>[] = [];

    addValueFormatters = (valueFormatters: ValueFormatterFilter<T>[]) => {
        this.valueFormatters = [...this.valueFormatters, ...valueFormatters];
    };

    checkValueIsInactive = (groupName: string, value: FilterValueType) =>
        Boolean(this.filterState.find(({ name }) => name === groupName)?.values.includes(value));

    getGroupValues = (groupName: string) =>
        this.allFilterValues.find(({ name }) => name === groupName)?.values ?? [];

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
    filter = (preventReRender?: boolean) => {
        if (!this.data || this.data.length === 0) return;
        this.setFilteredData(
            this.data.filter((item) =>
                doesItemPassFilter(item, this.filterState, this.valueFormatters)
            )
        );
        if (this.filterSearch !== null) {
            this.handleSearch(true);
        }
        this.handleShouldReRender(preventReRender);
    };

    // /**
    //  * @internal
    //  * Unpacks defaultUncheckedValues from config and filters data
    //  * @returns
    //  */
    // handleFilterOnMount = () => {
    //     if (!shouldFilter(filterConfiguration)) {
    //         this.notifyListeners();
    //         return;
    //     }
    //     filterConfiguration.forEach(({ name, defaultUncheckedValues }) => {
    //         (defaultUncheckedValues ?? []).forEach((value) => {
    //             this.changeFilterItem('MarkInactive', name, value, true);
    //         });
    //     });
    //     this.filter();
    // };

    /**
     * @internal
     * @param preventReRender
     * @returns
     */
    handleShouldReRender = (preventReRender?: boolean) =>
        !preventReRender && this.notifyListeners();

    createFilterValues = (preventReRender?: boolean) => {
        this.allFilterValues = generateFilterValues(this.valueFormatters, this.data);
        !preventReRender && this.handleShouldReRender(preventReRender);
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
    };

    /**
     * Add or remove all values in a filter group
     */
    markAllValuesActive = (groupName: string, preventReRender?: boolean) => {
        const group = this.filterState.find(({ name }) => name === groupName);
        if (!group) return;
        this.handleShouldReRender();
        this.setFilterState(this.filterState.filter(({ name }) => name !== groupName));
        this.filter(preventReRender);
    };

    /**
     * Manually set the filter state
     */
    setFilterState = (newFilterState: FilterGroup[], preventReRender?: boolean) => {
        this.filterState = newFilterState;
        this.filter(preventReRender);
    };

    /**
     * Destroys the filter
     */
    destroyFilter = (preventReRender?: boolean) => {
        this.setFilteredData(this.data);
        this.setFilterState([], true);
        this.setAllFilterValues([]);
        this.handleShouldReRender(preventReRender);
    };

    /** Clears all active filters */
    clearActiveFilters = (preventReRender?: boolean) => {
        this.setFilterState([], true);
        this.handleShouldReRender(preventReRender);
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
    setFilteredData = (newData: T[]) => {
        this.filteredData = newData;
    };

    /** Clears the search and filters the data using the current filterstate */
    clearSearch = (): void => {
        this.filterSearch = null;
        this.filter();
    };

    handleSearch = (preventReRender?: boolean) => {
        if (this.filterSearch === null) return;
        const { searchIn, searchValue, type, valueFormatters } = this.filterSearch;
        const haystack = searchIn === 'Data' ? this.data : this.filteredData;
        const needle = searchValue.toLowerCase();

        const results =
            type === 'includes'
                ? searchForIncludes(valueFormatters, haystack, needle)
                : searchForStartsWith(valueFormatters, haystack, needle);

        this.setFilteredData(results);
        this.handleShouldReRender(preventReRender);
    };

    /** Search across multiple filter groups for a value that matches at least one */
    search = (searchArgs: FilterSearchActive<T>, preventReRender?: boolean): void => {
        if (searchArgs.valueFormatters.length === 0) return;
        this.filterSearch = searchArgs;

        this.filter(preventReRender);
    };
}

/**
 * Handles empty values
 * @param val
 * @returns
 */
function handleEmpty(
    val: FilterValueType | FilterValueType[]
): FilterValueType | FilterValueType[] {
    if (val === undefined) {
        return null;
    }
    if (Array.isArray(val)) {
        return val.length === 0 ? null : val;
    }
    if (typeof val === 'string') {
        return val.length === 0 ? null : val;
    }
    return val;
}
