import { useState, useEffect } from 'react';
import { Tab } from '../types';
import { useControllerContext } from './useControllerContext';

export function useActiveTab() {
	const {
		tabs: { tabs, onActiveTabChanged, activeTab },
	} = useControllerContext();

	const [tab, setTab] = useState<Tab<string> | undefined>(tabs.find((s) => s.name === activeTab));

	useEffect(() => {
		const unsubscribe = onActiveTabChanged((tabName) => {
			const newTab = tabs.find(({ name }) => name === tabName);
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
