/**
 * All filter groups gathered in one type
 */
export type FilterOptions = FilterConfiguration[];

/**
 * Filter configuration for a given filter group
 */
export interface FilterConfiguration {
  name: string;
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

  /** Custom render function for rendering the value in the filter view */
  customValueRender?: (value: FilterValueType) => JSX.Element;
}

/**
 * Primitive types allowed as filter types.
 */
export type FilterValueType = {
  value: string;
  count: number;
};
