import styled from 'styled-components';
import { BaseEvent } from '@equinor/workspace-core';
import { useQuery } from '@tanstack/react-query';
import { StatusBarConfig } from '../types/workspaceConfig';
import { useFilterContext } from '@equinor/workspace-filter';
import { StatusBar } from './StatusBar';

type StatusBarWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
> = {
  config: StatusBarConfig<TFilter>;
};

export function StatusBarWrapper<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
>({ config }: StatusBarWrapperProps<TData, TContext, TCustomSidesheetEvents, TFilter>) {
  const { filterState } = useFilterContext();

  const { data, isLoading } = useQuery(['kpis', filterState], (a) => config(filterState, a.signal), {
    keepPreviousData: true,
  });

  if (isLoading || !data) {
    return (
      <StyledSkeletons>
        {new Array(4).fill(0).map((_, i) => (
          <SkeletonPackage height={38} width={90} key={i} />
        ))}
      </StyledSkeletons>
    );
  }
  return <StatusBar items={data} />;
}

const StyledSkeletons = styled.div`
  height: 48px;
  display: flex;
  gap: 30px;
  width: 100%;
  flex-direction: row;
  margin-left: 24px;
`;

export const SkeletonPackage = styled.div<{ height: number; width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  cursor: progress;
  background: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  border-radius: 5px;
  animation: loading 1.5s infinite;
  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;
