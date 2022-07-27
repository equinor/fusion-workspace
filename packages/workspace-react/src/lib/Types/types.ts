import { Callback, Controller, OnCallbackSet, WorkspaceController } from '@equinor/workspace-core';

export type OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext> = (
    to: string | undefined,
    from: string | undefined,
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;

export type FindTabFunction<TController, WSController> = (
    tabs: Tab<TController, WSController>[]
) => string;
export type ViewComponent<Controller> = React.FC<{ controller: Controller }>;

export interface Tab<TController, WSController> extends Controller<TController, WSController> {
    ViewComponent: ViewComponent<TController>;
}

export interface ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>
    extends WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /**List of tabs registered on this workspace */
    tabs: Tab<unknown, unknown>[];
    /** String name of active tab */
    activeTab?: string;
    /**
     *
     * @param {string} tab
     * @memberof WorkspaceController
     */
    addTab<TController, WSController>(tab: Tab<TController, WSController>): void;
    /**
     *
     * @param {(string | FindTabFunction)} tabIndex
     * @param {boolean} [preventCallbacks]
     * @memberof WorkspaceController
     */
    setActiveTab(
        tabIndex: string | FindTabFunction<unknown, unknown>,
        preventCallbacks?: boolean
    ): void;
    /**
     *
     * @param {OnTabChangedCallback<TData>} callback
     * @memberof WorkspaceController
     */
    onTabChange(callback: any): OnCallbackSet;
}

export interface InternalReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>
    extends ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /**List of tabs registered on this workspace */
    tabs: Tab<unknown, unknown>[];
    /** String name of active tab */
    activeTab: string | undefined;
    /**List of onTabChangedCallbacks Callbacks registered on this workspace */
    onTabChangedCallbacks: Callback<
        OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[];
}
