import { reactWorkspaceController } from './workspace-tab-controller';

export function createReactWorkspaceController<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>() {
    return reactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>();
}
