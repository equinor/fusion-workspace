import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';

function FusionWorkspace() {
	const controller = createFusionWorkspace<Handover, unknown>('commpkgNo', (builder) =>
		builder
			.addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addConfig({
				appColor: '#0084C4',
				appKey: 'Handover',
				defaultTab: 'grid',
			})
			.addFilter([
				{
					name: 'Commpkg',
					valueFormatter: (s) => s.commpkgNo,
				},
				{
					name: 'MC status',
					valueFormatter: (s) => s.mcStatus,
				},
			])
			.addSidesheet(sidesheetOptions)
			.addGarden({
				data: [],
				nodeLabelCallback: (s) => s.commpkgNo,
				objectIdentifier: 'id',
				initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
				fieldSettings: {},
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
