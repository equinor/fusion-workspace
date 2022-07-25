import { ContextFunction, WorkspaceControllerInternal } from '../types';

export function setContext<
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
    context: ContextFunction<TContext>
) {
    workspaceController.context = context(workspaceController.context || ({} as TContext));
}
