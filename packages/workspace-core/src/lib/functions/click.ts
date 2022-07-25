import { WorkspaceControllerInternal } from '../types';

export function click<
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
    ev: TOnClick
) {
    workspaceController.onClickCallbacks.forEach((s) => s.callback(ev, workspaceController as any));
}
