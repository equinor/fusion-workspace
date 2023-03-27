import { Icon } from '@equinor/eds-core-react';
import { createContext, Suspense, useMemo } from 'react';
import { GardenController, GetIdentifier } from '../classes';
import {
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetDisplayName,
  GetHeaderBlockRequestArgs,
} from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen } from './splashScreen/SplashScreen';
import { ErrorBoundary } from 'react-error-boundary';
import { GardenError } from './error/GardenError';

interface GardenProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  getGardenMeta: (keys: string[]) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, signal: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;

  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  initialGrouping: string;
}

Icon.add({ chevron_down, chevron_up });
const client = new QueryClient();
export function Garden<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
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
      <ErrorBoundary FallbackComponent={GardenError}>
        <GardenContext.Provider
          value={controller as unknown as GardenController<Record<PropertyKey, unknown>, never, never, never>}
        >
          <Suspense fallback={<SplashScreen />}>
            <VirtualContainer getGardenMeta={getGardenMeta} getBlockAsync={getBlockAsync} getHeader={getHeader} />
          </Suspense>
        </GardenContext.Provider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export const GardenContext = createContext<GardenController<Record<PropertyKey, unknown>, never, never, never> | null>(
  null
);
