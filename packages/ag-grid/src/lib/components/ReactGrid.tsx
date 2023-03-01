import { ColDef, GridOptions } from 'ag-grid-community';
import { useEffectOnce } from '../hooks/useEffectOnce';
import { GridController } from '../types';
import { useState } from 'react';
import { createGridController } from '../utils';
import { Grid } from './Grid';

type ReactGridProps<TData extends Record<PropertyKey, unknown>> = {
  /**Height of the Grid */
  height: number;
  /**Data for the grid */
  rowData: TData[];
  /**Columns */
  colDefs: ColDef<TData>[];
  /**Options */
  gridOptions?: GridOptions<TData>;
};

/**
 * `Basic` version of the grid
 * For more advanced use, use the Grid component
 */
export function ReactGrid<TData extends Record<PropertyKey, unknown>>({
  height,
  rowData,
  colDefs,
  gridOptions,
}: ReactGridProps<TData>) {
  const [controller, setController] = useState<null | GridController<TData>>(null);

  useEffectOnce(() => {
    let teardown: VoidFunction | null = null;
    const contr = createGridController<TData, {}>(
      () => '',
      (destroy) => {
        teardown = () => destroy();
      }
    );
    contr.columnDefs = colDefs;
    contr.rowData = rowData;
    contr.gridOptions = gridOptions;
    setController(contr);

    return () => {
      if (teardown) {
        teardown();
      }
    };
  });

  if (!controller) return null;
  if (controller.rowData !== rowData) {
    controller.rowData = rowData;
  }
  if (controller.gridOptions !== gridOptions) {
    controller.gridOptions = gridOptions;
  }
  if (controller.columnDefs !== colDefs) {
    controller.columnDefs = colDefs;
  }

  return <Grid controller={controller} height={height} />;
}
