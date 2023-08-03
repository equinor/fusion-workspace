import { Tab } from '@equinor/workspace-react';

const tabSortOrder = new Map<string, number>();
tabSortOrder.set('garden', 0);
tabSortOrder.set('grid', 1);
tabSortOrder.set('powerbi', 2);

export function sortFusionTabs<TError>(tabs: Tab[]) {
  tabs.sort((a, b) => {
    return (tabSortOrder.get(a.name) ?? Infinity) - (tabSortOrder.get(b.name) ?? Infinity);
  });
  return tabs;
}
