import { WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, GridController } from '@workspace/grid';
import { ColDef } from 'ag-grid-community';
import { TabWrapper, useSizeContext } from '../components/TabWrapper';
import { GridIcon as HeaderComponent } from '../icons/GridIcon';
import { FusionMediator, GridConfig, WorkspaceTabNames } from '../types';
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

	gridControllerBinder(gridController, mediator);

	viewController.tabs.addTab({
		Component: () => (
			<TabWrapper>
				<FusionGrid controller={gridController} />
			</TabWrapper>
		),
		name: 'grid',
		HeaderComponent,
	});
}

interface FusionGridProps<T> {
	controller: GridController<T>;
}
export function FusionGrid<T>({ controller }: FusionGridProps<T>) {
	const { height, width } = useSizeContext();

	console.log(`Available height is: ${height}px`);

	return <Grid height={height} width={width} controller={controller} />;
}

export function gridControllerBinder<TData, TError>(
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
