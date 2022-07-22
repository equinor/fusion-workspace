import {
    addController,
    notifyOnClick,
    onClick,
    onDataChanged,
    onError,
    onFiletedDataChanges,
    setFilteredData,
    setOriginalData,
    throwError
} from '../functions';

import {
    Controller,
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    WorkspaceController,
    WorkspaceControllerInternal,
    WorkspaceErrorCallback
} from '../types';

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
export function createWorkspaceController<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>(): WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    const workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    > = {
        controllers: {} as TControllers,
        data: [],
        filteredData: [],
        context: undefined,
        onFilteredDataChangedCallbacks: [],
        onDataChangedCallbacks: [],
        onClickCallbacks: [],
        onErrorCallbacks: [],
        addController<TController, WSController>(
            controller: Controller<TController, WSController>
        ) {
            addController<
                TData,
                TController,
                WSController,
                TControllers,
                TOnClick,
                TError,
                TContext
            >(workspaceController, controller);
        },
        setData(data: TData[], preventCallbacks?: boolean) {
            setOriginalData<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                data,
                preventCallbacks
            );
        },
        onDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            return onDataChanged<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                callback
            );
        },
        onFilteredDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            return onFiletedDataChanges<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                callback
            );
        },
        setFilteredData(data: TData[], preventCallbacks?: boolean) {
            setFilteredData<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                data,
                preventCallbacks
            );
        },
        notifyOnClick(ev: TOnClick) {
            notifyOnClick<TData, TControllers, TOnClick, TError, TContext>(workspaceController, ev);
        },
        onClick(
            callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            return onClick<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                callback
            );
        },
        onError(callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>) {
            return onError<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                callback
            );
        },

        throwError(error: TError) {
            throwError<TData, TControllers, TOnClick, TError, TContext>(workspaceController, error);
        },
    };
    return workspaceController;
}
