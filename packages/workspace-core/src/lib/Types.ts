import { WorkspaceController } from './WorkspaceController';

export interface Controller<ControllerType, WorkspaceController> {
    name: string;
    controller: ControllerType;
    binder?: BinderFunction<ControllerType, WorkspaceController>;
}

export type BinderFunction<Controller, WorkspaceController> = (
    controller: Controller,
    workspaceController: WorkspaceController
) => void;

export interface Callback<T> {
    id: string;
    callback: T;
}

export type OnDataChangedCallback<T> = (data: T[], controller: WorkspaceController<T>) => void;

export type OnTabChangedCallback<T> = (
    to: string | undefined,
    from: string | undefined,
    controller: WorkspaceController<T>
) => void;

export interface OnCallbackSet<T> {
    id: string;
    unSubscribe: () => void;
    controller: WorkspaceController<T>;
}

export type OnClickCallback<WorkspaceType, TOnClick> = (
    ev: TOnClick,
    controller: WorkspaceController<WorkspaceType>
) => void;

export type ErrorCallback<TData, TError> = (
    error: TError,
    controller: WorkspaceController<TData>
) => void;

export type FindTabFunction = (tabs: string[]) => string;
