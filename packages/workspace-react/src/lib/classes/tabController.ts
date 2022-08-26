import { Observable, OnchangeCallback } from '@workspace/workspace-core';
import { Tab } from '../types';

export class TabController<TabNames extends string> {
	activeTab: TabNames | undefined;
	setActiveTab: (value: TabNames) => void;
	onActiveTabChanged: (callback: OnchangeCallback<TabNames>) => () => void;
	tabs: Tab<TabNames>[] = [];

	addTab(tab: Tab<TabNames>) {
		if (this.tabs.findIndex((s) => s.name === tab.name) !== -1) {
			throw new Error('Duplicate tab');
		}
		this.tabs.push(tab);
		this.activeTab = this.tabs[0].name;
		return this;
	}

	constructor() {
		const activeTab = new Observable<TabNames>();
		this.setActiveTab = activeTab.setValue;
		this.onActiveTabChanged = activeTab.onchange;
		this.activeTab = activeTab.value;
		activeTab.onchange((val) => (this.activeTab = val));
	}
}
