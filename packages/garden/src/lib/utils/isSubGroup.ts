import { GardenGroup } from '../types';

export const isSubGroup = <T extends Record<PropertyKey, unknown>>(
  arg: GardenGroup<T> | T | undefined
): arg is GardenGroup<T> => {
  return (arg as GardenGroup<T>).columnName !== undefined;
};
