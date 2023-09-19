import { PowerBiFilterItem } from '../types';

export const searchFilterItems = (
  filterItems: PowerBiFilterItem[],
  searchValue: string | undefined
): PowerBiFilterItem[] => {
  if (!searchValue) return filterItems;

  return filterItems.reduce((acc, curr) => {
    if ((curr?.value ?? '(Blank)').toLowerCase().includes(searchValue.toLowerCase())) acc.push(curr);
    return acc;
  }, [] as PowerBiFilterItem[]);
};
