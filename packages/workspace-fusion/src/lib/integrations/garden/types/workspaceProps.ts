import { GardenConfig } from '../garden';

export type WorkspaceGardenProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = {
  gardenOptions?: GardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};
