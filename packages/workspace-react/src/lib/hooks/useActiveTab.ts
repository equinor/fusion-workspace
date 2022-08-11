import { useState, useEffect } from 'react';
import { WorkspaceViewController } from '../classes';
import { Tab } from '../types';

export function useActiveTab<TabNames extends string, TError>(
  controller: WorkspaceViewController<TabNames, TError>
) {
  const [tab, setTab] = useState<Tab<string> | undefined>(
    controller.tabs.find((s) => s.name === controller.activeTab)
  );

  useEffect(() => {
    const { unsubscribe } = controller.onActiveTabChanged((to) => {
      const newTab = controller.tabs.find((s) => s.name === to);
      if (!newTab) {
        setTab(undefined);
      } else {
        setTab(newTab);
      }
    });
    return unsubscribe;
  }, []);

  return tab;
}
