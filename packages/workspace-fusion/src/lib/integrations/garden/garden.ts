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
	GetGroupDescription,
	GetIdentifier,
	GetKeyFunction,
	GetSortFunction,
	GroupDescriptionFunc,
	GroupingKeys,
	HighlightHorizontalColumn,
	HorizontalGroupingAccessor,
	ItemWidthCalculation,
	NodeLabelCallback,
	OnClickEvents,
	OnClickGroup,
	OnClickItem,
	PreGroupByFiltering,
	Visuals,
	findNodeCallback,
	getGardenItems,
	isSubGroup,
} from '@equinor/workspace-garden';

/**Garden utils functions */
export { getGardenItems, isSubGroup };
/**Garden types */
export type {
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
	GetDescription as GetCustomDescription,
	GetItemColor as GetCustomItemColor,
	GetGroupDescription as GetGroupDescriptionFunc,
	GetIdentifier,
	GetKeyFunction,
	GetSortFunction,
	GroupDescriptionFunc,
	GroupingKeys,
	HighlightHorizontalColumn,
	HorizontalGroupingAccessor,
	ItemWidthCalculation,
	NodeLabelCallback,
	OnClickEvents,
	OnClickGroup,
	OnClickItem,
	PreGroupByFiltering,
	Visuals,
	findNodeCallback,
};

/** Override remove config types that is handled internally */
type GardenConfig<
	TData extends Record<PropertyKey, unknown>,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = Omit<
	OriginalGardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>,
	'data' | 'getIdentifier' | 'clickEvents'
>;
