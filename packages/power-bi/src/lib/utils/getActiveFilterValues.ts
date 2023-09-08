import { PowerBiFilter } from '../types';
import { SlicerFilter } from '../types/slicer';

/**
 * Get all active filters that have been applied to the report.
 */
export const getActiveFilterValues = async (filters: PowerBiFilter[]) => {
  const activeFilterValues = {} as Record<string, (string | number | boolean)[]>;

  filters.forEach(async (filter) => {
    const a = await filter.slicer.getSlicerState().catch((s) => {
      console.debug(s);
    });
    const slicerFilters = a ? a.filters : [];
    activeFilterValues[filter.type] = [];
    slicerFilters.forEach((slicerFilter: SlicerFilter) => {
      activeFilterValues[filter.type] = slicerFilter?.values || [];
    });
  });
  return activeFilterValues;
};
