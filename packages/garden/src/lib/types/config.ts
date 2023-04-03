import { GetIdentifier } from '../classes';
import { GroupingKeys, OnClickEvents, GetDisplayName, CustomVirtualViews, Visuals } from './';

export type GardenConfig<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
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
  customViews?: CustomVirtualViews<TData, TContext>;
  /** Visual details */
  visuals?: Visuals<TData>;
  /** Function for calculating custom state
   *
   * Will re-run everytime data changes
   * ```TS
   *
   * getContext: (data: MyType[]) => {
   * return data.filter((v,i,a) => a.indexOf(i) === v).length / 2
   * }
   *
   * ```
   */
  getContext?: (data: TData[]) => TContext;
};
