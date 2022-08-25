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
