import { Controller, WorkspaceControllerInternal } from '../types';

export function addController<
    TData,
    TController,
    WSController,
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
    controller: Controller<TController, WSController>
): void {
    if (workspaceController.controllers[controller.name]) {
        throw new Error('Controller already exist!');
    }

    workspaceController.controllers = {
        ...workspaceController.controllers,
        [controller.name]: controller.controller as TController,
    };

    controller.config &&
        controller.config(controller.controller, workspaceController as unknown as WSController);
}
