import { GardenConfig } from '../garden';

export type WorkspaceGardenProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>,
  TFilter = undefined,
> = {
  gardenOptions?: GardenConfig<TData, TFilter>;
};
