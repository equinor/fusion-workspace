import { GetIdentifier } from '../classes';
import { GardenDataSource } from '../components';
import { GroupingKeys, OnClickEvents, GetDisplayName, CustomVirtualViews, Visuals } from './';

export type GardenConfig<TData extends Record<PropertyKey, unknown>, TContext = undefined> = {
  dataSource: GardenDataSource<TContext>;
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
  // fieldSettings?: FieldSettings<TData, TExtendedFields, TCustomGroupByKeys>;
  /** Supply functions for handling clicks in the garden */
  clickEvents?: OnClickEvents<TData>;
  /** Replace built-in components with your own */
  customViews?: CustomVirtualViews<TData>;
  /** Visual details */
  visuals?: Visuals<TData>;
};
