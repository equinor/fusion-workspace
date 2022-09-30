import { WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, createGridController, ProxyGrid } from '@workspace/grid';
import { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { GridIcon } from '../../icons/GridIcon';
import { FusionMediator, GridConfig, WorkspaceTabNames } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';
import { configureBookmark } from './configureBookmark';
import { configureDataChange } from './configureDataChange';
import { configureHighlightSelection } from './configureHighlightSelection';
import { GridHeader } from './GridWorkspaceHeader';
import { setConfigOnController } from './setConfigOnController';

export function addGrid<TData, TError>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>
) {
	const gridController = createGridController(getIdentifier);

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

type GridWrapperProps<TData> = {
	controller: ProxyGrid<TData>;
};

const GridWrapper = <TData,>({ controller }: GridWrapperProps<TData>) => {
	const ref = useRef(null);
	const [_, height] = useResizeObserver(ref);

	return (
		<div style={{ height: '100%', width: '100%' }} ref={ref}>
			<Grid controller={controller} height={height} />
		</div>
	);
};
