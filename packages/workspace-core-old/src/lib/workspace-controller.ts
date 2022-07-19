import {
    Callback,
    Controller,
    FindTabFunction,
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    OnTabChangedCallback,
    WorkspaceController,
    WorkspaceErrorCallback,
} from './types';

export function createWorkspaceController<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>(): WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /**List of tabs registered on this workspace */
    const tabs: string[] = [];
    /** String name of active tab */
    let activeTab: string | undefined;
    /** Data supplied to the workspace */
    const originalData: TData[] = [];
    /** Data that passed the active filters */
    let filteredData: TData[] = [];
    /** Controllers registered */
    let controllers: TControllers = {} as TControllers;
    /** Placeholder for user to add its custom data */
    const context: TContext | undefined = undefined;

    /** Callbacks to be fired when filtered data changes */
    let onFilteredDataChangedCallbacks: Callback<
        OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[] = [];
    /** Callbacks to be fired when original data changes */
    let onOriginalDataChangedCallbacks: Callback<
        OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[] = [];
    /** Callbacks to be fired when an onclick event happens */
    let onClickCallbacks: Callback<
        OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
    >[] = [];
    /** Callbacks to be fired when an error event happens */
    const onErrorCallbacks: Callback<
        WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>
    >[] = [];
    /** Callbacks to be fired onTabChanged event */
    let onTabChangedCallbacks: Callback<
        OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
    >[] = [];

    /**
     * Internal Function for creating unique id
     * @memberof WorkspaceController
     */
    const generateUniqueId = (): string => {
        return (Math.random() * 16).toString();
    };

    const workspaceController: WorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    > = {
        tabs,
        controllers,
        activeTab,
        originalData,
        filteredData,
        context,
        addController<ControllerType>(
            controller: Controller<ControllerType, TData, TControllers, TOnClick, TError, TContext>
        ) {
            if (controllers[controller.name]) {
                throw new Error('Controller already exist!');
            }

            controllers = {
                ...controllers,
                [controller.name]: controller.controller as ControllerType,
            };

            controller.config &&
                controller.config(controller.controller, workspaceController as any);
        },
        setOriginalData(data: TData[], preventCallbacks?: boolean) {
            this.originalData = data;
            if (!preventCallbacks) {
                onOriginalDataChangedCallbacks.forEach(({ callback }) =>
                    callback(data, workspaceController as any)
                );
            }
        },
        onOriginalDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            onOriginalDataChangedCallbacks.push({
                callback,
                id,
            });
            return {
                id,
                unSubscribe: () => {
                    onOriginalDataChangedCallbacks = onOriginalDataChangedCallbacks.filter(
                        (s) => s.id !== id
                    );
                },
            };
        },
        onFilteredDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            onFilteredDataChangedCallbacks.push({ callback, id });
            return {
                id,
                unSubscribe: () => {
                    onFilteredDataChangedCallbacks = onFilteredDataChangedCallbacks.filter(
                        (s) => s.id !== id
                    );
                },
            };
        },

        setFilteredData(data: TData[], preventCallbacks?: boolean) {
            filteredData = data;
            if (!preventCallbacks) {
                onFilteredDataChangedCallbacks.forEach(({ callback }) =>
                    callback(filteredData, workspaceController as any)
                );
            }
        },
        notifyOnClick(ev: TOnClick) {
            onClickCallbacks.forEach((s) => s.callback(ev, workspaceController as any));
        },
        onClick(
            callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            onClickCallbacks.push({
                callback,
                id,
            });

            return {
                id,
                unSubscribe: () => {
                    onClickCallbacks = onClickCallbacks.filter((s) => s.id !== id);
                },
            };
        },
        onError(callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>) {
            const id = generateUniqueId();
            onErrorCallbacks.push({
                callback,
                id,
            });

            return {
                id,
                unSubscribe: () => {
                    onClickCallbacks = onClickCallbacks.filter((s) => s.id !== id);
                },
            };
        },

        throwError(error: TError) {
            onErrorCallbacks.forEach((s) => s.callback(error, workspaceController as any));
        },

        addTab<ControllerType, TData, TControllers, TOnClick, TError, TContext>(
            newController: Controller<
                ControllerType,
                TData,
                TControllers,
                TOnClick,
                TError,
                TContext
            >
        ) {
            tabs.push(newController.name);
            workspaceController.addController(newController);
        },

        setActiveTab(tabIndex: string | FindTabFunction, preventCallbacks?: boolean) {
            const fromTab = activeTab || '';
            activeTab = typeof tabIndex === 'function' ? tabIndex(this.tabs) : tabIndex;
            if (!preventCallbacks && activeTab) {
                onTabChangedCallbacks.forEach(({ callback }) =>
                    callback(activeTab, fromTab, workspaceController as any)
                );
            }
        },

        onTabChanged(
            callback: OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ) {
            const id = generateUniqueId();
            onTabChangedCallbacks.push({ callback, id });
            return {
                id,
                unSubscribe: () => {
                    onTabChangedCallbacks = onTabChangedCallbacks.filter((s) => s.id !== id);
                },
                controller: workspaceController,
            };
        },
    };
    return workspaceController;
}
