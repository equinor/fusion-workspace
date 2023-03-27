import { GetIdentifier } from '../classes';
import {
  GroupingKeys,
  FieldSettings,
  OnClickEvents,
  GetDisplayName,
  CustomVirtualViews,
  Visuals,
  GardenGroups,
} from './';

export type GardenConfig<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
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
  fieldSettings?: FieldSettings<TData, TExtendedFields, TCustomGroupByKeys>;
  customGroupByKeys?: TCustomGroupByKeys;
  /** Supply functions for handling clicks in the garden */
  clickEvents?: OnClickEvents<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
  /** Replace built-in components with your own */
  customViews?: CustomVirtualViews<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
  /** Visual details */
  visuals?: Visuals<TData, TExtendedFields, TCustomGroupByKeys>;
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
