import { WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, GridController } from '@workspace/grid';
import { ColDef } from 'ag-grid-community';
import { GridIcon as HeaderComponent } from '../../icons/GridIcon';
import { FusionMediator, GridConfig, WorkspaceTabNames } from '../../types';
import { GridBookmark } from '../../types/fusionBookmark';
import { applyDefaultColumnDefinitions, applyWorkspaceClickToCells } from './defaultColDefs';

export function addGrid<TData, TError>(
	gridConfig: GridConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>,
	objectIdentifier: keyof TData
) {
	const gridController = new GridController<TData>(objectIdentifier);
	configureHighlightSelection(gridController, mediator);
	gridController.columnDefs = prepareColumnDefintions(gridConfig.columnDefinitions, mediator);
	gridController.gridOptions = gridConfig.gridOptions;

	onDataChange(gridController, mediator);
	onBookmark(gridController, mediator);

	viewController.tabs.addTab({
		Component: () => <Grid controller={gridController} />,
		name: 'grid',
		HeaderComponent,
	});
}

function onBookmark<TData, TError>(gridController: GridController<TData>, mediator: FusionMediator<TData, TError>) {
	mediator.bookmarkService.registerCapture(() => ({ grid: snapshotGridState(gridController) }));
	mediator.bookmarkService.onApply((state) => state.grid && applyGridBookmark(state.grid, gridController));
}

function applyGridBookmark<TData>(bookmark: GridBookmark, gridController: GridController<TData>) {
	gridController.selectedNodes.setValue(bookmark.selectedNodes ?? []);
	gridController.setColumnState(bookmark.columnState);
}

function snapshotGridState<TData>(gridController: GridController<TData>): GridBookmark {
	return {
		selectedNodes: gridController.selectedNodes.value,
		columnState: gridController.columnState,
	};
}

export function onDataChange<TData, TError>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.onFilterDataChange(gridController.setRowData);
}

/**
 * Applies some default settings to the column definitions.
 * @param columnDefs column definitions to alter
 * @param controller Workspace controller
 * @returns Altered column definitions
 */
function prepareColumnDefintions<TData, TError>(
	columnDefs: ColDef<TData>[],
	controller: FusionMediator<TData, TError>
) {
	return applyDefaultColumnDefinitions(applyWorkspaceClickToCells(columnDefs, controller));
}

export function configureHighlightSelection<TData, TError>(
	gridController: GridController<TData>,
	mediator: FusionMediator<TData, TError>
) {
	mediator.selection.onSelectionChanged((val) => gridController.selectedNodes.setValue(val.map(({ id }) => id)));
}
