import {
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    WorkspaceControllerInternal,
    WorkspaceErrorCallback,
} from '../types';

import { generateUniqueId } from './generateUniqueId';

export function onDataChanged<
    TData,
    TControllers extends Record<string, any>,
    TOnClick,
    TError,
    TContext
>(
    workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
): OnCallbackSet {
    const id = generateUniqueId();
    workspaceController.onDataChangedCallbacks.push({
        callback,
        id,
    });
    return {
        id,
        unSubscribe: () => {
            workspaceController.onDataChangedCallbacks =
                workspaceController.onDataChangedCallbacks.filter((s) => s.id !== id);
        },
    };
}

export function onFilteredDataChange<
    TData,
    TControllers extends Record<string, any>,
    TOnClick,
    TError,
    TContext
>(
    workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
): OnCallbackSet {
    const id = generateUniqueId();
    workspaceController.onFilteredDataChangedCallbacks.push({ callback, id });
    return {
        id,
        unSubscribe: () => {
            workspaceController.onFilteredDataChangedCallbacks =
                workspaceController.onFilteredDataChangedCallbacks.filter((s) => s.id !== id);
        },
    };
}

export function onClick<
    TData,
    TControllers extends Record<string, any>,
    TOnClick,
    TError,
    TContext
>(
    workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
): OnCallbackSet {
    const id = generateUniqueId();
    workspaceController.onClickCallbacks.push({
        callback,
        id,
    });

    return {
        id,
        unSubscribe: () => {
            workspaceController.onClickCallbacks = workspaceController.onClickCallbacks.filter(
                (s) => s.id !== id
            );
        },
    };
}

export function onError<
    TData,
    TControllers extends Record<string, any>,
    TOnClick,
    TError,
    TContext
>(
    workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>
): OnCallbackSet {
    const id = generateUniqueId();
    workspaceController.onErrorCallbacks.push({
        callback,
        id,
    });

    return {
        id,
        unSubscribe: () => {
            workspaceController.onErrorCallbacks = workspaceController.onErrorCallbacks.filter(
                (s) => s.id !== id
            );
        },
    };
}
