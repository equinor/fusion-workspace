import { GardenController } from '../classes';
import { GetIdentifier } from '../classes';
import { GroupingKeys, FieldSettings, OnClickEvents, NodeLabelCallback, BaseRecordObject } from './';

export type GardenConfig<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
> = {
	/** Data to be used for the garden */
	data: TData[];
	/** Primary(Unique) identifier for the data */
	getIdentifier: GetIdentifier<TData>;
	/**
	 * Callback that takes in an item and returns a label
	 * I.E item => item.name;
	 */
	nodeLabelCallback: NodeLabelCallback<TData>;
	/** The keys used for grouping when the garden loads initially */
	initialGrouping: GroupingKeys<TData>;
	/** The available keys to be used for grouping */
	fieldSettings?: FieldSettings<TData, string, TCustomGroupByKeys>;
	customGroupByKeys?: TCustomGroupByKeys;
	/** Supply functions for handling clicks in the garden */
	clickEvents?: OnClickEvents<TData, TCustomGroupByKeys, TCustomState, TContext>;

	getCustomState?: (data: TData[]) => TCustomState;
	configFunction?: (controller: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>) => void;
};
