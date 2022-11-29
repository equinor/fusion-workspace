import { WorkspaceViewController } from '@equinor/workspace-react';
import { createGridController } from '@equinor/workspace-ag-grid';
import { GridIcon } from '../icons/GridIcon';
import { FusionMediator, GetIdentifier, WorkspaceTabNames } from '../../../types';
import { configureBookmark } from '../utils/configureBookmark';
import { configureDataChange } from '../utils/configureDataChange';
import { configureHighlightSelection } from '../utils/configureHighlightSelection';
import { GridHeader } from './workspaceHeader';
import { setConfigOnController } from '../utils/setConfigOnController';
import { GridConfig } from '../';
import { GridWrapper } from './wrapper';

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
