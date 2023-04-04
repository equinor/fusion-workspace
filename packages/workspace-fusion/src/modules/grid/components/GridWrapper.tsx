import { useRef } from 'react';
import { Grid, GridController, IServerSideGetRowsParams } from '@equinor/workspace-ag-grid';
import { useResizeObserver } from '../../../lib/hooks/useResizeObserver';
import { BaseEvent } from '@equinor/workspace-core';
import { GridConfig } from '../../../lib/integrations/grid';
import { useFilterContext } from '@equinor/workspace-filter';

export type GridWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
> = {
  config: GridConfig<TData, TFilter>;
};

export const GridWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
>({
  config,
}: GridWrapperProps<TData, TContext, TCustomSidesheetEvents, TFilter>) => {
  const ref = useRef(null);

  const { filterState } = useFilterContext();

  const [_, height] = useResizeObserver(ref);

  return (
    <div
      id="workspace_grid_wrapper"
      style={{ height: '100%', width: '100%', padding: '1rem 1rem 0rem 1rem' }}
      ref={ref}
    >
      <Grid
        columnDefs={config.columnDefinitions}
        gridOptions={{} as any}
        key={JSON.stringify(filterState)}
        getRows={(params: IServerSideGetRowsParams<any>) => config.getRows(params, filterState as TFilter)}
        height={height}
      />
    </div>
  );
};
