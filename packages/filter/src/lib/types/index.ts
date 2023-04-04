export * from './search';
export * from './filter';

export type FilterDataSource = {
  getFilterMeta: (signal?: AbortSignal) => Promise<FilterGroup[]>;
};

export type FilterGroup = {
  name: string;
  isQuickFilter: boolean;
  values: string[];
};
