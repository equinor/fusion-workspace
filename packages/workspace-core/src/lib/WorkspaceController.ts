import {
    Callback,
    Controller,
    ErrorCallback,
    FindTabFunction,
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    OnTabChangedCallback
} from './Types';

export class WorkspaceController<TData, TOnClick = any, TError = any, TContext = any> {
    /**List of tabs registered on this workspace */
    tabs: string[] = [];
    /** String name of active tab */
    activeTab?: string;
    /** Data supplied to the workspace */
    originalData: TData[] = [];
    /** Data that passed the active filters */
    filteredData: TData[] = [];
    /** Controllers registered */
    controllers: Controller<unknown, WorkspaceController<TData, TOnClick, TError, TContext>>[] = [];
    /** Placeholder for user to add its custom data */
    context: TContext | null = null;

    /** Callbacks to be fired when filtered data changes */
    private onFilteredDataChangedCallbacks: Callback<OnDataChangedCallback<TData>>[] = [];
    /** Callbacks to be fired when original data changes */
    private onOriginalDataChangedCallbacks: Callback<OnDataChangedCallback<TData>>[] = [];
    /** Callbacks to be fired when an onclick event happens */
    private onClickCallbacks: Callback<OnClickCallback<TData, TOnClick>>[] = [];
    /** Callbacks to be fired when an error event happens */
    private onErrorCallbacks: Callback<ErrorCallback<TData, TError>>[] = [];
    /** Callbacks to be fired onTabChanged event */
    private onTabChangedCallbacks: Callback<OnTabChangedCallback<TData>>[] = [];

    /**
     * Setter for original data
     * @param newData
     */
    setOriginalData = (newData: TData[], preventCallbacks?: boolean) => {
        this.originalData = newData;
        if (!preventCallbacks) {
            this.onOriginalDataChangedCallbacks.forEach(({ callback }) => callback(newData, this));
        }
    };

    /**
     * Register callback to be fired when original data changes
     * @param {OnDataChangedCallback<TData>} callback
     * @memberof WorkspaceController
     */
    onOriginalDataChanged = (callback: OnDataChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = this.generateUniqueId();
        this.onOriginalDataChangedCallbacks.push({
            callback,
            id,
        });
        return {
            id,
            unSubscribe: () => {
                this.onOriginalDataChangedCallbacks = this.onOriginalDataChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
            controller: this,
        };
    };

    /**
     * Register callback to be fired when filtered data changes
     * @param {OnDataChangedCallback<TData>} onDataChangeCallback
     * @memberof WorkspaceController
     */
    onFilteredDataChanged = (callback: OnDataChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = this.generateUniqueId();
        this.onFilteredDataChangedCallbacks.push({ callback, id });
        return {
            id,
            unSubscribe: () => {
                this.onFilteredDataChangedCallbacks = this.onFilteredDataChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
            controller: this,
        };
    };

    /**
     * Function for setting the filtered data sett and calling the on filter callback with the updated data sett.
     * @param {TData[]} filteredData Filtered data
     * @param {boolean} [preventCallbacks] Prevents the callback form fire.
     * @memberof WorkspaceController
     */
    setFilteredData = (filteredData: TData[], preventCallbacks?: boolean) => {
        this.filteredData = filteredData;
        if (!preventCallbacks) {
            this.onFilteredDataChangedCallbacks.forEach(({ callback }) =>
                callback(filteredData, this)
            );
        }
    };

    /**
     * Fires all the onClick callbacks to let them know something was clicked
     * @param {TOnClick} ev
     * @memberof WorkspaceController
     */
    notifyOnClick = (ev: TOnClick) => {
        this.onClickCallbacks.forEach((s) => s.callback(ev, this));
    };

    /**
     * Register onClick callback
     * @param {OnClickCallback<TData, TOnClick>} callback
     * @memberof WorkspaceController
     */
    onClick = (callback: OnClickCallback<TData, TOnClick>): OnCallbackSet<TData> => {
        const id = this.generateUniqueId();
        this.onClickCallbacks.push({
            callback,
            id,
        });

        return {
            id,
            unSubscribe: () => {
                this.onClickCallbacks = this.onClickCallbacks.filter((s) => s.id !== id);
            },
            controller: this,
        };
    };

    /**
     *
     * Register onError callback for handling workspace errors.
     * @param {ErrorCallback<TData, TError>} callback
     * @memberof WorkspaceController
     */
    onError = (callback: ErrorCallback<TData, TError>): OnCallbackSet<TData> => {
        const id = this.generateUniqueId();
        this.onErrorCallbacks.push({
            callback,
            id,
        });

        return {
            id,
            unSubscribe: () => {
                this.onClickCallbacks = this.onClickCallbacks.filter((s) => s.id !== id);
            },
            controller: this,
        };
    };

    /**
     * Call all error callbacks with current workspace error.
     * @param {TError} error
     * @memberof WorkspaceController
     */
    throwError = (error: TError) => {
        this.onErrorCallbacks.forEach((s) => s.callback(error, this));
    };

    /**
     * Internal Function for creating unique id
     * @memberof WorkspaceController
     */
    generateUniqueId = (): string => {
        return (Math.random() * 16).toString();
    };

    /**
     *
     * @param {string} tab
     * @memberof WorkspaceController
     */
    addTab = (tab: string) => {
        this.tabs.push(tab);
    };

    /**
     *
     * @param {(string | FindTabFunction)} tabIndex
     * @param {boolean} [preventCallbacks]
     * @memberof WorkspaceController
     */
    setActiveTabIndex = (tabIndex: string | FindTabFunction, preventCallbacks?: boolean) => {
        const fromTab = this.activeTab || '';
        this.activeTab = typeof tabIndex === 'function' ? tabIndex(this.tabs) : tabIndex;
        if (!preventCallbacks && this.activeTab) {
            this.onTabChangedCallbacks.forEach(({ callback }) =>
                callback(this.activeTab, fromTab, this)
            );
        }
    };

    /**
     *
     * @param {OnTabChangedCallback<TData>} callback
     * @memberof WorkspaceController
     */
    onTabChanged = (callback: OnTabChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = this.generateUniqueId();
        this.onTabChangedCallbacks.push({ callback, id });
        return {
            id,
            unSubscribe: () => {
                this.onTabChangedCallbacks = this.onTabChangedCallbacks.filter((s) => s.id !== id);
            },
            controller: this,
        };
    };
}
