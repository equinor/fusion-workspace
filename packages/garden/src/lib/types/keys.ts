export type Key<T> = keyof T;

export type SetVerticalGroupingKeysArgs = string[];

export type HorizontalGroupingAccessor<T> = keyof T | string;

export interface GroupingKeys<T> {
	horizontalGroupingAccessor: HorizontalGroupingAccessor<T>;
	verticalGroupingKeys: string[];
}
