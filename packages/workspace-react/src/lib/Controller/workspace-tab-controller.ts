import { createWorkspaceController } from '@equinor/workspace-core';
import {
    FindTabFunction,
    InternalReactWorkspaceController,
    OnTabChangedCallback,
    ReactWorkspaceController,
    Tab,
} from '../Types/types';

export function reactWorkspaceController<
    TData,
    TControllers,
    TOnClick,
    TError,
    TContext
>(): ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /**
     * Internal Function for creating unique id
     * @memberof reactWorkspaceController
     */
    const generateUniqueId = (): string => {
        return (Math.random() * 16).toString();
    };

    /*
     * Merge properties of two objects
     */
    function merge(obj1: any, obj2: any) {
        for (const p in obj2) {
            obj1[p] = obj2[p];
        }
        return obj1;
    }

    const reactWorkspaceController: InternalReactWorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    > = merge(createWorkspaceController<TData, TControllers, TOnClick, TError, TContext>(), {
        tabs: [],
        activeTab: 'garden',
        onTabChangedCallbacks: [],
        addTab: <TController, WSController>(tab: Tab<TController, WSController>) => {
            reactWorkspaceController.tabs.push(tab as Tab<unknown, unknown>);
            tab.config &&
                tab.config(tab.controller, reactWorkspaceController as unknown as WSController);
        },
        setActiveTab: (
            tabIndex: string | FindTabFunction<unknown, unknown>,
            preventCallbacks?: boolean
        ) => {
            const fromTab = reactWorkspaceController.activeTab || '';
            reactWorkspaceController.activeTab =
                typeof tabIndex === 'function' ? tabIndex(reactWorkspaceController.tabs) : tabIndex;
            if (!preventCallbacks && reactWorkspaceController.activeTab) {
                reactWorkspaceController.onTabChangedCallbacks.forEach(({ callback }) =>
                    callback(
                        reactWorkspaceController.activeTab,
                        fromTab,
                        reactWorkspaceController as any
                    )
                );
            }
        },
        onTabChanged: (
            callback: OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ) => {
            const id = generateUniqueId();
            reactWorkspaceController.onTabChangedCallbacks.push({ callback, id });
            return {
                id,
                unSubscribe: () => {
                    reactWorkspaceController.onTabChangedCallbacks =
                        reactWorkspaceController.onTabChangedCallbacks.filter((s) => s.id !== id);
                },
                controller: reactWorkspaceController,
            };
        },
    });

    return reactWorkspaceController;
}
