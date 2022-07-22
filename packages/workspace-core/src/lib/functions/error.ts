import { WorkspaceControllerInternal } from '../types';

export function throwError<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>(
    workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    >,
    error: TError
) {
    workspaceController.onErrorCallbacks.forEach((s) =>
        s.callback(error, workspaceController as any)
    );
}
