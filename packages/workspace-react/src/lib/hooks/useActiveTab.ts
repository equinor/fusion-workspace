import { useState, useEffect } from 'react';
import { WorkspaceController } from '../classes';
import { Tab } from '../types';

export function useActiveTab<TabNames extends string, TData, TOnClick, TContext, TError>(
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>
) {
	const [tab, setTab] = useState<Tab<string> | undefined>(
		controller.tabs.find((s) => s.name === controller.activeTab.value)
	);

	useEffect(() => {
		const unsubscribe = controller.activeTab.onchange((tabName) => {
			const newTab = controller.tabs.find(({ name }) => name === tabName);
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
