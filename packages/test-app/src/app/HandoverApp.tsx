import { useHttpClient, HttpClientMsal } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { useMemo } from 'react';
import { Handover } from './types';
import { customTab, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

function createMyWorkspace(client: HttpClientMsal) {
	return <Workspace controller={createWorkspaceController(client)} />;
}

export function HandoverApp() {
	const client = useHttpClient('portal');

	const App = useMemo(() => {
		return () => createMyWorkspace(client);
	}, []);

	return <App />;
}

const createWorkspaceController = (client: HttpClientMsal) =>
	createFusionWorkspace<Handover, unknown>(
		{ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo },
		({ addDataSource }) =>
			addDataSource(async () => {
				return await (
					await client.fetch(
						'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover'
					)
				).json();
			})
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
					getIdentifier: (s) => s.commpkgNo,
					initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
					fieldSettings: {},
				})
				.addMiddleware((mediator) => {
					mediator.urlService.onUrlChange((val) => {
						console.log('app url changed', val);
					});
				})
				.addStatusBarItems(statusBar)
	);
