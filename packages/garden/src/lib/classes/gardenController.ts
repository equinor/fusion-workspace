import { DefaultHeaderView, DefaultGardenItem, DefaultGroupView } from '../components/defaultComponents';
import {
  CustomVirtualViews,
  GardenGroups,
  GroupingKeys,
  HorizontalGroupingAccessor,
  GetDisplayName,
  OnClickEvents,
  Visuals,
  GardenConfig,
  CustomItemView,
  CustomGroupView,
  CustomHeaderView,
} from '../types';
import { defaultItemColor } from '../utils';
import { ReactiveValue } from './reactiveValue';
import { BehaviorSubject } from 'rxjs';

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
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = never
> {
  colorAssistMode$ = new BehaviorSubject<boolean>(false);

  /** The nodes that is currently selected */
  selectedNodes = new ReactiveValue<string[]>([]);

  /** Grouping keys for garden */
  grouping = new ReactiveValue<GroupingKeys<TData>>({ horizontalGroupingAccessor: '', verticalGroupingKeys: [] });

  // fieldSettings: FieldSettings<TData, TExtendedFields, TCustomGroupByKeys> = {};

  /** Function that takes in an item and returns the string to be shown on the garden package */
  getDisplayName: GetDisplayName<TData>;

  /** Function that returns the primary(unique) identifier for the data type */
  getIdentifier: GetIdentifier<TData>;

  /** The click events that exists in garden */
  clickEvents: OnClickEvents<TData, TExtendedFields, TCustomGroupByKeys, TContext> = {
    onClickGroup: NullFunc,
    onClickItem: NullFunc,
  };

  /** Override visuals and components for garden */
  visuals: Visuals<TData, TExtendedFields, TCustomGroupByKeys> = {
    getItemColor: () => defaultItemColor,
    calculateItemWidth: () => 300,
  };

  /** Custom group by keys */
  // customGroupByKeys?: ReactiveValue<TCustomGroupByKeys>;

  /** Override default view */
  customViews: CustomVirtualViews<TData, TExtendedFields, TCustomGroupByKeys, TContext> = {
    customItemView: DefaultGardenItem as React.MemoExoticComponent<
      (args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => JSX.Element
    >,
    customGroupView: DefaultGroupView as React.MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>,
    customHeaderView: DefaultHeaderView as React.MemoExoticComponent<(args: CustomHeaderView) => JSX.Element>,
  };

  /**
   * Property for holding calculated information based on data, this property will update every time data is updated
   */
  context?: TContext;

  #getContext?: (data: TData[]) => TContext;

  /** Updates the custom state if data changes */
  private updateContext = (data: TData[]) => {
    if (this.#getContext) {
      this.context = this.#getContext(data);
    }
  };

  constructor(
    {
      getDisplayName,
      getIdentifier,
      initialGrouping: { horizontalGroupingAccessor, verticalGroupingKeys },
      clickEvents,
      getContext,
      customViews,
      visuals,
    }: GardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TContext>,
    getDestructor?: (destroy: () => void) => void
  ) {
    this.getIdentifier = getIdentifier;
    this.getDisplayName = getDisplayName;

    this.clickEvents = clickEvents ?? {};

    if (visuals) {
      this.visuals = { ...this.visuals, ...visuals };
    }

    if (customViews) {
      this.customViews = { ...this.customViews, ...customViews };
    }

    if (getContext) {
      this.#getContext = getContext;
      //init
      /**TODO: context */
    }

    this.grouping.value.horizontalGroupingAccessor = horizontalGroupingAccessor;
    this.grouping.value.verticalGroupingKeys = verticalGroupingKeys ?? [];

    getDestructor && getDestructor(this.#destroy);
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
  };

  /**
   * Sets the accessor to be used for grouping horizontally.
   */
  setHorizontalGroupingAccessor = (key: HorizontalGroupingAccessor<TData>) => {
    this.grouping.setValue({
      horizontalGroupingAccessor: key,
      verticalGroupingKeys: this.grouping.value.verticalGroupingKeys,
    });
  };

  /**
   * Return the id of the node to be selected, id must match the items objectidentifier.
   */
  setHighlightedNode = (nodeIdOrCallback: string | null) => {
    const val = nodeIdOrCallback;
    this.selectedNodes.setValue(val ? [val] : []);
  };

  #destroy = () => {
    for (const key in this) {
      this[key] = null as unknown as this[Extract<keyof this, string>];
      delete this[key];
    }
  };
}
