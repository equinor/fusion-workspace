import { DataSourceController } from '@equinor/datasource';
import { FilterController } from '@equinor/filter';
import { SidesheetController } from '@equinor/sidesheet';

import { createContext } from 'react';
import { ReactWorkspaceController } from '../../Types/types';

export type WorkspaceControllerContext<TData> = ReactWorkspaceController<
    TData,
    WorkspaceControllers<TData>,
    any,
    any,
    any
>;

export interface WorkspaceControllers<TData> {
    dataSource: DataSourceController<TData>;
    filter: FilterController<TData>;
    sidesheet: SidesheetController<TData>;
}

export const WorkspaceContext = createContext<WorkspaceControllerContext<any>>(
    {} as WorkspaceControllerContext<any>
);
