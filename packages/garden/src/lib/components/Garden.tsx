import { Icon } from '@equinor/eds-core-react';
import { createContext, Suspense, useMemo } from 'react';
import { GardenController, GetIdentifier } from '../classes';
import {
  BaseRecordObject,
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetDisplayName,
} from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface GardenProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  getGardenMeta: (keys: string[]) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, signal: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (
    args: Pick<GetBlockRequestArgs, 'xStart' | 'xEnd' | 'groupingKey'>,
    signal: AbortSignal
  ) => Promise<GardenHeaderGroup[]>;

  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  initialGrouping: string;
}

Icon.add({ chevron_down, chevron_up });
const client = new QueryClient();
export function Garden<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({
  getBlockAsync,
  getGardenMeta,
  getHeader,
  getDisplayName,
  getIdentifier,
  initialGrouping,
}: GardenProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>): JSX.Element | null {
  //TODO:Handle no data better in garden
  const controller = useMemo(
    () =>
      new GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>({
        getDisplayName,
        getIdentifier,
        initialGrouping: { horizontalGroupingAccessor: initialGrouping, verticalGroupingKeys: [] },
      }),
    [initialGrouping]
  );
  return (
    <QueryClientProvider client={client}>
      <GardenContext.Provider
        value={controller as unknown as GardenController<Record<PropertyKey, unknown>, never, never, never>}
      >
        <Suspense fallback={<div>Preparing garden...</div>}>
          <VirtualContainer getGardenMeta={getGardenMeta} getBlockAsync={getBlockAsync} getHeader={getHeader} />
        </Suspense>
      </GardenContext.Provider>
    </QueryClientProvider>
  );
}

export const GardenContext = createContext<GardenController<Record<PropertyKey, unknown>, never, never, never> | null>(
  null
);
