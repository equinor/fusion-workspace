import { GroupingKeys, FieldSettings, OnClickEvents, NodeLabelCallback } from './';

export interface GardenConfig<
	TData,
	TCustomState extends Record<string, any> = Record<string, any>,
	TCustomGroupByKeys extends Record<string, string> = Record<string, string>,
	TContext = unknown
> {
	/** Data to be used for the garden */
	data: TData[];
	/** Primary(Unique) identifier for the data */
	objectIdentifier: keyof TData;
	/**
	 * Callback that takes in an item and returns a label
	 * I.E item => item.name;
	 */
	nodeLabelCallback: NodeLabelCallback<TData>;
	/** The keys used for grouping when the garden loads initially */
	initialGrouping: GroupingKeys<TData>;
	/** The available keys to be used for grouping */
	fieldSettings?: FieldSettings<TData, TCustomGroupByKeys, string>;
	customGroupByKeys?: TCustomGroupByKeys;
	/** Supply functions for handling clicks in the garden */
	clickEvents?: OnClickEvents<TData, TContext>;

	getCustomState?: (data: TData[]) => TCustomState;
}
