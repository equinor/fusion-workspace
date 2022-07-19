import { GridController } from '@workspace/ag-grid';
import {
    DataSourceController,
    FetchResponseAsync,
    ResponseParserAsync,
} from '@workspace/datasource';
import { GardenController } from '@workspace/garden';
import { SidesheetController } from '@workspace/sidesheet';
import { createWorkspaceController, WorkspaceController } from '@workspace/workspace-core-old';

interface GardenClickEvent<T> {
    type: 'garden';
    item: T;
    controller: GardenController<T>;
}

interface GridClickEvent<T> {
    type: 'grid';
    item: T;
    controller: GridController<T>;
}

type ClickEvent<T> = GardenClickEvent<T> | GridClickEvent<T>;

export interface FusionWorkspaceControllers<TData> {
    dataSource: DataSourceController<TData>;
    garden: GardenController<TData>;
    grid: GridController<TData>;
    sideSheet: SidesheetController<TData>;
}

export interface FusionWorkspaceError {}

type FusionWorkspaceBase<TData, TControllers, TContext = any> = WorkspaceController<
    TData,
    TControllers,
    ClickEvent<TData>,
    FusionWorkspaceError,
    TContext
>;

export interface FusionWorkspace<TData, TControllers, TContext> {
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>;
    addGarden: () => FusionWorkspace<TData, TControllers, TContext>;
    addGrid: () => FusionWorkspace<TData, TControllers, TContext>;
    addDataSource: (
        configurator: () => {
            dataSource: FetchResponseAsync;
            dataMapper?: ResponseParserAsync<TData>;
        }
    ) => FusionWorkspace<TData, TControllers, TContext>;
    addFilter: () => FusionWorkspace<TData, TControllers, TContext>;
    addSideSheet: () => FusionWorkspace<TData, TControllers, TContext>;
}

function dataSourceConfig<TData, TControllers, TContext>(
    dc: DataSourceController<TData>,
    wc: FusionWorkspaceBase<TData, TControllers, TContext>
) {
    dc.onDataChanged((data: TData[]) => wc.setOriginalData(data));
}

export function createFusionWorkspace<
    TData,
    TControllers extends FusionWorkspaceControllers<TData> = any,
    TContext = any
>(setup: (workspaceController: FusionWorkspace<TData, TControllers, TContext>) => void) {
    const baseController = createWorkspaceController<
        TData,
        TControllers,
        ClickEvent<TData>,
        FusionWorkspaceError,
        TContext
    >();

    const controller: FusionWorkspace<TData, TControllers, TContext> = {
        workspace: baseController,
        addGarden: () => {
            return controller;
        },
        addGrid: () => {
            return controller;
        },
        addDataSource: (
            configurator: (workspaceController: FusionWorkspace<TData, TControllers, TContext>) => {
                dataSource: FetchResponseAsync;
                dataMapper?: ResponseParserAsync<TData>;
            }
        ) => {
            controller.workspace.addController({
                name: 'DataSource',
                controller: new DataSourceController<TData>(configurator(controller).dataSource),
                config: dataSourceConfig,
            });
            return controller;
        },
        addFilter: () => {
            return controller;
        },
        addSideSheet: () => {
            return controller;
        },
    };

    setup(controller);

    if (!controller.workspace.controllers.dataSource) {
        throw Error('No dataSource added');
    }
    return controller;
}

createFusionWorkspace<{ test: string }>((ws) => {
    ws.addDataSource(() => ({
        dataSource: async (signal) => {
            return await fetch('api/test', { signal });
        },
    }));
});
