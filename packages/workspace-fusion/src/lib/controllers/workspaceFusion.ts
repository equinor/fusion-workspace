import { Controller, MiddlewareConfigFunction } from '@equinor/workspace-core';
import {
    createReactWorkspaceController,
    ReactWorkspaceController,
    Tab,
} from '@equinor/workspace-react';
import { addDataSourceController } from '../api/dataSource';
import { addDataFilterController } from '../api/filter';
import { addGardenTab } from '../api/garden';
import { ClickEvent } from '../types/click';
import {
    DataSourceConfigurator,
    FilterConfigurator,
    GardenConfigurator,
} from '../types/configurator';
import {
    FusionWorkspaceController,
    FusionWorkspaceControllerInternal,
    FusionWorkspaceControllers,
    FusionWorkspaceError,
} from '../types/types';
import { controllerMerge } from '../utils/merge';

export function createFusionWorkspace<
    TData,
    TContext = any,
    TControllers extends FusionWorkspaceControllers<TData> = FusionWorkspaceControllers<TData>
>(
    setup: (workspaceController: FusionWorkspaceController<TData, TControllers, TContext>) => void,
    context: TContext = {} as TContext
): ReactWorkspaceController<
    TData,
    TControllers,
    ClickEvent<TData>,
    FusionWorkspaceError,
    TContext
> {
    const controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext> =
        controllerMerge(
            createReactWorkspaceController<
                TData,
                TControllers,
                ClickEvent<TData>,
                FusionWorkspaceError,
                TContext
            >(),
            {
                context,
                config: (workspaceConfig) => {
                    controller.activeTab = workspaceConfig.activeTab;
                    return controller;
                },
                addDataSource: (
                    configurator: DataSourceConfigurator<TData, TControllers, TContext>
                ) => {
                    return addDataSourceController(controller, configurator);
                },
                addFilter: (configurator: FilterConfigurator<TData, TControllers, TContext>) => {
                    return addDataFilterController(controller, configurator);
                },
                addGarden: (configurator: GardenConfigurator<TData, TControllers, TContext>) => {
                    return addGardenTab(controller, configurator);
                },
                addGrid: () => {
                    return controller;
                },
                addSideSheet: () => {
                    return controller;
                },
                addCustomTab: <TController, WSController>(tab: Tab<TController, WSController>) => {
                    controller.addTab<TController, WSController>(tab);
                    return controller;
                },
                addCustomController: <
                    TController,
                    TWController extends FusionWorkspaceControllerInternal<
                        TData,
                        TControllers,
                        TContext
                    > = FusionWorkspaceControllerInternal<TData, TControllers, TContext>
                >(
                    customController: Controller<TController, TWController>
                ) => {
                    controller.addController(customController);
                    return controller;
                },
                addCustomMiddleware: <
                    TWController extends FusionWorkspaceControllerInternal<
                        TData,
                        TControllers,
                        TContext
                    > = FusionWorkspaceControllerInternal<TData, TControllers, TContext>
                >(
                    middlewareConfig: MiddlewareConfigFunction<TWController>
                ) => {
                    controller.addMiddleware(middlewareConfig);
                    return controller;
                },
            }
        );
    setup(controller);

    return controller;
}
