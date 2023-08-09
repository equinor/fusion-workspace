import { Icon } from '@equinor/eds-core-react';
import { Suspense, useRef } from 'react';
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
import { GetIdentifier } from '../types/getIdentifier';
import { GardenConfigProvider } from '../context/gardenConfig';
import { GardenContextProvider } from '../context/gardenContext';

export type GardenMetaRequest = {
  groupingKeys: string[];
  dimension?: string | null;
  type?: string | null;
};

export type GardenDataSource<TContext> = {
  getGardenMeta: (
    request: GardenMetaRequest,
    context: TContext,
    signal?: AbortSignal
  ) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, context: TContext, signal?: AbortSignal) => Promise<GardenHeaderGroup[]>;
  getSubgroupItems: (args: GetSubgroupItemsArgs, context: TContext, signal?: AbortSignal) => Promise<any[]>;
};

interface GardenProps<TData extends Record<PropertyKey, unknown>, TContext = undefined> {
  dataSource: GardenDataSource<TContext>;
  context?: TContext;
  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  visuals?: Visuals<TData>;
  customViews?: CustomVirtualViews<TData>;
  clickEvents?: OnClickEvents<TData>;
  groupingKeys: string[];
  dimension: string | null;
  type: string | null;
  selected?: string | null;
}

Icon.add({ chevron_down, chevron_up });

export function Garden<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  getDisplayName,
  context,
  getIdentifier,
  groupingKeys,
  customViews,
  dimension,
  type,
  visuals,
  clickEvents,
  selected = null,
}: GardenProps<TData, TContext>): JSX.Element | null {
  const client = useRef(new QueryClient());

  return (
    <QueryClientProvider client={client.current}>
      <ErrorBoundary FallbackComponent={GardenError}>
        <GardenContextProvider
          getIdentifier={getIdentifier}
          dimension={dimension}
          type={type}
          initialGrouping={groupingKeys}
          selected={selected}
        >
          <GardenConfigProvider
            dataSource={dataSource}
            getDisplayName={getDisplayName}
            getIdentifier={getIdentifier}
            clickEvents={clickEvents}
            context={context}
            customViews={customViews}
            visuals={visuals}
          >
            <Suspense fallback={<SplashScreen />}>
              <VirtualContainer context={context as TContext} dataSource={dataSource} />
            </Suspense>
          </GardenConfigProvider>
        </GardenContextProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
