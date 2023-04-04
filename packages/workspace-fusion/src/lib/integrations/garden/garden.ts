/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/garden
 */

import {
  CustomGroupView,
  CustomHeaderView,
  CustomItemView,
  CustomVirtualViews,
  GardenConfig as OriginalGardenConfig,
  GardenController,
  GardenGroup,
  GardenGroups,
  GardenItem,
  GardenProp,
  GardenItemWithDepth,
  GetDescription,
  GetItemColor,
  GetIdentifier,
  GroupDescriptionFunc,
  GroupingKeys,
  HorizontalGroupingAccessor,
  GetDisplayName,
  OnClickEvents,
  OnClickGroup,
  OnClickItem,
  PreGroupByFiltering,
  Visuals,
  FindNodeCallback,
  getGardenItems,
  isSubGroup,
  CustomGroupViewProps,
  GetBlockRequestArgs,
  GardenDataSource,
  GardenHeaderGroup,
  GardenMeta,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
} from '@equinor/workspace-garden';

/**Garden utils functions */
export { getGardenItems, isSubGroup };
/**Garden types */
export type {
  CustomGroupViewProps,
  GardenProp,
  CustomGroupView,
  CustomHeaderView,
  CustomItemView,
  CustomVirtualViews,
  GardenConfig,
  GardenController,
  GardenGroup,
  GardenGroups,
  GardenItem,
  GardenItemWithDepth,
  GetDescription,
  GetItemColor,
  GetIdentifier,
  GroupDescriptionFunc,
  GroupingKeys,
  HorizontalGroupingAccessor,
  GetDisplayName,
  OnClickEvents,
  OnClickGroup,
  OnClickItem,
  PreGroupByFiltering,
  Visuals,
  FindNodeCallback as findNodeCallback,
};

/** Override remove config types that is handled internally */
type GardenConfig<TData extends Record<PropertyKey, unknown>, TFilter> = Omit<
  OriginalGardenConfig<TData, TFilter>,
  'data' | 'getIdentifier' | 'clickEvents' | 'getContext' | 'dataSource'
> &
  WorkspaceGardenDataSource<TFilter>;

export type WorkspaceGardenDataSource<TFilter = undefined> = {
  getGardenMeta: (keys: string[], filters: TFilter, signal?: AbortSignal) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, filters: TFilter, signal?: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, filters: TFilter, signal?: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, filters: TFilter, signal?: AbortSignal) => Promise<any[]>;
};
