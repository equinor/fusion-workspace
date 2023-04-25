import { Icon } from '@equinor/eds-core-react';
import { createContext, MutableRefObject, Suspense, useEffect, useMemo, useRef } from 'react';
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
  GroupingKeys,
  OnClickEvents,
  Visuals,
} from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen } from './splashScreen/SplashScreen';
import { ErrorBoundary } from 'react-error-boundary';
import { GardenError } from './error/GardenError';
import { useBookmarkRef } from '../hooks/useBookmarkRef';

export type GardenDataSource<TContext> = {
  getGardenMeta: (keys: string[], context: TContext, signal?: AbortSignal) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, context: TContext, signal?: AbortSignal) => Promise<any[]>;
};

export type BookmarkRef<TData extends Record<PropertyKey, unknown>> = {
  groupingKeys: GroupingKeys<TData>;
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
  bookmarkRef?: MutableRefObject<BookmarkRef<TData> | null | undefined>;
}

Icon.add({ chevron_down, chevron_up });

export function Garden<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  getDisplayName,
  context,
  getIdentifier,
  initialGrouping,
  customViews,
  visuals,
  clickEvents,
  bookmarkRef,
}: GardenProps<TData, TContext>): JSX.Element | null {
  const client = useRef(new QueryClient());

  const controller = useMemo(
    () =>
      new GardenController<TData>({
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

  useBookmarkRef(controller, bookmarkRef);

  return (
    <QueryClientProvider client={client.current}>
      <ErrorBoundary FallbackComponent={GardenError}>
        <GardenContext.Provider value={controller as unknown as GardenController<Record<PropertyKey, unknown>>}>
          <Suspense fallback={<SplashScreen />}>
            <VirtualContainer context={context as TContext} dataSource={dataSource} />
          </Suspense>
        </GardenContext.Provider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export const GardenContext = createContext<GardenController<Record<PropertyKey, unknown>> | null>(null);
