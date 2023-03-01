export type GardenGroup<TData extends Record<PropertyKey, unknown>> = {
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

export type GardenGroups<TData extends Record<PropertyKey, unknown>> = GardenGroup<TData>[];

export interface GroupDescriptionFunc<TData> {
  (data: TData, groupingKey: string): string;
}
