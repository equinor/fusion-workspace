import { createReactWorkspaceController, ReactWorkspaceController } from '@equinor/workspace-react';
import { addDataFilterController, addDataSourceController, addGardenTab } from './api';
import {
    ClickEvent,
    DataSourceConfigurator,
    FusionWorkspaceController,
    FusionWorkspaceControllers,
    FusionWorkspaceError,
    GardenConfigurator
} from './types';

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
    /*
     * Merge createReactWorkspaceController with fusionWorkspaceController features
     * Merge properties of two objects
     */
    function controllerMerge(obj1: any, obj2: any) {
        for (const p in obj2) {
            obj1[p] = obj2[p];
        }
        return obj1;
    }

    const controller: FusionWorkspaceController<TData, TControllers, TContext> = controllerMerge(
        createReactWorkspaceController<
            TData,
            TControllers,
            ClickEvent<TData>,
            FusionWorkspaceError,
            TContext
        >(),
        {
            context,
            addGarden: (configurator: GardenConfigurator<TData, TControllers, TContext>) => {
                return addGardenTab(controller, configurator);
            },
            addGrid: () => {
                return controller;
            },
            addDataSource: (
                configurator: DataSourceConfigurator<TData, TControllers, TContext>
            ) => {
                return addDataSourceController(controller, configurator);
            },
            addFilter: () => {
                return addDataFilterController(controller);
            },
            addSideSheet: () => {
                return controller;
            },
        }
    );

    setup(controller);

    return controller as unknown as ReactWorkspaceController<
        TData,
        TControllers,
        ClickEvent<TData>,
        FusionWorkspaceError,
        TContext
    >;
}
