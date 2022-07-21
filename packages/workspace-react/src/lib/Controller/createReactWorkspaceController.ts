import { reactWorkspaceController } from './reactWorkspaceController';

export function createReactWorkspaceController<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>() {
    return reactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>();
}
