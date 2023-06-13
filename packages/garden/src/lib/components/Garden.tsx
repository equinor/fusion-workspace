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
  visuals?: Visuals<TData>;
  customViews?: CustomVirtualViews<TData>;
  clickEvents?: OnClickEvents<TData>;
  bookmarkRef?: MutableRefObject<BookmarkRef<TData> | null | undefined>;
  groupingKeys: string[];
}

Icon.add({ chevron_down, chevron_up });

export function Garden<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  getDisplayName,
  context,
  getIdentifier,
  groupingKeys,
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
        initialGrouping: { horizontalGroupingAccessor: groupingKeys[0], verticalGroupingKeys: groupingKeys.slice(1) },
        visuals: visuals,
        customViews: customViews,
        clickEvents,
      }),
    []
  );

  useEffect(() => {
    controller.setHorizontalGroupingAccessor(groupingKeys[0]);
    controller.setVerticalGroupingKeys(groupingKeys.slice(1));
  }, [groupingKeys]);

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
