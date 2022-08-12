import { Key, GroupingKeys, FieldSettings, OnClickEvents, NodeLabelCallback, CustomGroupByKeys } from './';

export interface MandatoryConfig<TData, TContext> {
	data: TData[];
	objectIdentifier: Key<TData>;
	nodeLabelCallback: NodeLabelCallback<TData>;
	initialGrouping: GroupingKeys<TData>;
	fieldSettings?: FieldSettings<TData, string>;
	customGroupByKeys?: CustomGroupByKeys;
	clickEvents?: OnClickEvents<TData, TContext>;
}
