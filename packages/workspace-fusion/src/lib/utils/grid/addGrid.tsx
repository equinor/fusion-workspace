import { WorkspaceViewController } from '@equinor/workspace-react';
import { createGridController, Grid, GridController } from '@equinor/workspace-ag-grid';
import { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { GridIcon } from '../../icons/GridIcon';
import { FusionMediator, GetIdentifier, GridConfig, WorkspaceTabNames } from '../../types';
import { configureBookmark } from './configureBookmark';
import { configureDataChange } from './configureDataChange';
import { configureHighlightSelection } from './configureHighlightSelection';
import { GridHeader } from './GridWorkspaceHeader';
import { setConfigOnController } from './setConfigOnController';

export function addGrid<TData extends Record<PropertyKey, unknown>, TError>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>
) {
	const gridController = createGridController<TData>(getIdentifier);

	setConfigOnController(gridConfig, gridController, mediator);
	configureHighlightSelection(gridController, mediator);
	configureDataChange(gridController, mediator);
	configureBookmark(gridController, mediator);

	viewController.tabController.addTab({
		Component: () => <GridWrapper controller={gridController} />,
		name: 'grid',
		TabIcon: GridIcon,
		CustomHeader: () => <GridHeader controller={gridController} />,
	});

	mediator.onUnMount(gridController.destroy);
}

type GridWrapperProps<TData extends Record<PropertyKey, unknown>> = {
	controller: GridController<TData>;
};

const GridWrapper = <TData extends Record<PropertyKey, unknown>>({ controller }: GridWrapperProps<TData>) => {
	const ref = useRef(null);
	const [_, height] = useResizeObserver(ref);

	return (
		<div style={{ height: '100%', width: '100%' }} ref={ref}>
			<Grid controller={controller} height={height} />
		</div>
	);
};
