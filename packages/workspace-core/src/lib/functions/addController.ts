import { Controller, WorkspaceControllerInternal } from '../types';

export function addController<
    TData,
    TController,
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
    controller: Controller<TController, WorkspaceControllerInternal<
    TData,
    TControllers,
    TOnClick,
    TError,
    TContext
>>
): void {
    if (workspaceController.controllers[controller.name]) {
        throw new Error('A controller with this name already exists!');
    }

    workspaceController.controllers = {
        ...workspaceController.controllers,
        [controller.name]: controller.controller as TController,
    };

    controller.config &&
        controller.config(controller.controller, workspaceController);
}
