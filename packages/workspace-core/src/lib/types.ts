export interface WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /** Data supplied to the workspace */
    originalData: TData[];
    /** Data that passed the active filters */
    filteredData: TData[];
    /** Controllers registered */
    controllers: TControllers;
    /** Placeholder for user to add its custom data */
    context?: TContext;

    /**
     * Adds a controller to the workspace controllers
     * @param controller
     */
    addController<ControllerType, WSController>(
        controller: Controller<ControllerType, WSController>
    ): void;
    /**
     * Setter for original data
     * @param data
     */
    setOriginalData(newData: TData[], preventCallbacks?: boolean): void;
    /**
     * Function for setting the filtered data sett and calling the on filter callback with the updated data sett.
     * @param {TData[]} filteredData Filtered data
     * @param {boolean} [preventCallbacks] Prevents the callback form fire.
     * @memberof WorkspaceController
     */
    setFilteredData(filteredData: TData[], preventCallbacks?: boolean): void;
    /**
     * Register callback to be fired when original data changes
     * @param {OnDataChangedCallback<TData>} callback
     * @memberof WorkspaceController
     */
    onOriginalDataChanged(
        callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    ): OnCallbackSet;
    /**
     * Register callback to be fired when filtered data changes
     * @param {OnDataChangedCallback<TData>} onDataChangeCallback
     * @memberof WorkspaceController
     */
    onFilteredDataChanged(
        callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    ): OnCallbackSet;
    /**
     * Fires all the onClick callbacks to let them know something was clicked
     * @param {TOnClick} ev
     * @memberof WorkspaceController
     */
    notifyOnClick(ev?: TOnClick): void;
    /**
     * Register onClick callback
     * @param {OnClickCallback<TData, TOnClick>} callback
     * @memberof WorkspaceController
     */
    onClick(
        callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
    ): OnCallbackSet;
    /**
     *
     * Register onError callback for handling workspace errors.
     * @param {ErrorCallback<TData, TError>} callback
     * @memberof WorkspaceController
     */
    onError(
        callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>
    ): OnCallbackSet;
    /**
     * Call all error callbacks with current workspace error.
     * @param {TError} error
     * @memberof WorkspaceController
     */
    throwError(error: TError): void;
}

export interface WorkspaceControllerInternal<TData, TControllers, TOnClick, TError, TContext>
    extends WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /** Callbacks to be fired when filtered data changes */
    onFilteredDataChangedCallbacks: Callback<
        OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[];
    /** Callbacks to be fired when original data changes */
    onOriginalDataChangedCallbacks: Callback<
        OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[];
    /** Callbacks to be fired when an onclick event happens */
    onClickCallbacks: Callback<OnClickCallback<TData, TControllers, TOnClick, TError, TContext>>[];
    /** Callbacks to be fired when an error event happens */
    onErrorCallbacks: Callback<
        WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>
    >[];
}

export type ConfigFunction<TController, WSController> = (
    controller: TController,
    workspaceController: WSController
) => void;

export interface Controller<TControllerType, WSController> {
    name: string;
    controller: TControllerType;
    config?: ConfigFunction<TControllerType, WSController>;
}

export interface Callback<TCallback> {
    id: string;
    callback: TCallback;
}

export interface OnCallbackSet {
    id: string;
    unSubscribe: () => void;
}

export type OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext> = (
    data: TData[],
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;

export type OnClickCallback<TData, TControllers, TOnClick, TError, TContext> = (
    ev: TOnClick,
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;

export type WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext> = (
    error: TError,
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;
