import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { DefaultInterface } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';

function Workspace() {
	const Component = createFusionWorkspace<DefaultInterface, unknown>(
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
					},
				})
				.addMiddleware((mediator) => {
					mediator.onClick((click) => {
						console.log('Clickevent happened', click);
					});
				})
				.addStatusBarItems(statusBarConfig)
	);

	return <Component />;
}

export function App() {
	return <Workspace />;
}

export default App;
