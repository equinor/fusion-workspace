import {
    addController,
    click,
    onClick,
    onDataChanged,
    onError,
    onFilteredDataChange as onFilterDataChange,
    setFilteredData,
    setOriginalData,
    throwError,
} from '../functions';
import { setContext } from '../functions/context';

import {
    ContextCallbackSetter,
    Controller,
    MiddlewareConfigFunction,
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    WorkspaceController,
    WorkspaceControllerInternal,
    WorkspaceErrorCallback,
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

    /**
     * Made so its easier to reference the controller with all the generic parameters
     */
    type thisController = WorkspaceControllerInternal<
    TData,
    TControllers,
    TOnClick,
    TError,
    TContext>

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
        addController<TController>(
            controller: Controller<TController, thisController>
        ) {
            addController(workspaceController, controller);
        },
        addMiddleware(middleware: MiddlewareConfigFunction<thisController>) {
            middleware(workspaceController);
        },
        setData(data: TData[], preventCallbacks?: boolean) {
            setOriginalData<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                data,
                preventCallbacks
            );
        },
        setContext(context: ContextCallbackSetter<TContext>) {
            setContext<TData, TControllers, TOnClick, TError, TContext>(
                workspaceController,
                context
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
        onFilteredDataChange(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            return onFilterDataChange<TData, TControllers, TOnClick, TError, TContext>(
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
        click(ev: TOnClick) {
            click<TData, TControllers, TOnClick, TError, TContext>(workspaceController, ev);
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
