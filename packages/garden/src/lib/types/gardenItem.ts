import { GardenGroup } from './gardenGroup';

export type GardenItemWithDepth<TData extends Record<PropertyKey, unknown>> = {
  item: TData;
  itemDepth: number;
};
export type GardenItem<TData extends Record<PropertyKey, unknown>> = GardenGroup<TData> | GardenItemWithDepth<TData>;
