import { GardenController } from '../classes';
import { GardenGroup } from '.';

/** Function signature for clicking an item */
export type OnClickItem<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = (item: TData, controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => void;
/** Function signature for clicking a group containing children in the garden */
export type OnClickGroup<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = (
  item: GardenGroup<TData>,
  controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>
) => void;

/**Onclick events for garden */
export interface OnClickEvents<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  /** Fires when an item is clicked */
  onClickItem?: OnClickItem<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
  /** Fires when a group containing children is clicked */
  onClickGroup?: OnClickGroup<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
}
