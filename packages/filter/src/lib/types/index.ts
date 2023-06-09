import { FilterState } from '../context/filterContext';
import { FilterValueType } from './filter';

export * from './filter';
export * from './filterStyles';

export type FilterDataSource = {
  getFilterMeta: (state: FilterState, signal?: AbortSignal) => Promise<FilterGroup[]>;
};

export type FilterGroup = {
  name: string;
  isQuickFilter: boolean;
  filterItems: FilterValueType[];
};

export type FilterStateGroup = {
  name: string;
  values: string[];
};
