import { BaseEvent } from '@equinor/workspace-core';
import { useFilterContext } from '@equinor/workspace-filter';
import { BookmarkRef, Garden } from '@equinor/workspace-garden';
import { useRef } from 'react';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';
import { FusionMediator } from '../../../../lib';

type GardenWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
  mediator: FusionMediator<never, any, any>;
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
  mediator,
}: GardenWrapperProps<TData, TError, TContext, TCustomSidesheetEvents, TFilter>) => {
  const { filterState } = useFilterContext();
  const bookmarkRef = useRef<BookmarkRef<TData> | null>(null);

  return (
    <div id="workspace_garden_wrapper" style={{ height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        bookmarkRef={bookmarkRef}
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config.customViews}
        visuals={config.visuals}
        getIdentifier={getIdentifier}
        initialGrouping={config.initialGrouping.horizontalGroupingAccessor.toString()}
        getDisplayName={config.getDisplayName}
        clickEvents={{
          onClickItem: (i) => {
            mediator.selectionService.selectedNodes = [{ id: getIdentifier(i), item: i as any }];
          },
        }}
      />
    </div>
  );
};
