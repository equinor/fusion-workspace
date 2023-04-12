import { WorkspaceGardenProps } from '../integrations/garden';
import { WorkspaceGridProps } from '../integrations/grid';
import { WorkspaceStatusBarProps } from '../integrations/status-bar';
import { WorkspaceSidesheetProps } from '../integrations/sidesheet';
import { WorkspacePowerBiProps } from '../integrations/power-bi';
import { WorkspaceFilterProps } from '../integrations/filter';
import { CustomTab, FusionWorkspaceModule, WorkspaceConfig } from '../types';
import { BaseEvent } from '@equinor/workspace-core';
import { FilterStateGroup } from '@equinor/workspace-filter';

type WorkspaceBaseProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never
> = {
  workspaceOptions: WorkspaceConfig<TData>;
  customTabs?: CustomTab[];
  modules?: FusionWorkspaceModule[];
};

export type WorkspaceProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TCustomSidesheetEvents extends BaseEvent = never
> = WorkspaceBaseProps<TData, TContext, TCustomSidesheetEvents> &
  WorkspaceGardenProps<TData, TContext, FilterStateGroup[]> &
  WorkspaceGridProps<TData, FilterStateGroup[]> &
  WorkspaceFilterProps &
  WorkspaceStatusBarProps<FilterStateGroup[]> &
  WorkspaceSidesheetProps<TData, TContext, TCustomSidesheetEvents> &
  WorkspacePowerBiProps;
