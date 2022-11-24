import { ColDef, GridOptions } from 'ag-grid-community';
import { useEffect, useMemo, useRef } from 'react';
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
	const teardown = useRef<VoidFunction | null>(null);

	/** Must be same for useEffect and useMemo */
	const triggers = useRef([colDefs, gridOptions, rowData]);

	const controller = useMemo(() => {
		const cont = createGridController(
			() => '',
			(destroy) => {
				teardown.current = destroy;
			}
		);
		cont.columnDefs = colDefs;
		cont.rowData = rowData;
		cont.gridOptions = gridOptions;
		return cont;
	}, [...triggers.current]);

	useEffect(
		() => () => {
			if (typeof teardown.current === 'function') {
				teardown.current();
			}
		},
		[...triggers.current]
	);

	return <Grid controller={controller} height={height} />;
}
