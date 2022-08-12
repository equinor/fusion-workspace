import { defaultGardenConfig } from '../test/mockGarden';
import {
	CustomGroupByKeys,
	CustomVirtualViews,
	FieldSettings,
	findNodeCallback,
	GardenGroups,
	GroupingKeys,
	HorizontalGroupingAccessor,
	Key,
	NodeLabelCallback,
	OnClickEvents,
	SetVerticalGroupingKeysArgs,
	Visuals,
	MandatoryConfig,
} from '../types';
import { createGarden, defaultItemColor } from '../utils';
import { ReactiveValue } from './reactiveValue';

const NullFunc = () => void 0;

export class GardenController<TData, TContext = unknown> {
	/** The node that is currently being highlighted */
	highlightedNode = new ReactiveValue<string | null>(null);
	/** The data used for creating garden groups */
	data = new ReactiveValue<TData[]>([]);
	/** The garden groups */
	groups = new ReactiveValue<GardenGroups<TData>>([]);
	/** Grouping keys for garden */
	grouping = new ReactiveValue<GroupingKeys<TData>>({ horizontalGroupingAccessor: '', verticalGroupingKeys: [] });
	fieldSettings: FieldSettings<TData, string> = {};
	/** Function that takes in an item and returns the string to be shown on the garden package */
	nodeLabelCallback: NodeLabelCallback<TData>;
	/** Primary(unique) identifier for the data type */
	objectIdentifier: Key<TData>;
	/** The click events that exists in garden */
	clickEvents: OnClickEvents<TData, TContext> = {
		onClickGroup: NullFunc,
		onClickItem: NullFunc,
	};
	/** Override visuals and components for garden */
	visuals: Visuals<TData> = {
		getCustomItemColor: () => defaultItemColor,
	};
	/** Custom user context */
	context?: TContext;
	/** Custom group by keys */
	customGroupByKeys: CustomGroupByKeys = {};
	/** Override default view */
	customViews: CustomVirtualViews<TData> = {};

	constructor(
		{
			nodeLabelCallback,
			objectIdentifier,
			initialGrouping: { horizontalGroupingAccessor, verticalGroupingKeys },
			data,
			clickEvents,
			customGroupByKeys,
			fieldSettings,
		}: MandatoryConfig<TData, TContext>,
		context?: TContext
	) {
		this.objectIdentifier = objectIdentifier;
		this.nodeLabelCallback = nodeLabelCallback;
		this.data.value = data;
		this.fieldSettings = fieldSettings ?? {};
		this.clickEvents = clickEvents ?? {};
		this.customGroupByKeys = customGroupByKeys ?? {};
		this.grouping.value.horizontalGroupingAccessor = horizontalGroupingAccessor;
		this.grouping.value.verticalGroupingKeys = verticalGroupingKeys ?? [];
		this.context = context;
		this.groupData();
	}

	/**
	 * Array of vertical grouping keys.
	 * Grouped in the order of the array.
	 */
	setVerticalGroupingKeys = (keys: SetVerticalGroupingKeysArgs) => {
		this.grouping.setValue({
			horizontalGroupingAccessor: this.grouping.value.horizontalGroupingAccessor,
			verticalGroupingKeys: keys,
		});
		this.groupData();
	};

	/**
	 * Sets the accessor to be used for grouping horizontally.
	 */
	setHorizontalGroupingAccessor = (key: HorizontalGroupingAccessor<TData>) => {
		this.grouping.setValue({
			horizontalGroupingAccessor: key,
			verticalGroupingKeys: this.grouping.value.verticalGroupingKeys,
		});
		this.groupData();
	};

	/**
	 * Function for grouping data.
	 */
	groupData = () => {
		this.groups.setValue(createGarden(this));
	};

	/**
	 * Return the id of the node to be selected, id must match the items objectidentifier.
	 */
	setHighlightedNode = (nodeIdOrCallback: (string | null) | findNodeCallback<TData>) => {
		this.highlightedNode.setValue(
			typeof nodeIdOrCallback === 'function' ? nodeIdOrCallback(this.data.value) : nodeIdOrCallback
		);
	};
}
