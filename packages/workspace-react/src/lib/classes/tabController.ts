import { Tab } from '../types';
import { OnchangeCallback, Observable } from './observable';

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

    return this;
  }

  constructor() {
    const activeTab = new Observable<TabNames>(undefined, (newVal, oldVal) => newVal === oldVal);
    this.setActiveTab = activeTab.setValue;
    this.onActiveTabChanged = activeTab.onchange;
    this.activeTab = activeTab.value;
    activeTab.onchange((val) => {
      this.activeTab = val;
    });
  }
}
