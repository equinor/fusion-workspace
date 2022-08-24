import { SidesheetController } from '@equinor/sidesheet';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { DataSourceController } from '@workspace/data-source';
import { GridController } from '@workspace/grid';
import { WorkspaceTabNames } from './tabs';

export interface WorkspaceControllers<TData> {
	grid: GridController<TData>;
	garden: unknown;
	sidesheet: SidesheetController<TData, unknown>;
	filter: unknown;
	view: WorkspaceViewController<WorkspaceTabNames, unknown>;
	dataSource: DataSourceController<TData>;
}
