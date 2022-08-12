import { GardenController } from '../classes';
import { CustomGroupByKeys, GardenGroups, GardenItem } from '.';

/**
 * Function for calculating the longest width of a garden column
 * @returns the number of px in width for the largest item in the column
 */
export type ItemWidthCalculation<T> = (
	garden: GardenGroups<T>,
	key: string,
	customGroupByKeys?: CustomGroupByKeys
) => number;
export type HighlightHorizontalColumn = (groupBy: string, customGroupByKeys: CustomGroupByKeys) => string | undefined;
export type GetCustomDescription<T> = (item: T | GardenItem<T>, controller: GardenController<T>) => string;
export type GetCustomItemColor<T> = (item: T, controller: GardenController<T>) => string;
export type GetGroupDescriptionFunc<T> = (item: T, groupingKey: string) => string;

export type NodeLabelCallback<T> = (item: T, controller: GardenController<T>) => string;
