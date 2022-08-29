import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';
import { gardenConfig } from './gardenConfig/gardenConfig';
import { appConfig } from './gardenConfig/appConfig';

function FusionWorkspace() {
	const controller = createFusionWorkspace<Handover, unknown>('commpkgNo', ({ addDataSource }) =>
		addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addConfig(appConfig)
			.addSidesheet(sidesheetOptions)
			.addGarden(gardenConfig)
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
