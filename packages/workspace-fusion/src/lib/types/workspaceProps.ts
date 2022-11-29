import { WorkspaceDataSourceProps } from '../integrations/data-source';
import { WorkspaceFilterProps } from '../integrations/filter';
import { WorkspaceGardenProps } from '../integrations/garden';
import { WorkspaceGridProps } from '../integrations/grid';
import { WorkspaceStatusBarProps } from '../integrations/status-bar';
import { WorkspaceSidesheetProps } from '../integrations/sidesheet';
import { WorkspacePowerBiProps } from '../integrations/power-bi';
import { CustomTab, WorkspaceConfig } from '../types';
import { OnWorkspaceReadyEvent } from '../types/event';

type WorkspaceBaseProps<TData extends Record<PropertyKey, unknown>, TContext extends Record<PropertyKey, unknown>> = {
	workspaceOptions: WorkspaceConfig<TData>;
	customTabs?: CustomTab[];
	onWorkspaceReady?: (ev: OnWorkspaceReadyEvent<TData, TContext>) => void;
	contextOptions?: (filteredData: TData[]) => TContext;
	//TODO: Modules?
};

export type WorkspaceProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = WorkspaceBaseProps<TData, TContext> &
	WorkspaceGardenProps<TData, TContext, TExtendedFields, TCustomGroupByKeys> &
	WorkspaceGridProps<TData> &
	WorkspaceFilterProps<TData> &
	WorkspaceDataSourceProps<TData> &
	WorkspaceStatusBarProps<TData> &
	WorkspaceSidesheetProps<TData> &
	WorkspacePowerBiProps;
