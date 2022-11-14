/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/garden
 */

import {
	CustomGroupView,
	CustomHeaderView,
	CustomItemView,
	CustomVirtualViews,
	FieldSetting,
	FieldSettings,
	GardenConfig as OriginalGardenConfig,
	GardenController,
	GardenGroup,
	GardenGroups,
	GardenItem,
	GardenItemWithDepth,
	GetDescription,
	GetItemColor,
	GetIdentifier,
	GetKeyFunction,
	GetSortFunction,
	GroupDescriptionFunc,
	GroupingKeys,
	HighlightHorizontalColumn,
	HorizontalGroupingAccessor,
	ItemWidthCalculation,
	GetDisplayName,
	OnClickEvents,
	OnClickGroup,
	OnClickItem,
	PreGroupByFiltering,
	Visuals,
	FindNodeCallback,
	getGardenItems,
	isSubGroup,
	GardenDataIntercepters,
	CustomGroupViewProps,
	PostGroupBySorting,
} from '@equinor/workspace-garden';

/**Garden utils functions */
export { getGardenItems, isSubGroup };
/**Garden types */
export type {
	CustomGroupViewProps,
	GardenDataIntercepters,
	PostGroupBySorting,
	CustomGroupView,
	CustomHeaderView,
	CustomItemView,
	CustomVirtualViews,
	FieldSetting,
	FieldSettings,
	GardenConfig,
	GardenController,
	GardenGroup,
	GardenGroups,
	GardenItem,
	GardenItemWithDepth,
	GetDescription,
	GetItemColor,
	GetIdentifier,
	GetKeyFunction,
	GetSortFunction,
	GroupDescriptionFunc,
	GroupingKeys,
	HighlightHorizontalColumn,
	HorizontalGroupingAccessor,
	ItemWidthCalculation,
	GetDisplayName,
	OnClickEvents,
	OnClickGroup,
	OnClickItem,
	PreGroupByFiltering,
	Visuals,
	FindNodeCallback as findNodeCallback,
};

/** Override remove config types that is handled internally */
type GardenConfig<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = Omit<
	OriginalGardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
	'data' | 'getIdentifier' | 'clickEvents'
>;
