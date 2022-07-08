import { GridController } from '@workspace/ag-grid';
import { DataSourceController } from '@workspace/datasource';
import { FilterController } from '@workspace/filter';
import { GardenController } from '@workspace/garden';
import { SidesheetController } from '@workspace/sidesheet';
import { WorkspaceController } from '@workspace/workspace-core';

export interface FusionWorkspaceController<TData, TOnClick = any, TError = any, TContext = any>
    extends WorkspaceController<TData, TOnClick, TError, TContext> {
    garden: GardenController<TData> | null;
    grid: GridController<TData> | null;
    filter: FilterController<TData> | null;
    sidesheet: SidesheetController<TData> | null;
    dataSource: DataSourceController<TData>;
}
