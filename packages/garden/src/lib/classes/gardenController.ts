import { DefaultHeaderView, DefaultGardenItem, DefaultGroupView } from '../components/defaultComponents';
import {
  CustomVirtualViews,
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
export class GardenController<TData extends Record<PropertyKey, unknown>, TContext> {
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
  clickEvents: OnClickEvents<TData> = {
    onClickGroup: NullFunc,
    onClickItem: NullFunc,
  };

  /** Override visuals and components for garden */
  visuals: Visuals<TData> = {
    getItemColor: () => defaultItemColor,
  };

  /** Custom group by keys */
  // customGroupByKeys?: ReactiveValue<TCustomGroupByKeys>;

  /** Override default view */
  customViews: CustomVirtualViews<TData> = {
    customItemView: DefaultGardenItem as React.MemoExoticComponent<(args: CustomItemView<TData>) => JSX.Element>,
    customGroupView: DefaultGroupView as React.MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>,
    customHeaderView: DefaultHeaderView as React.MemoExoticComponent<(args: CustomHeaderView) => JSX.Element>,
  };

  constructor({
    getDisplayName,
    getIdentifier,
    initialGrouping: { horizontalGroupingAccessor, verticalGroupingKeys },
    clickEvents,
    customViews,
    visuals,
  }: GardenConfig<TData, any>) {
    this.getIdentifier = getIdentifier;
    this.getDisplayName = getDisplayName;

    this.clickEvents = clickEvents ?? {};

    if (visuals) {
      this.visuals = { ...this.visuals, ...visuals };
    }

    if (customViews) {
      this.customViews = { ...this.customViews, ...customViews };
    }

    this.grouping.value.horizontalGroupingAccessor = horizontalGroupingAccessor;
    this.grouping.value.verticalGroupingKeys = verticalGroupingKeys ?? [];
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
}
