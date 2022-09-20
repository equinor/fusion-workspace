import React, { useMemo } from 'react';
import { useHttpClient, HttpClientMsal } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule, fusionBookmarksModule, handleBoomarksFromPortal } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, RenderStatus, sidesheetOptions, statusBar } from './workspaceConfig';
import { Button } from '@equinor/eds-core-react';

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	return (
		<div>
			<Button onClick={applyBookmark}>Apply bookmark</Button>
			<Button onClick={saveBookmark}>Save bookmark</Button>
			<Workspace controller={controller} />
		</div>
	);
}

function applyBookmark() {
	console.log(handleBoomarksFromPortal({ type: 'apply', bookmarkId: 'd3bb58a1-1ca1-456f-bed5-041069041157' }));
}

function saveBookmark() {
	const status = handleBoomarksFromPortal({ type: 'save', name: 'bookmark1' });
	console.log(status);
}

const createWorkspaceController = (client: HttpClientMsal) => {
	return createFusionWorkspace<Handover>({ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo }, (builder) =>
		builder
			.addDataSource({
				getResponseAsync: async (signal) =>
					await client.fetch(
						'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover',
						{ signal }
					),
			})
			.addFilter([
				{
					name: 'Comm status',
					valueFormatter: (pkg) => pkg.commpkgStatus,
					isQuickFilter: true,
					customValueRender: RenderStatus,
				},
				{ name: 'Comm ', valueFormatter: (pkg) => pkg.commpkgNo },
				{
					name: 'MC status',
					valueFormatter: (pkg) => pkg.mcStatus,
					isQuickFilter: true,
					customValueRender: RenderStatus,
				},
				{
					name: 'Discipline',
					valueFormatter: (pkg) => pkg.mcDisciplineCodes,
					isQuickFilter: true,
				},
				{
					name: 'Responsible',
					valueFormatter: (pkg) => pkg.responsible,
				},
				{
					name: 'System',
					valueFormatter: (pkg) => pkg.system,
				},
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
			.addModules([IndexedDbModule, fusionBookmarksModule])
	);
};
