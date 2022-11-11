import { GardenGroup } from '.';
import { GardenController } from '..';
import { BaseRecordObject } from '.';

/** Function signature for clicking an item */
export type OnClickItem<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
> = (
	item: TData,
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
) => void;
/** Function signature for clicking a group containing children in the garden */
export type OnClickGroup<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = Record<string, unknown>,
	TContext = unknown
> = (
	item: GardenGroup<TData>,
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
) => void;

/**Onclick events for garden */
export interface OnClickEvents<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
> {
	/** Fires when an item is clicked */
	onClickItem?: OnClickItem<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
	/** Fires when a group containing children is clicked */
	onClickGroup?: OnClickGroup<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
}
