import React from 'react';
import { BaseController } from '@workspace/basecontroller';

export type ViewComponent<Controller> = React.FC<{ controller: Controller }>;

export type FindTabFunction = (tabs: Tab<unknown>[]) => string;

export interface Tab<Controller> {
    name: string;
    ViewComponent: ViewComponent<Controller>;
    controller: Controller;
    binder?: BinderFunction<Controller, unknown>;
}

interface HeadlessController<Controller> {
    name: string;
    controller: Controller;
    binder?: BinderFunction<Controller, unknown>;
}

type BinderFunction<Controller, WorkspaceType> = (
    controller: Controller,
    workspaceController: WorkspaceController<WorkspaceType>
) => void;

export type RegisterPluginCallback<T> = (controller: WorkspaceController<T>) => void;
type OnDataChangedCallback<T> = (data: T[], controller: WorkspaceController<T>) => void;
type OnTabChangedCallback<T> = (
    to: string | undefined,
    from: string | undefined,
    controller: WorkspaceController<T>
) => void;
type ErrorCallback<TData, TError> = (error: TError, controller: WorkspaceController<TData>) => void;

export class WorkspaceController<TData, TError = any, TContext = any> extends BaseController {
    /**List of tabs registered on this workspace */
    tabs: Tab<unknown>[] = [];
    /** String name of active tab */
    activeTab?: string;
    /** Data supplied to the workspace */
    originalData: TData[] = [];
    /** Data that passed the active filters */
    filteredData: TData[] = [];
    /** Controllers registered */
    headlessControllers: HeadlessController<unknown>[] = [];
    context: TContext | null = null;
    errorCallbacks: ErrorCallback<TData, TError>[] = [];
    private onFilteredDataChangedCallbacks: OnDataChangedCallback<TData>[] = [];
    private onOriginalDataChangedCallbacks: OnDataChangedCallback<TData>[] = [];
    private onTabChangedCallbacks: OnTabChangedCallback<TData>[] = [];

    addTab = <Controller>(tab: Tab<Controller>) => {
        this.tabs.push(tab as Tab<unknown>);
        tab.binder && tab.binder(tab.controller, this as any);
        this.notifyListeners();
    };

    setActiveTabIndex = (tabIndex: string | FindTabFunction) => {
        const fromTab = this.activeTab;
        // Validate tabIndex
        this.activeTab = typeof tabIndex === 'function' ? tabIndex(this.tabs) : tabIndex;
        this.onTabChangedCallbacks.forEach((s) => s(this.activeTab, fromTab, this));
        this.notifyListeners();
    };

    onTabChanged = (cb: OnTabChangedCallback<TData>) => {
        this.onTabChangedCallbacks.push(cb);
    };

    /**
     * Register callback to be fired when original data changes
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOriginalDataChanged = (cb: OnDataChangedCallback<TData>) => {
        this.onOriginalDataChangedCallbacks.push(cb);
    };

    /**
     * Setter for original data
     * @param newData
     */
    setOriginalData = (newData: TData[]) => {
        this.originalData = newData;
        this.onOriginalDataChangedCallbacks.forEach((s) => s(newData, this));
        this.notifyListeners();
    };

    /**
     * Register callback to be fired when filtered data changes
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFilteredDataChanged = (cb: OnDataChangedCallback<TData>) => {
        this.onFilteredDataChangedCallbacks.push(cb);
    };

    setFilteredData = (filteredData: TData[]) => {
        this.filteredData = filteredData;
        this.notifyListeners();
    };

    /**
     * Adds a headless controller to the workspace controller
     * @param headlessController
     */
    addHeadlessController = <Controller>(headlessController: HeadlessController<Controller>) => {
        this.headlessControllers.push(headlessController as any);
        headlessController.binder &&
            headlessController.binder(headlessController.controller, this as any);
    };

    onError = (cb: ErrorCallback<TData, TError>) => {
        this.errorCallbacks.push(cb);
    };

    throwError = (error: TError) => {
        this.errorCallbacks.forEach((s) => s(error, this));
    };

    registerPlugin = (callback: RegisterPluginCallback<TData>) => callback(this);
}
