import {
    Controller,
    OnCallbackSet,
    OnClickCallback,
    OnDataChangedCallback,
    WorkspaceController,
    WorkspaceControllerInternal,
    WorkspaceErrorCallback
} from './types';

export function createWorkspaceController<
    TData,
    TControllers extends Record<string, any>,
    TOnClick = any,
    TError = any,
    TContext = any
>(): WorkspaceController<TData, TControllers, TOnClick, TError, TContext> {
    /**
     * Internal Function for creating unique id
     * @memberof createWorkspaceController
     */
    const generateUniqueId = (): string => {
        return (Math.random() * 16).toString();
    };

    const workspaceController: WorkspaceControllerInternal<
        TData,
        TControllers,
        TOnClick,
        TError,
        TContext
    > = {
        controllers: {} as TControllers,
        originalData: [],
        filteredData: [],
        context: undefined,
        onFilteredDataChangedCallbacks: [],
        onOriginalDataChangedCallbacks: [],
        onClickCallbacks: [],
        onErrorCallbacks: [],
        addController<TController, WSController>(
            controller: Controller<TController, WSController>
        ) {
            if (workspaceController.controllers[controller.name]) {
                throw new Error('Controller already exist!');
            }

            workspaceController.controllers = {
                ...workspaceController.controllers,
                [controller.name]: controller.controller as TController,
            };

            controller.config &&
                controller.config(
                    controller.controller,
                    workspaceController as unknown as WSController
                );
        },
        setOriginalData(data: TData[], preventCallbacks?: boolean) {
            this.originalData = data;
            if (!preventCallbacks) {
                workspaceController.onOriginalDataChangedCallbacks.forEach(({ callback }) =>
                    callback(data, workspaceController as any)
                );
            }
        },
        onOriginalDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            workspaceController.onOriginalDataChangedCallbacks.push({
                callback,
                id,
            });
            return {
                id,
                unSubscribe: () => {
                    workspaceController.onOriginalDataChangedCallbacks =
                        workspaceController.onOriginalDataChangedCallbacks.filter(
                            (s) => s.id !== id
                        );
                },
            };
        },
        onFilteredDataChanged(
            callback: OnDataChangedCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            workspaceController.onFilteredDataChangedCallbacks.push({ callback, id });
            return {
                id,
                unSubscribe: () => {
                    workspaceController.onFilteredDataChangedCallbacks =
                        workspaceController.onFilteredDataChangedCallbacks.filter(
                            (s) => s.id !== id
                        );
                },
            };
        },

        setFilteredData(data: TData[], preventCallbacks?: boolean) {
            workspaceController.filteredData = data;
            if (!preventCallbacks) {
                workspaceController.onFilteredDataChangedCallbacks.forEach(({ callback }) =>
                    callback(workspaceController.filteredData, workspaceController as any)
                );
            }
        },
        notifyOnClick(ev: TOnClick) {
            workspaceController.onClickCallbacks.forEach((s) =>
                s.callback(ev, workspaceController as any)
            );
        },
        onClick(
            callback: OnClickCallback<TData, TControllers, TOnClick, TError, TContext>
        ): OnCallbackSet {
            const id = generateUniqueId();
            workspaceController.onClickCallbacks.push({
                callback,
                id,
            });

            return {
                id,
                unSubscribe: () => {
                    workspaceController.onClickCallbacks =
                        workspaceController.onClickCallbacks.filter((s) => s.id !== id);
                },
            };
        },
        onError(callback: WorkspaceErrorCallback<TData, TControllers, TOnClick, TError, TContext>) {
            const id = generateUniqueId();
            workspaceController.onErrorCallbacks.push({
                callback,
                id,
            });

            return {
                id,
                unSubscribe: () => {
                    workspaceController.onClickCallbacks =
                        workspaceController.onClickCallbacks.filter((s) => s.id !== id);
                },
            };
        },

        throwError(error: TError) {
            workspaceController.onErrorCallbacks.forEach((s) =>
                s.callback(error, workspaceController as any)
            );
        },
    };
    return workspaceController;
}
