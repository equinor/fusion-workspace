import { BaseEvent } from '@equinor/workspace-core';
import { useQuery } from '@tanstack/react-query';
import { StatusBarConfig } from '../types/workspaceConfig';
import { useFilterContext } from '@equinor/workspace-filter';
import { StatusBar } from './StatusBar';
import { KPISkeletons } from './StyledSkeletons';

type StatusBarWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined,
> = {
  config: StatusBarConfig;
};

export function StatusBarWrapper<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined,
>({ config }: StatusBarWrapperProps<TData, TContext, TCustomSidesheetEvents, TFilter>) {
  const { filterState } = useFilterContext();

  const { data, isLoading } = useQuery(['kpis', filterState], (a) => config(filterState, a.signal), {
    keepPreviousData: true,
  });

  if (isLoading || !data) {
    return <KPISkeletons />;
  }
  return <StatusBar items={data} />;
}
