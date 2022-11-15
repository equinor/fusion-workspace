import { WorkspaceViewController } from '@equinor/workspace-react';
import { createGridController, Grid, GridController } from '@equinor/workspace-ag-grid';
import { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { GridIcon } from '../../icons/GridIcon';
import { FusionMediator, WorkspaceTabNames } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';
import { configureBookmark } from './configureBookmark';
import { configureDataChange } from './configureDataChange';
import { configureHighlightSelection } from './configureHighlightSelection';
import { GridHeader } from './GridWorkspaceHeader';
import { setConfigOnController } from './setConfigOnController';
import { GridConfig } from '../../integrations/grid';
import { BehaviorSubject } from 'rxjs';

export function addGrid<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown>
>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>,
	getIdentifier: GetIdentifier<TData>,
	context?: BehaviorSubject<TContext>
) {
	const gridController = createGridController<TData, TContext>(getIdentifier);

	if (context) {
		context.subscribe((s) => {
			gridController.context = s;
		});
	}

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
