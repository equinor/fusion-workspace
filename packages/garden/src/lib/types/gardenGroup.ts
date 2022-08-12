export type GardenGroup<T> = {
	groupKey: keyof T;
	value: string;
	subGroups: GardenGroups<T>;
	items: T[];
	isExpanded: boolean;
	count: number;
	subGroupCount: number;
	description?: string | undefined;
	depth: number;
};

export type GardenGroups<T> = GardenGroup<T>[];

export interface GroupDescriptionFunc<T> {
	(data: T, groupingKey: string): string;
}
