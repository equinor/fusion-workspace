import { Button, Icon } from '@equinor/eds-core-react';
import { Suspense, useRef, useState } from 'react';
import {
  CustomVirtualViews,
  GardenConfig,
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

import { arrow_back_ios, arrow_forward_ios, chevron_down, chevron_up } from '@equinor/eds-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen } from './splashScreen/SplashScreen';
import { ErrorBoundary } from 'react-error-boundary';
import { GardenError } from './error/GardenError';
import { GetIdentifier } from '../types/getIdentifier';
import { GardenConfigProvider } from '../context/gardenConfig';
import { GardenContextProvider } from '../context/gardenContext';
import styled from 'styled-components';
import { GroupingSelector } from './GroupingSelector';

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
}

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
}: GardenProps<TData, TContext>): JSX.Element | null {
  const client = useRef(new QueryClient());
  const [groupingKeys, setGroupingKeys] = useState<string[]>(initialGrouping);
  const [toggle, setToggle] = useState(false);

  const [timeInterval, updateTimeInterval] = useState<string | null>(initialTimeInterval ?? null);
  const onChangetimeInterval = (timeInterval: string | null) => {
    updateTimeInterval(timeInterval);
  };
  const [dateVariant, updateDateVariant] = useState<string | null>(initialDateVariant ?? null);
  const onChangeDateVariant = (dateVariant: string | null) => {
    updateDateVariant(dateVariant);
  };

  return (
    <QueryClientProvider client={client.current}>
      <ErrorBoundary FallbackComponent={GardenError}>
        <Suspense fallback={<SplashScreen />}>
          <GardenContextProvider
            getIdentifier={getIdentifier}
            timeInterval={timeInterval}
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
              <VirtualContainer context={context as TContext} dataSource={dataSource} />
            </GardenConfigProvider>
            <StyledAnimatedDiv expanded={toggle}>
              {toggle ? (
                <>
                  <div
                    style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Button variant="ghost_icon" onClick={() => setToggle((state) => !state)}>
                      <Icon data={arrow_forward_ios}></Icon>
                    </Button>
                    <p style={{ marginRight: '8px', fontSize: '16px', fontWeight: '500' }}>View Settings</p>
                  </div>
                  <GroupingSelector
                    groupingKeys={groupingKeys}
                    setGroupingKeys={setGroupingKeys}
                    timeInterval={timeInterval}
                    onChangeTimeInterval={onChangetimeInterval}
                    dateVariant={dateVariant}
                    onChangeDateVarient={onChangeDateVariant}
                    context={context as any}
                    dataSource={dataSource}
                  />
                </>
              ) : (
                <>
                  <Button variant="ghost_icon" onClick={() => setToggle((state) => !state)}>
                    <Icon data={arrow_back_ios}></Icon>
                  </Button>
                  <VerticalText>View Settings</VerticalText>
                </>
              )}
            </StyledAnimatedDiv>
          </GardenContextProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

type StyledAnimatedDivProps = {
  expanded: boolean;
};

const StyledAnimatedDiv = styled.div<StyledAnimatedDivProps>`
  width: ${(props) => (props.expanded ? '300px' : '45px')};
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  padding: 10px;
  transition: width 0.1s ease;
  overflow: hidden;
`;
const VerticalText = styled.div`
  transform: rotate(90deg);
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
  font-size: 16px;
`;
