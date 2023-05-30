import { ActiveFilter } from '../types';

export function getActiveFilterGroupArray(activeFilters: Record<string, ActiveFilter[]>) {
  const activeFilterGroups: string[] = [];
  Object.keys(activeFilters).forEach((key) => {
    if (activeFilters[key].length !== 0) {
      activeFilterGroups.push(key);
    }
  });
  return activeFilterGroups;
}
