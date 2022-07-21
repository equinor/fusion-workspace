import { DataSourceController } from '@equinor/datasource';
import { createReactWorkspaceController, ReactWorkspaceController } from '@equinor/workspace-react';
import { dataSourceConfig } from './config';
import {
    ClickEvent,
    DataSourceConfigurator,
    FusionWorkspaceController,
    FusionWorkspaceControllers,
    FusionWorkspaceError
} from './types';

// export function createFusionWorkspace<
//     TData,
//     TControllers extends FusionWorkspaceControllers<TData>,
//     TContext
// >(
//     // setup: (workspaceController: FusionWorkspaceController<TData, TControllers, TContext>) => void,
//     context: TContext = {} as TContext
// ): FusionWorkspaceController<TData, TControllers, TContext> {
//     const ws = createFusionWorkspaceController<TData, TControllers, TContext>(context);
//     // setup(ws);
//     return ws;
// }

// interface Config<TData> {
//     dataSource?: DataSourceConfig<TData>;
// }

export function createFusionWorkspace<
    TData,
    TControllers extends FusionWorkspaceControllers<TData>,
    TContext
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
     * Merge properties of two objects
     */
    function merge(obj1: any, obj2: any) {
        for (const p in obj2) {
            obj1[p] = obj2[p];
        }
        return obj1;
    }

    const workspaceController: FusionWorkspaceController<TData, TControllers, TContext> = merge(
        createReactWorkspaceController<
            TData,
            TControllers,
            ClickEvent<TData>,
            FusionWorkspaceError,
            TContext
        >(),
        {
            context,

            addGarden: () => {
                return workspaceController;
            },
            addGrid: () => {
                return workspaceController;
            },
            addDataSource: (
                configurator: DataSourceConfigurator<TData, TControllers, TContext>
            ) => {
                workspaceController.addController<
                    DataSourceController<TData>,
                    FusionWorkspaceController<TData, TControllers, TContext>
                >({
                    name: 'dataSource',
                    controller: new DataSourceController(
                        configurator(workspaceController).dataSource
                    ),
                    config: dataSourceConfig,
                });
                return workspaceController;
            },
            addFilter: () => {
                return workspaceController;
            },
            addSideSheet: () => {
                return workspaceController;
            },
        }
    );

    setup(workspaceController);

    return workspaceController as unknown as ReactWorkspaceController<
        TData,
        TControllers,
        ClickEvent<TData>,
        FusionWorkspaceError,
        TContext
    >;
}
