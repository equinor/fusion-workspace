import { useMemo } from 'react';
import { useHttpClient, HttpClientMsal } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	return (
		<div style={{ height: '100vh' }}>
			<Workspace controller={controller} />
		</div>
	);
}

type Client = {
	fetch: (uri: string, init?: RequestInit) => Promise<Response>;
};

const createWorkspaceController = (client: Client) => {
	return createFusionWorkspace<Handover, unknown>(
		{ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo },
		(builder) =>
			builder
				// .addDataSource({
				// 	getResponseAsync: async (signal) => {
				// 		return await client.fetch(
				// 			'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover',
				// 			{ signal }
				// 		);
				// 	},
				// })
				// .addGrid(gridOptions)
				// .addCustomTab(customTab)
				.addConfig({
					appColor: 'purple',
					appKey: 'Handover',
					defaultTab: 'grid',
				})
				.addPowerBi({
					getConfig: (uri) => getEmbedInfo(uri, client),
					reportUri: 'pp-installation',
					getToken: async (reportUri) => {
						return await (
							await client.fetch(`https://pro-s-reports-ci.azurewebsites.net/reports/${reportUri}/token`)
						).json();
					},
				})
				.addSidesheet(sidesheetOptions)
				// .addGarden({
				// 	data: [],
				// 	nodeLabelCallback: (s) => s.commpkgNo,
				// 	getIdentifier: (s) => s.commpkgNo,
				// 	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
				// 	fieldSettings: {},
				// })
				.addMiddleware((mediator) => {
					mediator.onMount(() => console.log('App mounted'));
					mediator.onUnMount(() => console.log('App unmounted'));
				})
				// .addStatusBarItems(statusBar)
				.addModules([IndexedDbModule])
	);
};

async function getEmbedInfo(reportUri: string, client: Client) {
	const embedUri = `https://pro-s-reports-ci.azurewebsites.net/reports/${reportUri}/config/embedinfo`;
	const response = await client.fetch(embedUri);

	const data = await response.json();
	return data;
}
