export type GardenGroup<TData extends Record<PropertyKey, unknown>> = {
  items: TData[];
  totalItemsCount: number;
  columnName: string;
  subGroups: GardenGroup<TData>[];
  subGroupCount: number;
};

export type GardenGroups<TData extends Record<PropertyKey, unknown>> = GardenGroup<TData>[];

export interface GroupDescriptionFunc<TData> {
  (data: TData, groupingKey: string): string;
}
