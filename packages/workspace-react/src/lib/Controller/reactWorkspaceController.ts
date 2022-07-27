import { createWorkspaceController } from '@equinor/workspace-core';
import { addTab, onTabChange, setActiveTab } from '../Function/tab';
import { mergeControllers } from '../Function/utils';
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
    const reactWorkspaceController: InternalReactWorkspaceController<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    > = mergeControllers(
        createWorkspaceController<TData, TControllers, TOnClick, TError, TContext>(),
        {
            tabs: [],
            activeTab: '',
            onTabChangedCallbacks: [],
            addTab: <TController, WSController>(tab: Tab<TController, WSController>) => {
                addTab<TData, TControllers, TOnClick, TError, TContext, TController, WSController>(
                    reactWorkspaceController,
                    tab
                );
            },
            setActiveTab: (
                tabIndex: string | FindTabFunction<unknown, unknown>,
                preventCallbacks?: boolean
            ) => {
                setActiveTab<TData, TControllers, TOnClick, TError, TContext>(
                    reactWorkspaceController,
                    tabIndex,
                    preventCallbacks
                );
            },
            onTabChange: (
                callback: OnTabChangedCallback<TData, TControllers, TOnClick, TError, TContext>
            ) => {
                return onTabChange<TData, TControllers, TOnClick, TError, TContext>(
                    reactWorkspaceController,
                    callback
                );
            },
        }
    );

    return reactWorkspaceController;
}
