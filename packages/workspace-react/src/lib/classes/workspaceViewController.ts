import {
  Callback,
  StatusItem,
  Tab,
  OnActiveTabChangedCallback,
  OnIsLoadingChangedCallback,
  OnFilterOpenOrClosedCallback,
} from '../types';
import { registerCallback } from '../utils/registerCallback';
import { WorkspaceSidesheetController } from './workspaceSidesheetController';

export class WorkspaceViewController<TTabNames extends string, TError> {
  constructor(tabs: Tab<TTabNames>[], initialTab: TTabNames) {
    this.tabs = tabs;
    this.activeTab = initialTab;
  }

  private onActiveTabChangedCallbacks: Callback<OnActiveTabChangedCallback<TTabNames, this>>[] = [];
  private onFilterOpenOrClosedCallbacks: Callback<OnFilterOpenOrClosedCallback<this>>[] = [];
  private onIsLoadingChangedCallbacks: Callback<OnIsLoadingChangedCallback<this>>[] = [];
  /** The tabs for your workspace */
  tabs: Tab<TTabNames>[];
  
  sidesheet: WorkspaceSidesheetController = new WorkspaceSidesheetController();
  /** The filter component to render in the header */
  FilterComponent?: () => JSX.Element;
  /** Component for handling errors */
  ErrorComponent?: (error: TError) => JSX.Element;
  /** The current active tab name */
  activeTab: TTabNames;
  /** true when data is loading */
  isLoading = false;
  isFilterActive = false;
  /** Function for refetching data */
  refetchData?: () => Promise<void> | null;
  /** Items to be shown on the status bar */
  statusBarItems?: StatusItem[];
  
  /**
   * Sets a new active tab
   * @param tabName Name of the tab to set as active
   */
  setActiveTab = (tabName: TTabNames) => {
    const oldTabName = this.activeTab;
    this.activeTab = tabName;
    this.onActiveTabChangedCallbacks.forEach(({ callback }) =>
      callback(tabName, oldTabName, this)
    );
  };

  /**
   * Sets the state of the filter
   * @param isOpen if set to true, filter will open
   */
  setIsFilterOpen = (isOpen: boolean) => {
    if (this.isFilterActive === isOpen) return;
    this.isFilterActive = isOpen;
    this.onFilterOpenOrClosedCallbacks.forEach(({ callback }) =>
      callback(isOpen, this)
    );
  };

  /**
   * Sets the isLoading state
   * @param isLoading If set to true, tabs will unmount and a loading spinner will occur
   */
  setIsLoading = (isLoading: boolean) => {
    if (this.isLoading === isLoading) return;
    this.isLoading = isLoading;
    this.onIsLoadingChangedCallbacks.forEach(({ callback }) =>
      callback(isLoading, this)
    );
  };

  /**
   * Register a callback to be called whenever the isLoading property changes
   * @param cb Callback to be called when isLoading changes
   * @returns Id of the callback(debug purposes), and an unsubscribe function
   */
  onIsLoadingChanged = (cb: OnIsLoadingChangedCallback<this>) =>
    registerCallback(this.onIsLoadingChangedCallbacks, cb, this.removeOnIsLoadingCallback);
  /**
   * Register a callback to be called whenever the filter opens or closes
   * @param cb Callback to be called when the filter opens or closes
   * @returns Id of the callback(debug purposes), and an unsubscribe function
   */
  onFilterOpenOrClosedChanged = (cb: OnFilterOpenOrClosedCallback<this>) =>
    registerCallback(this.onFilterOpenOrClosedCallbacks, cb, this.removeOnFilterOpenOrClosedCallback);

  /**
   * Register a callback to be called whenever the tab changes
   * @param cb Callback to be called when tab changes
   * @returns Id of the callback(debug purposes), and an unsubscribe function
   */
  onActiveTabChanged = (cb: OnActiveTabChangedCallback<TTabNames, this>) =>
    registerCallback(this.onActiveTabChangedCallbacks, cb, this.removeOnActiveTabChangedCallback);

  private removeOnActiveTabChangedCallback = (id: string) => (this.onActiveTabChangedCallbacks = this.onActiveTabChangedCallbacks.filter((s) => s.id !== id ));
  private removeOnIsLoadingCallback = (id: string) => (this.onIsLoadingChangedCallbacks = this.onIsLoadingChangedCallbacks.filter((s) => s.id !== id));
  private removeOnFilterOpenOrClosedCallback = (id: string) => (this.onFilterOpenOrClosedCallbacks = this.onFilterOpenOrClosedCallbacks.filter((s) => s.id !== id));
}
