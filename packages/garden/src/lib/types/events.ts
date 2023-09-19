import { GardenGroup } from '.';

/** Function signature for clicking an item */
export type OnClickItem<TData extends Record<PropertyKey, unknown>> = (item: TData) => void;
/** Function signature for clicking a group containing children in the garden */
export type OnClickGroup<TData extends Record<PropertyKey, unknown>> = (item: GardenGroup<TData>) => void;

/**Onclick events for garden */
export interface OnClickEvents<TData extends Record<PropertyKey, unknown>> {
  /** Fires when an item is clicked */
  onClickItem?: OnClickItem<TData>;
  /** Fires when a group containing children is clicked */
  onClickGroup?: OnClickGroup<TData>;
}
