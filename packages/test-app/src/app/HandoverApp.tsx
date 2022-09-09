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

	return <Workspace controller={controller} />;
}

const createWorkspaceController = (client: HttpClientMsal) => {
	return createFusionWorkspace<Handover, unknown>(
		{ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo },
		({ addDataSource }) =>
			addDataSource(async (signal) => {
				return await (
					await client.fetch(
						'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover',
						{ signal }
					)
				).json();
			})
				.addFilter([
					{ name: 'CommPkg', valueFormatter: (pkg) => pkg.commpkgNo, isQuickFilter: true },
					{ name: 'MC status', valueFormatter: (pkg) => pkg.mcStatus, isQuickFilter: true },
				])
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
					mediator.onMount(() => console.log('App mounted'));
					mediator.onUnMount(() => console.log('App unmounted'));
				})
				.addStatusBarItems(statusBar)
				.addModules([IndexedDbModule])
	);
};
