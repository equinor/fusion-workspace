import { GardenGroup } from '.';
import { GardenController } from '..';
import { BaseRecordObject } from '.';

/** Function signature for clicking an item */
export type OnClickItem<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = (
	item: TData,
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
) => void;
/** Function signature for clicking a group containing children in the garden */
export type OnClickGroup<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = Record<string, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = (
	item: GardenGroup<TData>,
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
) => void;

/**Onclick events for garden */
export interface OnClickEvents<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
	/** Fires when an item is clicked */
	onClickItem?: OnClickItem<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
	/** Fires when a group containing children is clicked */
	onClickGroup?: OnClickGroup<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
}
