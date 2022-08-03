/**
 * All filter groups gathered in one type
 */
export type FilterOptions<T> = FilterConfiguration<T>[];

/**
 * Filter configuration for a given filter group
 */
export interface FilterConfiguration<T> {
    name: string;
    /** Takes in an item and returns the filter value */
    valueFormatter: (item: T) => FilterValueType | FilterValueType[];
    /** Should the filter be active in the pane on mount */
    /**
     * Insert a list of values to be default filtered
     * Case insensitive
     */
    defaultUncheckedValues?: FilterValueType[];
    /**
     * Check if you want the filter to be hidden by default
     */
    defaultHidden?: boolean;

    /**
     * Adds the filter to the compact filter, MAX 5!
     */
    isQuickFilter?: boolean;

    /** Sort the list of values in the filtergroup, defaults to alphanumeric */
    sort?: (values: FilterValueType[]) => FilterValueType[];
    /** Custom render function for rendering the value in the filter view */
    customValueRender?: (value: FilterValueType) => JSX.Element;
}

/**
 * Primitive types allowed as filter types.
 */
export type FilterValueType = string | number | null;
/**
 * Defines which valueformatters to use for searching
 */
export type SearchMode = 'id/desc' | 'all';
/**
 * Function for formatting an object to a filter value
 */
export type ValueFormatterFunction<T> = (item: T) => FilterValueType | FilterValueType[];

export interface ValueFormatterFilter<T> {
    name: string;
    valueFormatter: ValueFormatterFunction<T>;
    sort?: (values: FilterValueType[]) => FilterValueType[];
}

export interface FilterGroup {
    name: string;
    values: FilterValueType[];
}

/**
 * Object to store for an active search, allows for searching after filtering has been done.
 */
export interface FilterSearchActive<T> {
    searchValue: string;
    valueFormatters: ValueFormatterFilter<T>[];
    searchIn: SearchDataSet;
    type: SearchType;
}

/**
 * Defines which data to search in
 */
export type SearchDataSet = 'Data' | 'FilteredData';

/**
 * Different types for searching
 */
export type SearchType = 'startsWith' | 'includes';

export interface FilterItemCount {
    /** Item name */
    name: FilterValueType;
    count: number;
}
