import { useEffect, useState } from 'react';
import { Tab } from '../../types';
import { WorkspaceProps } from '../Workspace';

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab<TabNames extends string, TError>({ controller }: WorkspaceProps<TabNames, TError>) {
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

	if (!tab) return null;
	const { Component } = tab;
	return <Component />;
}
