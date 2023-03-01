import { models } from 'powerbi-client';
import { ActiveFilter, PowerBiFilterItem } from '../types';
import { IS_BLANK } from './constants';
import { convertFilterVal, convertFromNullToBlank } from './transformData';

/**
 * Will return true if all visible filters
 * (visible meaning you have searched something and only a selection is showing)
 * have already been applied.
 */
export const areAllVisibleFiltersApplied = (
  allVisibleFilterValues: string[],
  activeFilters: ActiveFilter[]
): boolean => {
  return allVisibleFilterValues.every((visibleValue) => activeFilters?.includes(visibleValue));
};

export const removeVisibleFilters = (
  allVisibleFilterValues: string[],
  activeFilters: ActiveFilter[]
): ActiveFilter[] => {
  return activeFilters?.filter(
    (filterVal) => !allVisibleFilterValues.includes(convertFromNullToBlank(filterVal).toString())
  );
};

export const createAdvancedPbiFilter = (
  filter: PowerBiFilterItem,
  newFilters: ActiveFilter[]
): models.ISlicerFilter[] => {
  const hasBlank = newFilters.includes(IS_BLANK);
  const values: (string | number | boolean | null)[] = [];
  newFilters.forEach((filterValue) => {
    filterValue !== IS_BLANK && values.push(convertFilterVal(filterValue));
  });
  hasBlank && values.push(null);
  const basicFilter: models.IBasicFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: filter.target!,
    filterType: models.FilterType.Basic,
    operator: 'In',
    //@ts-ignore null value in array does seem to work when passed to and translated by PBI
    values,
  };
  /** TODO: Use this in addition if null value in values array does not work. */
  // const isBlankFilter: models.IAdvancedFilter = {
  //     $schema: 'http://powerbi.com/product/schema#advanced',
  //     target: filter.target!,
  //     filterType: models.FilterType.Advanced,
  //     logicalOperator: 'Or',
  //     conditions: [{ operator: 'IsBlank' }],
  // };

  return [basicFilter];
};
