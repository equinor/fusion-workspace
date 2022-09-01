import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

function FusionWorkspace() {
	const controller = createFusionWorkspace<Handover, unknown>('commpkgNo', ({ addDataSource }) =>
		addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addConfig({
				appColor: '#0084C4',
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
			.addMiddleware((mediator) => {
				mediator.onClick((click) => {
					console.log('Clickevent happened', click);
				});
				mediator.selection.onSelectionChanged((s) => {
					console.log(`Selection changed ${s.map((s) => s.id)}`);
				});

				mediator.bookmarkService.onCapture((s) => console.log(`Bookmark captured`, s));
				console.log('I captured this bookmark', mediator.bookmarkService.capture());
			})
			.addStatusBarItems(statusBar)
	);

	return <Workspace controller={controller} />;
}

export function App() {
	return <FusionWorkspace />;
}

export default App;
