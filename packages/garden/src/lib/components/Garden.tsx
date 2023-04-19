import { Icon } from '@equinor/eds-core-react';
import { createContext, Suspense, useMemo } from 'react';
import { GardenController, GetIdentifier } from '../classes';
import {
  CustomVirtualViews,
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetDisplayName,
  GetHeaderBlockRequestArgs,
  GetSubgroupItemsArgs,
  OnClickEvents,
  Visuals,
} from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen } from './splashScreen/SplashScreen';
import { ErrorBoundary } from 'react-error-boundary';
import { GardenError } from './error/GardenError';

export type GardenDataSource<TContext> = {
  getGardenMeta: (keys: string[], context: TContext, signal?: AbortSignal) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, context: TContext, signal?: AbortSignal) => Promise<any[]>;
};

interface GardenProps<TData extends Record<PropertyKey, unknown>, TContext = undefined> {
  dataSource: GardenDataSource<TContext>;
  context?: TContext;
  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  initialGrouping: string;
  visuals?: Visuals<TData>;
  customViews?: CustomVirtualViews<TData>;
  clickEvents?: OnClickEvents<TData>;
}

Icon.add({ chevron_down, chevron_up });
const client = new QueryClient();
export function Garden<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  getDisplayName,
  context,
  getIdentifier,
  initialGrouping,
  customViews,
  visuals,
  clickEvents,
}: GardenProps<TData, TContext>): JSX.Element | null {
  //TODO:Handle no data better in garden
  const controller = useMemo(
    () =>
      new GardenController<TData, TContext>({
        dataSource: dataSource,
        getDisplayName,
        getIdentifier,
        initialGrouping: { horizontalGroupingAccessor: initialGrouping, verticalGroupingKeys: [] },
        visuals: visuals,
        customViews: customViews,
        clickEvents,
      }),
    []
  );

  return (
    <QueryClientProvider client={client}>
      <ErrorBoundary FallbackComponent={GardenError}>
        <GardenContext.Provider value={controller as unknown as GardenController<Record<PropertyKey, unknown>, never>}>
          <Suspense fallback={<SplashScreen />}>
            <VirtualContainer context={context as TContext} dataSource={dataSource} />
          </Suspense>
        </GardenContext.Provider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export const GardenContext = createContext<GardenController<Record<PropertyKey, unknown>, never> | null>(null);
