import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';

function FusionWorkspace() {
	const controller = createFusionWorkspace<DefaultInterface, unknown>(
		'Scope change',
		'purple',
		'id',
		({ addDataSource }) =>
			addDataSource(dataSourceOptions)
				.addGrid(gridOptions)
				.addCustomTab(customTab)
				.addSidesheet(sidesheetOptions)
				.addGarden({
					data: [],
					nodeLabelCallback: (s) => s.sequenceNumber.toString(),
					objectIdentifier: 'id',
					initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
					fieldSettings: {
						title: {
							getKey: (s) => s.title,
							getColumnSort: (a, b) => {
								return a.localeCompare(b) === 1 ? -1 : 1;
							},
						},
						sequenceNumber: {
							getKey: (s) => s.sequenceNumber as unknown as string,
						},
						description: {
							getKey: (s) => s.description,
						},
						phase: {
							getKey: (s) => s.phase,
						},
					},
				})
				.addMiddleware((mediator) => {
					mediator.onClick((click) => {
						console.log('Clickevent happened', click);
					});
					mediator.selection.onSelectionChanged((s) => {
						console.log(`Selection changed ${s.map((s) => s.id)}`);
					});
				})
				.addStatusBarItems(statusBarConfig)
	);

	return <Workspace controller={controller} />;
}

export function App() {
	return <FusionWorkspace />;
}

export default App;
