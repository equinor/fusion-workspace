import { StatusBar } from '@equinor/workspace-status-bar';

import { BaseEvent } from '@equinor/workspace-core';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { StatusBarConfig } from '../types/workspaceConfig';
import { useEffect } from 'react';
import { useFilterContext } from '@equinor/workspace-filter';

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
  const { data, isLoading } = useQuery(['kpis'], () => config(filterState));

  const client = useQueryClient();

  useEffect(() => {
    client.invalidateQueries();
  }, [filterState]);

  if (isLoading || !data) {
    return <div></div>;
  }
  return <StatusBar items={data} />;
}
