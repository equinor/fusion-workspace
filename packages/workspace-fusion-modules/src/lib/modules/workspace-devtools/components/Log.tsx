import { DateTime } from 'luxon';
import { ChangeEvent } from '@equinor/workspace-core';
import { useEffect, useState } from 'react';
import ReactGrid from '@workspace/grid';
import { ICellRendererParams } from 'ag-grid-community';

type LogProps = {
	events: ChangeEvent[];
};

export const Log = ({ events }: LogProps) => {
	return (
		<ReactGrid
			colDefs={[
				{ field: 'target' },
				{
					field: 'timestamp',
					cellRenderer: (val: ICellRendererParams<ChangeEvent, string>) => {
						const formatDate = () => DateTime.fromJSDate(new Date(val.value)).toRelative();
						const [state, setState] = useState<string | null>(formatDate());

						useEffect(() => {
							const timerId = setInterval(() => setState(formatDate()), 1000);
							return () => {
								clearInterval(timerId);
							};
						}, []);

						return state;
					},
				},
				{ field: 'origin' },
			]}
			gridOptions={{ sideBar: false }}
			height={400}
			rowData={events}
		/>
	);
};
