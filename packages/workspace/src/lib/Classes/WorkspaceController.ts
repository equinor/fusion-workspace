import React from 'react';

interface OnCallbackSet<T> {
    id: string;
    unsub: () => void;
    controller: WorkspaceController<T>;
}

interface Callback<T> {
    id: string;
    callback: T;
}

export type ViewComponent<Controller> = React.FC<{ controller: Controller }>;

export type FindTabFunction<WorkspaceController> = (
    tabs: Tab<unknown, WorkspaceController>[]
) => string;

export interface Tab<Controller, WorkspaceController> {
    name: string;
    ViewComponent: ViewComponent<Controller>;
    controller: Controller;
    binder?: BinderFunction<Controller, WorkspaceController>;
}

interface Controller<ControllerType, WorkspaceController> {
    name: string;
    controller: ControllerType;
    binder?: BinderFunction<ControllerType, WorkspaceController>;
}

type BinderFunction<Controller, WorkspaceController> = (
    controller: Controller,
    workspaceController: WorkspaceController
) => void;

export type RegisterPluginCallback<T> = (controller: WorkspaceController<T>) => void;
type OnDataChangedCallback<T> = (data: T[], controller: WorkspaceController<T>) => void;
type OnTabChangedCallback<T> = (
    to: string | undefined,
    from: string | undefined,
    controller: WorkspaceController<T>
) => void;
type ErrorCallback<TData, TError> = (error: TError, controller: WorkspaceController<TData>) => void;

type OnClickCallback<WorkspaceType, TOnClick> = (
    ev: TOnClick,
    controller: WorkspaceController<WorkspaceType>
) => void;

export class WorkspaceController<TData, TOnClick = any, TError = any, TContext = any> {
    /**List of tabs registered on this workspace */
    tabs: Tab<unknown, WorkspaceController<TData, TOnClick, TError, TContext>>[] = [];
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

    /** Callbacks to be fired when an onclick event happens */
    onClickCallbacks: Callback<OnClickCallback<TData, TOnClick>>[] = [];

    errorCallbacks: ErrorCallback<TData, TError>[] = [];
    private onFilteredDataChangedCallbacks: Callback<OnDataChangedCallback<TData>>[] = [];
    private onOriginalDataChangedCallbacks: Callback<OnDataChangedCallback<TData>>[] = [];
    private onTabChangedCallbacks: Callback<OnTabChangedCallback<TData>>[] = [];

    addTab = <Controller>(
        tab: Tab<Controller, WorkspaceController<TData, TOnClick, TError, TContext>>
    ) => {
        this.tabs.push(tab as Tab<unknown, WorkspaceController<TData, TOnClick, TError, TContext>>);
        tab.binder && tab.binder(tab.controller, this);
    };

    setActiveTabIndex = (
        tabIndex: string | FindTabFunction<WorkspaceController<TData, TOnClick, TError, TContext>>,
        preventCallbacks?: boolean
    ) => {
        const fromTab = this.activeTab;
        // Validate tabIndex
        this.activeTab = typeof tabIndex === 'function' ? tabIndex(this.tabs) : tabIndex;
        if (!preventCallbacks) {
            this.onTabChangedCallbacks.forEach(({ callback }) =>
                callback(this.activeTab, fromTab, this)
            );
        }
    };

    onTabChanged = (cb: OnTabChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = generateUniqueId();
        this.onTabChangedCallbacks.push({ callback: cb, id });
        return {
            id,
            unsub: () => {
                this.onTabChangedCallbacks = this.onTabChangedCallbacks.filter((s) => s.id !== id);
            },
            controller: this,
        };
    };

    /**
     * Register callback to be fired when original data changes
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOriginalDataChanged = (callback: OnDataChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = generateUniqueId();
        this.onOriginalDataChangedCallbacks.push({
            callback: callback,
            id,
        });
        return {
            id: id,
            unsub: () => {
                this.onOriginalDataChangedCallbacks = this.onOriginalDataChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
            controller: this,
        };
    };

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
     * Register callback to be fired when filtered data changes
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFilteredDataChanged = (cb: OnDataChangedCallback<TData>): OnCallbackSet<TData> => {
        const id = generateUniqueId();
        this.onFilteredDataChangedCallbacks.push({ callback: cb, id });
        return {
            id,
            unsub: () => {
                this.onFilteredDataChangedCallbacks = this.onFilteredDataChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
            controller: this,
        };
    };

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
     */
    notifyOnClick = (ev: TOnClick) => {
        this.onClickCallbacks.forEach((s) => s.callback(ev, this));
    };

    /**
     * Register onClick callback
     */
    onClickCallback = (cb: OnClickCallback<TData, TOnClick>): OnCallbackSet<TData> => {
        const id = generateUniqueId();
        this.onClickCallbacks.push({
            callback: cb,
            id,
        });

        return {
            id,
            unsub: () => {
                this.onClickCallbacks = this.onClickCallbacks.filter((s) => s.id !== id);
            },
            controller: this,
        };
    };

    /**
     * Adds a headless controller to the workspace controller
     * @param headlessController
     */
    addController = <ControllerType>(
        headlessController: Controller<
            ControllerType,
            WorkspaceController<TData, TOnClick, TError, TContext>
        >
    ) => {
        this.controllers.push(
            headlessController as Controller<
                unknown,
                WorkspaceController<TData, TOnClick, TError, TContext>
            >
        );
        headlessController.binder && headlessController.binder(headlessController.controller, this);
    };

    onError = (cb: ErrorCallback<TData, TError>) => {
        this.errorCallbacks.push(cb);
    };

    throwError = (error: TError) => {
        this.errorCallbacks.forEach((s) => s(error, this));
    };

    registerPlugin = (callback: RegisterPluginCallback<TData>) => callback(this);
}

function generateUniqueId(): string {
    return (Math.random() * 16).toString();
}
