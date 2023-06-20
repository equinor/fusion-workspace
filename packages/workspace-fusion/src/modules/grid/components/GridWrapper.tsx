import { useEffect, useRef } from 'react';
import { GridApi, GridOptions, ServerGrid } from '@equinor/workspace-ag-grid';
import { useResizeObserver } from '../../../lib/hooks/useResizeObserver';
import { GridConfig } from '../../../lib/integrations/grid';
import { useFilterContext } from '@equinor/workspace-filter';
import { GetIdentifier } from '../../../lib';
import { type Selection } from '../../../lib/types';
import { useWorkspaceController } from '../../../lib/hooks';

export type GridWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TFilter = undefined
> = {
  config: GridConfig<TData, TFilter>;
  getIdentifier: GetIdentifier<TData>;
};

export const GridWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TFilter = undefined
>({
  config,
  getIdentifier,
}: GridWrapperProps<TData, TContext, TFilter>) => {
  const ref = useRef(null);

  const { setSelected, selected } = useWorkspaceController();
  const { filterState } = useFilterContext();
  const filterStateCopy = useRef<any>(filterState);
  config.gridOptions ??= {};
  setDefaultColDef(config.gridOptions, getIdentifier, setSelected);

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

  useDeselectionEvent(selected, config.gridOptions.api);

  return (
    <div id="workspace_grid_wrapper" style={{ height: '100%', width: '100%' }} ref={ref}>
      <ServerGrid<TData>
        getRows={async (params) => {
          await config.getRows(params, filterStateCopy.current as TFilter);
          handleSelectionEvent(selected, params.api);
        }}
        colDefs={config.columnDefinitions}
        getRowId={(params) => {
          const { data } = params;
          return getIdentifier(data);
        }}
        gridOptions={config.gridOptions}
        height={height}
        context={filterState}
      />
    </div>
  );
};

/** Selection events are handled automatically internally in the grid */
function useDeselectionEvent<TData>(selected: Selection<unknown> | null, api?: GridApi<TData> | null | undefined) {
  useEffect(() => {
    if (!api) return;
    if (!selected) {
      api.deselectAll();
    }
  }, [selected, api]);
}

function handleSelectionEvent(selection: Selection<unknown> | null, api: GridApi<any>) {
  if (selection) {
    const node = api.getRowNode(selection.id);
    if (node) {
      api.selectNode(node);
    }
  }
}

function setDefaultColDef(
  gridOptions: Omit<GridOptions<any>, 'rowData' | 'context' | 'pagination' | 'paginationPageSize'>,
  getIdentifier: GetIdentifier<any>,
  setSelected: (selectionEvent: Selection<any> | null) => void
) {
  gridOptions.defaultColDef = {
    resizable: true,
    onCellClicked: (a) => {
      const node = { id: getIdentifier(a.data), item: a.data };
      setSelected(node);
    },
  };
}
