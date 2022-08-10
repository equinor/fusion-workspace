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
 
 export interface FilterItemCount {
     /** Item name */
     name: FilterValueType;
     count: number;
 }