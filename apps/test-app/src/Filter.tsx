import { FilterDataSource, FilterGroup } from '@equinor/workspace-filter';

export const filterDataSource: FilterDataSource = {
  getFilterMeta: async (filters, signal) => {
    const res = {} as any;
    return (await res.json()).map((s: any): FilterGroup => ({ ...s, isQuickFilter: true }));
  },
};
