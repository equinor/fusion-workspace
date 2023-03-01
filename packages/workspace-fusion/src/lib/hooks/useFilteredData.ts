import { BaseEvent } from '@equinor/workspace-core';
import { useState, useEffect } from 'react';
import { FusionMediator } from '../types/fusionController';

export function useFilteredData<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>({ dataService }: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
  const [data, setData] = useState<TData[] | undefined>(dataService.filteredData);

  useEffect(() => {
    const subscription = dataService.filteredData$.subscribe((newData) => {
      if (!newData) return;
      setData(newData);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [dataService.filteredData$]);

  return data;
}
