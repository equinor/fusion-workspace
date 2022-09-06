import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { UrlModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

const controller = createFusionWorkspace<Handover, unknown>(
	(handover) => handover.commpkgNo,
	({ addDataSource }) =>
		addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addConfig({
				appColor: 'purple',
				appKey: 'Handover',
				defaultTab: 'grid',
			})
			.addModules([UrlModule])
			.addSidesheet(sidesheetOptions)
			.addGarden({
				data: [],
				nodeLabelCallback: (s) => s.commpkgNo,
				objectIdentifier: 'commpkgNo',
				initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
				fieldSettings: {},
			})
			.addMiddleware((mediator) => {
				mediator.urlService.onUrlChange((val) => {
					console.log('app url changed', val);
				});
				mediator.onClick((click) => {
					console.log('Clickevent happened', click);
				});
				mediator.selection.onSelectionChanged((s) => {
					console.log(`Selection changed ${s.map((s) => s.id)}`);
				});
				mediator.onTabChange((s) => console.log(`Tab changed ${s}`));
				// mediator.setActiveTab('garden');
			})
			.addStatusBarItems(statusBar)
);

function FusionWorkspace() {
	return <Workspace controller={controller} />;
}

export function App() {
	return <FusionWorkspace />;
}

export default App;
