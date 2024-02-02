import { Icon } from '@equinor/eds-core-react';
import { MutableRefObject, Suspense, useRef, useState } from 'react';
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
import { ErrorBoundary } from 'react-error-boundary';
import { GardenConfigProvider } from '../context/gardenConfig';
import { GardenContextProvider } from '../context/gardenContext';
import { GetIdentifier } from '../types/getIdentifier';
import { ViewSettings } from './ViewSettings/ViewSettings';
import { GardenError } from './error/GardenError';
import { SplashScreen } from './splashScreen/SplashScreen';

export type GardenMetaRequest = {
  groupingKeys: string[];
  timeInterval?: string | null;
  dateVariant?: string | null;
};

export type GardenDataSource<TContext> = {
  getGardenMeta: (request: GardenMetaRequest, context: TContext, signal?: AbortSignal) => Promise<GardenMeta>;
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
  timeInterval: string | null;
  dateVariant: string | null;
  selected?: string | null;
  refState?: MutableRefObject<null | undefined | RefState> | ((state: RefState) => void);
}

export type RefState = {
  groupingKeys: string[];
  timeInterval: string | null;
  dateVariant: string | null;
};

Icon.add({ chevron_down, chevron_up });

export function Garden<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  getDisplayName,
  context,
  getIdentifier,
  groupingKeys: initialGrouping,
  customViews,
  timeInterval: initialTimeInterval,
  dateVariant: initialDateVariant,
  visuals,
  clickEvents,
  selected = null,
  refState,
}: GardenProps<TData, TContext>): JSX.Element | null {
  const client = useRef(new QueryClient());
  const [groupingKeys, setGroupingKeys] = useState<string[]>(initialGrouping);
  const [isLoading, setIsLoading] = useState(true);
  const [timeInterval, updateTimeInterval] = useState<string | null>(initialTimeInterval ?? null);
  const onChangetimeInterval = (timeInterval: string | null) => {
    updateTimeInterval(timeInterval);
  };
  const [dateVariant, updateDateVariant] = useState<string | null>(initialDateVariant ?? null);
  const onChangeDateVariant = (dateVariant: string | null) => {
    updateDateVariant(dateVariant);
  };

  if (refState) {
    if (typeof refState == 'function') {
      refState({ dateVariant, groupingKeys, timeInterval });
    } else {
      refState.current = { dateVariant, timeInterval, groupingKeys };
    }
  }

  return (
    <QueryClientProvider client={client.current}>
      <ErrorBoundary FallbackComponent={() => <GardenError />}>
        <Suspense fallback={<SplashScreen />}>
          <GardenContextProvider
            getIdentifier={getIdentifier}
            timeInterval={timeInterval}
            context={context}
            dataSource={dataSource}
            dateVariant={dateVariant}
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
              <VirtualContainer context={context as TContext} dataSource={dataSource} setIsLoading={setIsLoading} />
              {selected || isLoading ? null : (
                <ViewSettings
                  dateVariant={dateVariant}
                  groupingKeys={groupingKeys}
                  timeInterval={timeInterval}
                  onChangeDateVariant={onChangeDateVariant}
                  onChangeTimeInterval={onChangetimeInterval}
                  setGroupingKeys={setGroupingKeys}
                />
              )}
            </GardenConfigProvider>
          </GardenContextProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
