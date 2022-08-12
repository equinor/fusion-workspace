import { Key, GroupingKeys, FieldSettings, OnClickEvents, NodeLabelCallback, CustomGroupByKeys } from './';

export interface MandatoryConfig<TData, TContext> {
	/** Data to be used for the garden */
	data: TData[];
	/** Primary(Unique) identifier for the data */
	objectIdentifier: Key<TData>;
	/**
	 * Callback that takes in an item and returns a label
	 * I.E item => item.name;
	 */
	nodeLabelCallback: NodeLabelCallback<TData>;
	/** The keys used for grouping when the garden loads initially */
	initialGrouping: GroupingKeys<TData>;
	/** The available keys to be used for grouping */
	fieldSettings?: FieldSettings<TData, string>;
	customGroupByKeys?: CustomGroupByKeys;
	/** Supply functions for handling clicks in the garden */
	clickEvents?: OnClickEvents<TData, TContext>;
}
