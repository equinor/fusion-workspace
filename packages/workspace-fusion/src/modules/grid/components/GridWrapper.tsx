import { useEffect, useRef } from 'react';
import { ServerGrid } from '@equinor/workspace-ag-grid';
import { useResizeObserver } from '../../../lib/hooks/useResizeObserver';
import { BaseEvent } from '@equinor/workspace-core';
import { GridConfig } from '../../../lib/integrations/grid';
import { useFilterContext } from '@equinor/workspace-filter';

export type GridWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined,
> = {
  config: GridConfig<TData, TFilter>;
};

export const GridWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined,
>({
  config,
}: GridWrapperProps<TData, TContext, TCustomSidesheetEvents, TFilter>) => {
  const ref = useRef(null);

  const { filterState } = useFilterContext();
  const filterStateCopy = useRef<any>(filterState);

  useEffect(() => {
    /**
     *  Bad practice but there is not another cleaner way
     *  Stale state scenario
     *  Only way to fix this is by using signals/observables
     *  There is no real consequence to doing it this way
     */
    filterStateCopy.current = filterState;
    config.gridOptions && config.gridOptions.api?.onFilterChanged();
  }, [filterState]);

  const [_, height] = useResizeObserver(ref);

  return (
    <div id="workspace_grid_wrapper" style={{ height: '100%', width: '100%' }} ref={ref}>
      <ServerGrid<TData>
        getRows={(params) => config.getRows(params, filterStateCopy.current as TFilter)}
        colDefs={config.columnDefinitions}
        gridOptions={config.gridOptions}
        height={height}
        context={filterState}
        modules={config.modules}
      />
    </div>
  );
};
