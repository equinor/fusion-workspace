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
  GardenGroup,
  GardenGroups,
  GardenItem,
  GardenItemWithDepth,
  GetDescription,
  GetIdentifier,
  GroupDescriptionFunc,
  GetDisplayName,
  OnClickEvents,
  OnClickGroup,
  OnClickItem,
  Visuals,
  FindNodeCallback,
  isSubGroup,
  GetBlockRequestArgs,
  GardenDataSource,
  GardenHeaderGroup,
  GardenMeta,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
  GardenMetaRequest,
} from '@equinor/workspace-garden';

/**Garden utils functions */
export { isSubGroup };
/**Garden types */
export type {
  GardenDataSource,
  CustomGroupView,
  CustomHeaderView,
  CustomItemView,
  CustomVirtualViews,
  GardenConfig,
  GardenGroup,
  GardenGroups,
  GardenItem,
  GardenItemWithDepth,
  GetDescription,
  GetIdentifier,
  GroupDescriptionFunc,
  GetDisplayName,
  OnClickEvents,
  OnClickGroup,
  OnClickItem,
  Visuals,
  FindNodeCallback as findNodeCallback,
};

/** Override remove config types that is handled internally */
type GardenConfig<TData extends Record<PropertyKey, unknown>, TFilter> = Omit<
  OriginalGardenConfig<TData, TFilter>,
  'data' | 'getIdentifier' | 'clickEvents' | 'getContext' | 'dataSource'
> &
  WorkspaceGardenDataSource<TData, TFilter>;

export type WorkspaceGardenDataSource<TData extends Record<PropertyKey, unknown>, TFilter = undefined> = {
  getGardenMeta: (request: GardenMetaRequest, filters: TFilter, signal?: AbortSignal) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, filters: TFilter, signal?: AbortSignal) => Promise<GardenGroup<TData>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, filters: TFilter, signal?: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, filters: TFilter, signal?: AbortSignal) => Promise<TData[]>;
};
