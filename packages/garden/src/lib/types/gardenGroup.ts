export type GardenGroup<TData> = {
	groupKey: keyof TData;
	value: string;
	subGroups: GardenGroups<TData>;
	items: TData[];
	isExpanded: boolean;
	count: number;
	subGroupCount: number;
	description?: string | undefined;
	depth: number;
};

export type GardenGroups<TData> = GardenGroup<TData>[];

export interface GroupDescriptionFunc<TData> {
	(data: TData, groupingKey: string): string;
}
