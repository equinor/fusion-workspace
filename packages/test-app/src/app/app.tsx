import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

const controller = createFusionWorkspace<Handover, unknown>(
	{ appKey: 'Handover', objectIdentifier: 'commpkgNo' },
	(builder) =>
		builder
			.addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addConfig({
				appColor: 'purple',
				appKey: 'Handover',
				defaultTab: 'grid',
			})
			.addSidesheet(sidesheetOptions)
			.addGarden({
				data: [],
				nodeLabelCallback: (s) => s.commpkgNo,
				objectIdentifier: 'commpkgNo',
				initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
				fieldSettings: {},
			})
			.addModules([IndexedDbModule])
			.addMiddleware((mediator) => {
				mediator.urlService.onUrlChange((val) => {
					console.log('app url changed', val);
				});
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
