import React from 'react';
import { BaseController } from '@workspace/basecontroller';

export type ViewComponent<Controller> = React.FC<{ controller: Controller }>;

export type FindTabFunction = (tabs: Tab<unknown>[]) => string;
export type RegisterPluginCallback<T> = (controller: WorkspaceController<T>) => void;

export interface Tab<Controller> {
    name: string;
    ViewComponent: ViewComponent<Controller>;
    controller: Controller;
}

interface HeadlessController<Controller> {
    name: string;
    controller: Controller;
}

export class WorkspaceController<T> extends BaseController {
    /**List of tabs registered on this workspace */
    tabs: Tab<unknown>[] = [];
    /** String name of active tab */
    activeTab?: string;
    /** Data supplied to the workspace */
    originalData: T[] = [];
    /** Data that passed the active filters */
    filteredData: T[] = [];
    /** Controllers registered */
    headlessControllers: HeadlessController<unknown>[] = [];

    setActiveTabIndex = (tabIndex: string | FindTabFunction) => {
        // Validate tabIndex
        this.activeTab = typeof tabIndex === 'function' ? tabIndex(this.tabs) : tabIndex;
        this.notifyListeners();
    };

    registerTab = <Controller>(tab: Tab<Controller>) => {
        this.tabs.push(tab as Tab<unknown>);
        this.notifyListeners();
    };

    setOriginalData = (newData: T[]) => {
        this.originalData = newData;
        this.notifyListeners();
    };

    setFilteredData = (filteredData: T[]) => {
        this.filteredData = filteredData;
        this.notifyListeners();
    };

    addHeadlessController = <Controller>(controller: HeadlessController<Controller>) => {
        this.headlessControllers.push(controller);
        console.log('Headless controller added');
    };

    registerPlugin = (callback: RegisterPluginCallback<T>) => callback(this);
}
