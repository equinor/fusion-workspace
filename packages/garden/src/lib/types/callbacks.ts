import { GardenController } from '../classes';
import { BaseRecordObject, GardenGroups, GardenItem } from '.';

/**
 * Function for calculating the longest width of a garden column
 * @returns the number of px in width for the largest item in the column
 */
export type ItemWidthCalculation<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>
> = (garden: GardenGroups<TData>, key: keyof TData | TExtendedFields, customGroupByKeys?: TCustomGroupByKeys) => number;

export type HighlightHorizontalColumn<
	TData,
	ExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>
> = (groupBy: keyof TData | ExtendedFields, customGroupByKeys: TCustomGroupByKeys) => string | undefined;

export type GetDescription<T> = (item: T | GardenItem<T>) => string;
export type GetItemColor<T> = (item: T) => string;

export type GetDisplayName<T> = (item: T, controller: GardenController<T>) => string;
