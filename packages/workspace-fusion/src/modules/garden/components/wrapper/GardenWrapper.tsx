import { BaseEvent } from '@equinor/workspace-core';
import { useFilterContext } from '@equinor/workspace-filter';
import { Garden, GardenApi } from '@equinor/workspace-garden';
import { useEffect, useState } from 'react';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';

type GardenWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
};

export const GardenWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
>({
  config,
  getIdentifier,
}: GardenWrapperProps<TData, TError, TContext, TCustomSidesheetEvents, TFilter>) => {
  const { filterState } = useFilterContext();
  const [gardenApi, setGardenApi] = useState<null | GardenApi>(null);

  // useEffect(() => {
  //   gardenApi?.invalidate();
  // }, [filterState]);

  return (
    <div id="workspace_garden_wrapper" style={{ height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config.customViews}
        visuals={config.visuals}
        getIdentifier={getIdentifier}
        initialGrouping={config.initialGrouping.horizontalGroupingAccessor.toString()}
        getDisplayName={config.getDisplayName}
      />
    </div>
  );
};
