import { WorkspaceViewController } from '@equinor/workspace-react';
import { createGridController, Grid, GridController } from '@equinor/workspace-ag-grid';
import { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { GridIcon } from '../../icons/GridIcon';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../types';
import { configureBookmark } from './configureBookmark';
import { configureDataChange } from './configureDataChange';
import { configureHighlightSelection } from './configureHighlightSelection';
import { GridHeader } from './GridWorkspaceHeader';
import { setConfigOnController } from './setConfigOnController';
import { GridConfig } from '../../integrations/grid';
import { NoDataSplashScreen } from '../../components/NoDataSplashScreen';

export function addGrid<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	gridConfig: GridConfig<TData> | undefined,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>,
	getIdentifier: GetIdentifier<TData>
) {
	if (!gridConfig) return;
	const gridController = createGridController<TData, TContext>(getIdentifier, mediator.onUnMount);

	const sub = mediator.contextService.context$.subscribe((s) => {
		gridController.context = s;
	});

	mediator.onUnMount(() => sub.unsubscribe());

	setConfigOnController(gridConfig, gridController, mediator);
	configureHighlightSelection(gridController, mediator);
	configureDataChange(gridController, mediator);
	configureBookmark(gridController, mediator);

	viewController.tabController.addTab({
		Component: () => <GridWrapper controller={gridController} mediator={mediator} />,
		name: 'grid',
		TabIcon: GridIcon,
		CustomHeader: () => <GridHeader controller={gridController} />,
	});
}

type GridWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	controller: GridController<TData>;
	mediator: FusionMediator<TData, TContext>;
};

const GridWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({
	controller,
	mediator,
}: GridWrapperProps<TData, TContext>) => {
	const ref = useRef(null);
	const [_, height] = useResizeObserver(ref);

	return (
		<div style={{ height: '100%', width: '100%' }} ref={ref}>
			<NoDataSplashScreen mediator={mediator}>
				<Grid controller={controller} height={height} />
			</NoDataSplashScreen>
		</div>
	);
};
