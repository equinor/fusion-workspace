import { useOnFilteredDataChanged } from '@equinor/filter';
import { useWorkspace } from '@equinor/workspace-fusion';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import React, { useEffect, useRef } from 'react';
import { Handover } from './types';
/**
 * Default Gantt sample
 */

const options = ['Week', 'Month', 'Year'];

export const GanttChart = () => {
	const data = useOnFilteredDataChanged() as Handover[];
	const { clickService } = useWorkspace();
	const [viewMode, setViewMode] = useState(ViewMode.Year);
	const [pageSize, setPageSize] = useState(25);

	const [page, setPage] = useState(1);

	const ref = useRef(null);
	const [width, height] = useResizeObserver(ref);
	return (
		<div>
			<div style={{ width: '500px', display: 'flex', gap: '0.5em' }}>
				<SingleSelect
					items={options}
					label={'ViewMode'}
					selectedOption={viewMode}
					handleSelectedItemChange={(e) => setViewMode(ViewMode[e.selectedItem as any])}
				/>
				<SingleSelect
					items={['10', '25', '50', '1000']}
					label="Page size"
					selectedOption={pageSize.toString()}
					handleSelectedItemChange={(e) => {
						setPage(1);
						setPageSize(Number(e.selectedItem));
					}}
				/>
				<Button onClick={() => setPage((s) => s + 1)}>Next page {page}</Button>
			</div>
			<div ref={ref} style={{ height: height, width: '2000px', overflow: 'hidden' }}>
				<Gantt
					todayColor={tokens.colors.interactive.primary__selected_highlight.hex}
					viewMode={viewMode}
					fontFamily="Equinor"
					barProgressColor={tokens.colors.interactive.primary__resting.hex}
					onClick={(task) => clickService.click({ item: (task as GantTask).item })}
					TooltipContent={({ task }) => (
						<div style={{ backgroundColor: 'white', border: '2px solid grey' }}>
							<PopoverContent
								data={(task as GantTask).item}
								itemOptions={{
									barColor: 'red',
									commStatusColor: 'red',
									mcPackageColor: 'red',
									showWarningIcon: true,
									size: 'large',
									status: 'DCC Accepted',
									textColor: 'orange',
								}}
							/>
						</div>
					)}
					ganttHeight={height}
					tasks={data
						.slice(page * pageSize, page * pageSize + pageSize)
						.filter((s) => s.plannedStartDate && s.plannedFinishDate)
						.map(
							(comm, i, a): GantTask => ({
								id: comm.commpkgNo,
								name: comm.commpkgNo,
								start: comm.plannedStartDate ? new Date(comm.plannedStartDate) : new Date(),
								end: comm.plannedFinishDate ? new Date(comm.plannedFinishDate) : new Date(),
								progress: Number(comm.progress),
								type: 'task',
								item: comm,
								project: comm.system,
								dependencies: [a[i - 1]?.commpkgNo],
							})
						)}
				/>
			</div>
		</div>
	);
};

interface GantTask extends Task {
	item: Handover;
}

import { RefObject, useCallback, useLayoutEffect, useState } from 'react';
import { Button, Popover, SingleSelect } from '@equinor/eds-core-react';
import { PopoverContent } from './Visuals/Popover/PopoverContent';
import { tokens } from '@equinor/eds-tokens';
/**
 * Hook to observe width and height
 * @param ref Node that you want to observe size for
 * @param callback Optional callback function that accesses the node
 * @returns width and height for the observed node
 */
export const useResizeObserver = (ref: RefObject<HTMLElement>, callback?: (entry: DOMRectReadOnly) => void) => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		setHeight(1000);
	});

	const handleResize = useCallback(
		(entries: ResizeObserverEntry[]) => {
			if (!Array.isArray(entries)) {
				return;
			}
			const entry = entries[0];
			setWidth(entry.contentRect.width);
			setHeight(entry.contentRect.height);

			if (callback) {
				callback(entry.contentRect);
			}
		},
		[callback]
	);

	useLayoutEffect(() => {
		if (!ref.current) {
			return;
		}
		let RO = new ResizeObserver((entries: ResizeObserverEntry[]) => handleResize(entries));
		RO.observe(ref.current);

		// eslint-disable-next-line consistent-return
		return () => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			RO.disconnect;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			RO = null;
		};
	}, [ref]);
	return [width, height];
};
