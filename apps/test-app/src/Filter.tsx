import { FilterDataSource, FilterGroup } from '@equinor/workspace-filter';
import { makeRequest } from './ignore';

export const filterDataSource: FilterDataSource = {
  getFilterMeta: async (filters, signal) => {
    const res = await makeRequest('work-orders/filter-model', filters as any, signal);
    return (await res.json()).map((s: any): FilterGroup => ({ ...s, isQuickFilter: true }));
  },
};
