import { ColDef, GridOptions } from 'ag-grid-community';
import { useMemo } from 'react';
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
	const controller = useMemo(() => {
		const cont = createGridController(() => '');
		cont.columnDefs = colDefs;
		cont.rowData = rowData;
		cont.gridOptions = gridOptions;
		return cont;
	}, [colDefs, gridOptions, rowData]);

	return <Grid controller={controller} height={height} />;
}
