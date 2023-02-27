import { WorkspaceDataSourceProps } from '../integrations/data-source';
import { WorkspaceFilterProps } from '../integrations/filter';
import { WorkspaceGardenProps } from '../integrations/garden';
import { WorkspaceGridProps } from '../integrations/grid';
import { WorkspaceStatusBarProps } from '../integrations/status-bar';
import { WorkspaceSidesheetProps } from '../integrations/sidesheet';
import { WorkspacePowerBiProps } from '../integrations/power-bi';
import { CustomTab, FusionWorkspaceModule, WorkspaceConfig } from '../types';
import { BaseEvent } from '@equinor/workspace-core';

type WorkspaceBaseProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never
> = {
	workspaceOptions: WorkspaceConfig<TData>;
	customTabs?: CustomTab[];
	contextOptions?: (filteredData: TData[]) => TContext;
	modules?: any[];
	//TODO: Modules?
};

export type WorkspaceProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = WorkspaceBaseProps<TData, TContext, TCustomSidesheetEvents> &
	WorkspaceGardenProps<TData, TContext, TExtendedFields, TCustomGroupByKeys> &
	WorkspaceGridProps<TData> &
	WorkspaceFilterProps<TData> &
	WorkspaceDataSourceProps<TData> &
	WorkspaceStatusBarProps<TData> &
	WorkspaceSidesheetProps<TData, TContext, TCustomSidesheetEvents> &
	WorkspacePowerBiProps;
