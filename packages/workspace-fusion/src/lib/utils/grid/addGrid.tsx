import { tokens } from '@equinor/eds-tokens';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, GridController } from '@workspace/grid';
import styled from 'styled-components';
import { WorkspaceHeader } from '../../components/Header/WorkspaceHeader';
import { GridIcon as HeaderComponent } from '../../icons/GridIcon';
import { FusionMediator, GridConfig, WorkspaceTabNames } from '../../types';
import { GetIdentifier } from '../createFusionWorkspace';
import { configureBookmark } from './configureBookmark';
import { configureDataChange } from './configureDataChange';
import { configureHighlightSelection } from './configureHighlightSelection';
import { setConfigOnController } from './setConfigOnController';

export function addGrid<TData, TError>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>,
	getIdentifier: GetIdentifier<TData>
) {
	const gridController = new GridController<TData>(getIdentifier);

	setConfigOnController(gridConfig, gridController, mediator);
	configureHighlightSelection(gridController, mediator);
	configureDataChange(gridController, mediator);
	configureBookmark(gridController, mediator);

	viewController.tabs.addTab({
		Component: () => <Grid controller={gridController} />,
		name: 'grid',
		TabIcon: () => <HeaderComponent />,
		CustomHeader: () => <GridHeader controller={gridController} />,
	});
}

interface GridHeaderProps<TData> {
	controller: GridController<TData>;
}

function GridHeader<TData>({ controller }: GridHeaderProps<TData>) {
	return <WorkspaceHeader />;
}
