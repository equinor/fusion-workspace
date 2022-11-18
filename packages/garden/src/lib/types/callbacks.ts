import { GardenController } from '../classes';
import { BaseRecordObject, GardenGroups, GardenItem } from '.';

/**
 * Function for calculating the longest width of a garden column
 * @returns the number of px in width for the largest item in the column
 */
export type ItemWidthCalculation<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never
> = (garden: GardenGroups<TData>, key: keyof TData | TExtendedFields, customGroupByKeys?: TCustomGroupByKeys) => number;

export type HighlightHorizontalColumn<
	TData extends Record<PropertyKey, unknown>,
	ExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never
> = (groupBy: keyof TData | ExtendedFields, customGroupByKeys?: TCustomGroupByKeys) => string | undefined;

export type GetDescription<TData extends Record<PropertyKey, unknown>> = (item: TData) => string;
export type GetItemColor<TData extends Record<PropertyKey, unknown>> = (item: TData) => string;

export type GetDisplayName<TData extends Record<PropertyKey, unknown>> = (
	item: TData,
	controller: GardenController<TData>
) => string;
