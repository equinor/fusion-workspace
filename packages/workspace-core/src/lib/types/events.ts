import { WorkspaceController } from "./types";

export type OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext> = (
    data: TData[],
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;

export type OnClickCallback<TData, TControllers, TOnClick, TError, TContext> = (
    ev: TOnClick,
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;

export type WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext> = (
    error: TError,
    controller: WorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) => void;
