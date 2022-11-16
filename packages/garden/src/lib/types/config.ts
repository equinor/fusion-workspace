import { GetIdentifier } from '../classes';
import {
	GroupingKeys,
	FieldSettings,
	OnClickEvents,
	GetDisplayName,
	BaseRecordObject,
	CustomVirtualViews,
	Visuals,
	GardenGroups,
} from './';

export type GardenConfig<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	/** Data to be used for the garden */
	data: TData[];
	/**
	 * Primary(Unique) identifier for the data
	 * ```TS
	 * getIdentifier: (item) => item.id
	 * ```
	 */
	getIdentifier: GetIdentifier<TData>;
	/**
	 * Callback that takes in an item and returns a label
	 * ```TS
	 * getDisplayName: (i) => i.title
	 * ```
	 */
	getDisplayName: GetDisplayName<TData>;
	/** The keys used for grouping when the garden loads initially */
	initialGrouping: GroupingKeys<TData>;
	/** The available keys to be used for grouping */
	fieldSettings?: FieldSettings<TData, TExtendedFields, TCustomGroupByKeys>;
	customGroupByKeys?: TCustomGroupByKeys;
	/** Supply functions for handling clicks in the garden */
	clickEvents?: OnClickEvents<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
	/** Replace built-in components with your own */
	customViews?: CustomVirtualViews<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
	/** Visual details */
	visuals?: Visuals<TData, TExtendedFields, TCustomGroupByKeys>;
	/** Function for calculating custom state
	 *
	 * Will re-run everytime data changes
	 * ```TS
	 *
	 * getCustomState: (data: MyType[]) => {
	 * return data.filter((v,i,a) => a.indexOf(i) === v).length / 2
	 * }
	 *
	 * ```
	 */
	getContext?: (data: TData[]) => TContext;
	intercepters?: GardenDataIntercepters<TData, TExtendedFields>;
};

export type PostGroupBySorting<TData extends Record<PropertyKey, unknown>, TExtendedFields extends string = never> = (
	data: GardenGroups<TData>,
	keys: (keyof TData | TExtendedFields)[]
) => GardenGroups<TData>;

export type GardenDataIntercepters<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never
> = {
	postGroupSorting?: PostGroupBySorting<TData, TExtendedFields>;
};
