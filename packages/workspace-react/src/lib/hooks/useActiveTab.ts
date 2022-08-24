import { useState, useEffect } from 'react';
import { Tab } from '../types';
import { useControllerContext } from './useControllerContext';

export function useActiveTab() {
	const controller = useControllerContext();

	const [tab, setTab] = useState<Tab<string> | undefined>(
		controller.tabs.find((s) => s.name === controller.activeTab)
	);

	useEffect(() => {
		const { unsubscribe } = controller.onActiveTabChanged((tabName) => {
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
