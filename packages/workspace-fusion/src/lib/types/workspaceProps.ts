import { WorkspaceGardenProps } from '../integrations/garden';
import { WorkspaceGridProps } from '../integrations/grid';
import { WorkspaceStatusBarProps } from '../integrations/status-bar';
import { WorkspaceSidesheetProps } from '../integrations/sidesheet';
import { WorkspacePowerBiProps } from '../integrations/power-bi';
import { WorkspaceFilterProps } from '../integrations/filter';
import { FusionWorkspaceModule, WorkspaceConfig } from '../types';
import { FilterState, FilterStateGroup } from '@equinor/workspace-filter';
import { MutableRefObject } from 'react';

type WorkspaceBaseProps<TData extends Record<PropertyKey, unknown>> = {
  workspaceOptions: WorkspaceConfig<TData>;
  currentBookmark?: Bookmark | null | undefined;
  onBookmarkChange?: (bookmark: Partial<Bookmark>) => void;
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
  payload: Payload;
};

export type Payload = Partial<{
  powerBi: PowerBiBookmark;
  grid: never;
  filter: FilterBookmark;
  garden: GardenBookmark;
}>;

export type PowerBiBookmark = {
  bookmarkState: string;
  name: string;
  displayName: string;
  mainPage: string;
  mainPageDisplayName: string;
};

export type GardenBookmark = {
  groupingKeys: string[];
  dateVariant: string | null;
  timeInterval: string | null;
};

export type FilterBookmark = {
  state: FilterState;
};
