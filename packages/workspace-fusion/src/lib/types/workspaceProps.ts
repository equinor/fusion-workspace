import { WorkspaceGardenProps } from '../integrations/garden';
import { WorkspaceGridProps } from '../integrations/grid';
import { WorkspaceStatusBarProps } from '../integrations/status-bar';
import { WorkspaceSidesheetProps } from '../integrations/sidesheet';
import { WorkspacePowerBiProps } from '../integrations/power-bi';
import { WorkspaceFilterProps } from '../integrations/filter';
import { FusionWorkspaceModule, WorkspaceConfig } from '../types';
import { FilterState, FilterStateGroup } from '@equinor/workspace-filter';

type WorkspaceBaseProps<TData extends Record<PropertyKey, unknown>> = {
  workspaceOptions: WorkspaceConfig<TData>;
  currentBookmark?: Bookmark | null | undefined;
  modules: FusionWorkspaceModule[];
};

export type WorkspaceProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
> = WorkspaceBaseProps<TData> &
  WorkspaceGardenProps<TData, TContext, FilterState> &
  WorkspaceGridProps<TData, FilterState> &
  WorkspaceFilterProps &
  WorkspaceStatusBarProps<FilterState> &
  WorkspaceSidesheetProps<TData> &
  WorkspacePowerBiProps;

export type Bookmark = {
  tab: string;
  payload: Partial<{
    powerBi: never;
    grid: never;
    filter: FilterBookmark;
    garden: GardenBookmark;
  }>;
};

export type GardenBookmark = {
  gardenKey: string;
  groupByKeys: string[];
};

export type FilterBookmark = {
  uncheckedValues: FilterStateGroup[];
};
