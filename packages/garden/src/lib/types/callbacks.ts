import { GardenController } from '../classes';
import { CustomGroupByKeys, GardenGroups, GardenItem } from '.';

/**
 * Visuals
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
