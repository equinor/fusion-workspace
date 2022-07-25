/**
 * ### Workspace Controller
 * The workspace controller is a common hub for all controllers. The idea is for the workspace controller to be pure JS/TS and not be dependent on any JS framework. The Workspace controller will consist of the following.
 *
 * @export
 * @template TData Data type of the created workspace
 * @template TControllers Type of Controllers added to workspace
 * @template TOnClick Type of click Events added to workspace
 * @template TError Error type.
 * @template TContext Custom Context.
 * @return {*}  { WorkspaceController<TData, TControllers, TOnClick, TError, TContext> }
 */
export interface WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /** Data supplied to the workspace */
    data: TData[];
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
    addController<
        ControllerType,
        TWController extends WorkspaceController<
            TData,
            TControllers,
            TOnClick,
            TError,
            TContext
        > = WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
    >(
        controller: Controller<ControllerType, TWController>
    ): void;
    /**
     * Adds a controller to the workspace controllers
     * @param controller
     */
    addMiddleware<
        TWController extends WorkspaceController<
            TData,
            TControllers,
            TOnClick,
            TError,
            TContext
        > = WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
    >(
        config: MiddlewareConfigFunction<TWController>
    ): void;
    /**
     * Setter for original data
     * @param data
     */
    setData(context: TData[], preventCallbacks?: boolean): void;
    /**
     * Setter for original context
     * @param data
     */
    setContext(newData: ContextFunction<TContext>): void;
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
    onDataChanged(
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
    click(ev?: TOnClick): void;
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

export type ContextFunction<TContext> = (context: TContext) => TContext;

export interface WorkspaceControllerInternal<TData, TControllers, TOnClick, TError, TContext>
    extends WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /** Callbacks to be fired when filtered data changes */
    onFilteredDataChangedCallbacks: Callback<
        OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[];
    /** Callbacks to be fired when original data changes */
    onDataChangedCallbacks: Callback<
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

export type MiddlewareConfigFunction<WSController> = (controller: WSController) => void;

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
