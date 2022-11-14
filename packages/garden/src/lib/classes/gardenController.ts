import {
	CustomVirtualViews,
	FieldSettings,
	FindNodeCallback,
	GardenGroups,
	GroupingKeys,
	HorizontalGroupingAccessor,
	GetDisplayName,
	OnClickEvents,
	Visuals,
	GardenConfig,
	BaseRecordObject,
} from '../types';
import { createGarden, defaultItemColor } from '../utils';
import { ReactiveValue } from './reactiveValue';

export type GetIdentifier<TData> = (item: TData) => string;

const NullFunc = () => void 0;

/**
 * @typeParam TData type of your data
 * @typeParam Object interface of custom group by keys
 * @typeParam Object interface for custom state
 * @typeParam Custom user context, store anything here
 */
export class GardenController<
	TData extends Record<PropertyKey, unknown>,
	ExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
	/** The nodes that is currently selected */
	selectedNodes = new ReactiveValue<string[]>([]);

	/** The data used for creating garden groups */
	data = new ReactiveValue<TData[]>([]);

	/** The garden groups */
	groups = new ReactiveValue<GardenGroups<TData>>([]);

	/** Grouping keys for garden */
	grouping = new ReactiveValue<GroupingKeys<TData>>({ horizontalGroupingAccessor: '', verticalGroupingKeys: [] });

	fieldSettings: FieldSettings<TData, ExtendedFields, TCustomGroupByKeys> = {};

	/** Function that takes in an item and returns the string to be shown on the garden package */
	nodeLabelCallback: GetDisplayName<TData>;

	/** Function that returns the primary(unique) identifier for the data type */
	getIdentifier: GetIdentifier<TData>;

	/** The click events that exists in garden */
	clickEvents: OnClickEvents<TData, ExtendedFields, TCustomGroupByKeys, TCustomState, TContext> = {
		onClickGroup: NullFunc,
		onClickItem: NullFunc,
	};

	/** Override visuals and components for garden */
	visuals: Visuals<TData, ExtendedFields, TCustomGroupByKeys> = {
		getItemColor: () => defaultItemColor,
		calculateItemWidth: () => 300,
		getDescription: () => '',
	};

	/** Custom user context */
	context?: TContext;

	/** Custom group by keys */
	customGroupByKeys?: ReactiveValue<TCustomGroupByKeys>;

	/** Override default view */
	customViews: CustomVirtualViews<TData, ExtendedFields, TCustomGroupByKeys, TCustomState, TContext> = {};

	/**
	 * Property for holding calculated information based on data, this property will update every time data is updated
	 */
	customState?: TCustomState;

	getCustomState?: (data: TData[]) => TCustomState;

	/** Updates the custom state if data changes */
	private updateCustomState = (data: TData[]) => {
		if (this.getCustomState) {
			this.customState = this.getCustomState(data);
		}
	};

	constructor(
		{
			getDisplayName,
			getIdentifier,
			initialGrouping: { horizontalGroupingAccessor, verticalGroupingKeys },
			data,
			clickEvents,
			customGroupByKeys,
			fieldSettings,
			getCustomState,
			customViews,
			visuals,
			intercepters,
		}: GardenConfig<TData, ExtendedFields, TCustomGroupByKeys, TCustomState, TContext>,
		getDestructor: (destroy: () => void) => void,
		context?: TContext
	) {
		if (intercepters?.postGroupSorting) {
			this.postGroupSorting = intercepters.postGroupSorting;
		}

		this.getIdentifier = getIdentifier;
		this.nodeLabelCallback = getDisplayName;
		this.data.value = data;
		this.fieldSettings = fieldSettings ?? {};
		this.clickEvents = clickEvents ?? {};

		this.customGroupByKeys = new ReactiveValue<TCustomGroupByKeys>(customGroupByKeys ?? ({} as TCustomGroupByKeys));

		if (visuals) {
			this.visuals = { ...this.visuals, ...visuals };
		}

		if (customViews) {
			this.customViews = { ...this.customViews, ...customViews };
		}

		if (getCustomState) {
			this.getCustomState = getCustomState;
			//init
			this.updateCustomState(data);
			this.data.onChange(this.updateCustomState);
		}

		this.grouping.value.horizontalGroupingAccessor = horizontalGroupingAccessor;
		this.grouping.value.verticalGroupingKeys = verticalGroupingKeys ?? [];
		this.context = context;
		this.groupData();

		this.data.onChange(this.groupData);
		getDestructor(this.#destroy);
	}

	/**
	 * Array of vertical grouping keys.
	 * Grouped in the order of the array.
	 */
	setVerticalGroupingKeys = (keys: string[]) => {
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
		this.groups.setValue(
			this.postGroupSorting(createGarden(this), [
				this.grouping.value.horizontalGroupingAccessor as keyof TData,
				...(this.grouping.value.verticalGroupingKeys as (keyof TData)[]),
			])
		);
	};

	/**
	 * Return the id of the node to be selected, id must match the items objectidentifier.
	 */
	setHighlightedNode = (nodeIdOrCallback: (string | null) | FindNodeCallback<TData>) => {
		const val = typeof nodeIdOrCallback === 'function' ? nodeIdOrCallback(this.data.value) : nodeIdOrCallback;
		this.selectedNodes.setValue(val ? [val] : []);
	};

	/** Function for sorting groups after they have been grouped */
	postGroupSorting = (groups: GardenGroups<TData>, keys: (keyof TData | ExtendedFields)[]): GardenGroups<TData> =>
		groups;

	#destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}
