import {
    FindTabFunction,
    InternalReactWorkspaceController,
    OnTabChangedCallback,
    Tab
} from '../Types';
import { generateUniqueId } from './utils';

export function onTabChange<TData, TControllers, TOnClick, TError, TContext>(
    reactWorkspaceController: InternalReactWorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    callback: OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
) {
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
}

export function setActiveTab<TData, TControllers, TOnClick, TError, TContext>(
    reactWorkspaceController: InternalReactWorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    tabIndex: string | FindTabFunction<unknown, unknown>,
    preventCallbacks: boolean | undefined
) {
    const fromTab = reactWorkspaceController.activeTab || '';
    reactWorkspaceController.activeTab =
        typeof tabIndex === 'function' ? tabIndex(reactWorkspaceController.tabs) : tabIndex;
    if (!preventCallbacks && reactWorkspaceController.activeTab) {
        reactWorkspaceController.onTabChangedCallbacks.forEach(({ callback }) =>
            callback(reactWorkspaceController.activeTab, fromTab, reactWorkspaceController as any)
        );
    }
}

export function addTab<TData, TControllers, TOnClick, TError, TContext, TController, WSController>(
    reactWorkspaceController: InternalReactWorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    tab: Tab<TController, WSController>
) {
    reactWorkspaceController.tabs.push(tab as Tab<unknown, unknown>);
    tab.config && tab.config(tab.controller, reactWorkspaceController as unknown as WSController);
}
