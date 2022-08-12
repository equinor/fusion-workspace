export type HorizontalGroupingAccessor<T> = keyof T | string;

export interface GroupingKeys<T> {
	horizontalGroupingAccessor: HorizontalGroupingAccessor<T>;
	verticalGroupingKeys: string[];
}
