import { FilterController } from '@equinor/filter';
import { DataSourceController } from '@equinor/workspace-data-source';
import { SidesheetController } from '@equinor/workspace-sidesheet';

import { createContext } from 'react';
import { ReactWorkspaceController } from '../../Types/types';

export type WorkspaceControllerContext<TData, TControllers, TOnClick, TError, TContext> =
    ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>;

export interface WorkspaceControllers<TData> {
    dataSource: DataSourceController<TData>;
    filter: FilterController<TData>;
    sidesheet: SidesheetController<TData>;
}

export const WorkspaceContext = createContext<
    WorkspaceControllerContext<any, WorkspaceControllers<any>, any, any, any>
>({} as WorkspaceControllerContext<any, WorkspaceControllers<any>, any, any, any>);
