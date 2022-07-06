import { GardenGroup } from '../../../Models/data';
export type GardenItemWithDepth<T> = {
    item: T;
    itemDepth: number;
};
export type GardenItem<T> = GardenGroup<T> | GardenItemWithDepth<T>;
