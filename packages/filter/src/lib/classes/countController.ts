import { FilterGroup, ValueFormatterFunction, FilterItemCount, FilterValueType } from '../types';
import { doesItemPassCriteria } from '../utils';

export class CountController<T> {
  /** Gets count for all the filter values in a filter group  */
  getFilterItemCountsForGroup = (
    filterGroup: FilterGroup,
    valueFormatter: ValueFormatterFunction<T>,
    filteredData: T[]
  ): FilterItemCount[] => {
    return filterGroup.values.map(
      (value): FilterItemCount => ({
        name: value,
        count: this.getCountForFilterValue(filterGroup, value, valueFormatter, filteredData),
      })
    );
  };

  /** Returns the count for a specific filter value */
  getCountForFilterValue = (
    filterGroup: FilterGroup,
    filterItem: FilterValueType,
    valueFormatter: ValueFormatterFunction<T>,
    filteredData: T[]
  ) => {
    const uncheckedValues = filterGroup.values.filter((value) => value !== filterItem);

    return filteredData.reduce(
      (count, val) => (doesItemPassCriteria(uncheckedValues, valueFormatter(val)) ? count + 1 : count),
      0
    );
  };
}
