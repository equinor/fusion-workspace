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
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
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
	clickEvents?: OnClickEvents<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
	/** Replace built-in components with your own */
	customViews?: CustomVirtualViews<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
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
	getCustomState?: (data: TData[]) => TCustomState;
	intercepters?: GardenDataIntercepters<TData, TExtendedFields>;
};

export type PostGroupBySorting<T, TExtendedFields extends string> = (
	data: GardenGroups<T>,
	keys: (keyof T | TExtendedFields)[]
) => GardenGroups<T>;

export type GardenDataIntercepters<T, TExtendedFields extends string> = {
	postGroupSorting?: PostGroupBySorting<T, TExtendedFields>;
};
