import { WorkspaceControllerInternal } from '../types';

export function setFilteredData<
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
    data: TData[],
    preventCallbacks?: boolean
) {
    workspaceController.filteredData = data;
    if (!preventCallbacks) {
        workspaceController.onFilteredDataChangedCallbacks.forEach(({ callback }) =>
            callback(workspaceController.filteredData, workspaceController as any)
        );
    }
}

export function setOriginalData<
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
    data: TData[],
    preventCallbacks?: boolean
) {
    workspaceController.data = data;
    if (!preventCallbacks) {
        workspaceController.onDataChangedCallbacks.forEach(({ callback }) =>
            callback(data, workspaceController as any)
        );
    }
}
