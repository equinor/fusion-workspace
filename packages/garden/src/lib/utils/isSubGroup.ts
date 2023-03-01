import { GardenGroup, GardenItem } from '../types';

export const isSubGroup = <T extends Record<PropertyKey, unknown>>(
  arg: GardenItem<T> | undefined
): arg is GardenGroup<T> => {
  return (arg as GardenGroup<T>).value !== undefined;
};
