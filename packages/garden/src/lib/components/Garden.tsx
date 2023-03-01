import { Icon } from '@equinor/eds-core-react';
import { createContext } from 'react';
import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
interface GardenProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
}

Icon.add({ chevron_down, chevron_up });

export function Garden<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({ controller }: GardenProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>): JSX.Element | null {
  //TODO:Handle no data better in garden

  return (
    <GardenContext.Provider
      value={controller as unknown as GardenController<Record<PropertyKey, unknown>, never, never, never>}
    >
      <VirtualContainer />
    </GardenContext.Provider>
  );
}

export const GardenContext = createContext<GardenController<Record<PropertyKey, unknown>, never, never, never> | null>(
  null
);
