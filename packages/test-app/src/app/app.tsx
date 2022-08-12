import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { DefaultInterface } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';

function Workspace() {
	const Component = createFusionWorkspace<DefaultInterface, unknown>('Scope change', 'purple', ({ addDataSource }) =>
		addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addSidesheet(sidesheetOptions)
			.addStatusBarItems(statusBarConfig)
			.create()
	);

	return <Component />;
}

export function App() {
	return <Workspace />;
}

export default App;
('');
