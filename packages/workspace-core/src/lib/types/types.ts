export type ContextCallbackSetter<TContext> = (context: TContext) => TContext;

export type ConfigFunction<TController, WSController> = (
    controller: TController,
    workspaceController: WSController
) => void;

export type MiddlewareConfigFunction<WSController> = (controller: WSController) => void;

export interface Controller<TControllerType, WSController, TControllers> {
    name: keyof TControllers;
    controller: TControllerType;
    config?: ConfigFunction<TControllerType, WSController>;
}
