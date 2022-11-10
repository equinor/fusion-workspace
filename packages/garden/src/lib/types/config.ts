import { GetIdentifier } from '../classes';
import {
	GroupingKeys,
	FieldSettings,
	OnClickEvents,
	NodeLabelCallback as GetDisplayName,
	BaseRecordObject,
	CustomVirtualViews,
	Visuals,
} from './';

export type GardenConfig<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
> = {
	/** Data to be used for the garden */
	data: TData[];
	/**
	 * Primary(Unique) identifier for the data
	 * ```TS
	 * (item) => item.id
	 * ```
	 */
	getIdentifier: GetIdentifier<TData>;
	/**
	 * Callback that takes in an item and returns a label
	 * ```TS
	 * (i) => i.title
	 * ```
	 */
	getDisplayName: GetDisplayName<TData>;
	/** The keys used for grouping when the garden loads initially */
	initialGrouping: GroupingKeys<TData>;
	/** The available keys to be used for grouping */
	fieldSettings?: FieldSettings<TData, string, TCustomGroupByKeys>;
	customGroupByKeys?: TCustomGroupByKeys;
	/** Supply functions for handling clicks in the garden */
	clickEvents?: OnClickEvents<TData, TCustomGroupByKeys, TCustomState, TContext>;
	/** Replace built-in components with your own */
	customViews?: CustomVirtualViews<TData>;
	/** Visual details */
	visuals?: Visuals<TData>;
	/** Function for calculating custom state
	 *
	 * Will re-run everytime data changes
	 * ```TS
	 * function getCustomState(data: MyType[]){
	 * return data.filter((v,i,a) => a.indexOf(i) === v).length / 2
	 * }
	 * ```
	 */
	getCustomState?: (data: TData[]) => TCustomState;
};
