import { GardenController } from '../classes';
import { BaseRecordObject, GardenGroups, GardenItem } from '.';

/**
 * Function for calculating the longest width of a garden column
 * @returns the number of px in width for the largest item in the column
 */
export type ItemWidthCalculation<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>
> = (garden: GardenGroups<TData>, key: string, customGroupByKeys?: TCustomGroupByKeys) => number;

export type HighlightHorizontalColumn<
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>
> = (groupBy: string, customGroupByKeys: TCustomGroupByKeys) => string | undefined;

export type GetCustomDescription<T> = (item: T | GardenItem<T>, controller: GardenController<T>) => string;
export type GetCustomItemColor<T> = (item: T, controller: GardenController<T>) => string;
export type GetGroupDescriptionFunc<T> = (item: T, groupingKey: string) => string;

export type NodeLabelCallback<T> = (item: T, controller: GardenController<T>) => string;
