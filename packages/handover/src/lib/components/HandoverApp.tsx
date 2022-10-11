import React, { Fragment, useMemo } from 'react';
import { HttpClientMsal, useHttpClient } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, RenderStatus, sidesheetOptions, statusBar } from './workspaceConfig';
import { gardenConfig } from './gardenConfig';
import { createSidesheet, Sidesheet } from '@equinor/sidesheet';
import { Button } from '@equinor/eds-core-react';

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	const sidesheet = useMemo(() => {
		return createSidesheet<{ id: string; title: string }, { title: string; description: string }>()
			.addConfig({
				defaultActiveTab: 'Workflow',
				defaultWidth: 200,
				maxWidth: 1000,
				minWidth: 200,
				color: 'yellow',
			})
			.addMenuOptions([])
			.addProvider(({ children }) => <Fragment>{children}</Fragment>)
			.addTab({ name: 'Workflow', viewComponent: ({ item }) => <div>Am tab {item.title}</div> })
			.addTab({ name: 'Details', viewComponent: () => <div>Am different</div> })
			.addSubHeadings((val) => [{ title: 'Phase', value: val.title }])
			.addTitle((s) => s.title);
	}, []);

	return (
		<div>
			<Button onClick={() => sidesheet.controller.item$.next({ id: '123', title: 'SCC-857' })}>Set item</Button>
			<Button
				onClick={() =>
					sidesheet.controller.config$.next({ ...sidesheet.controller.config$.value, color: 'red' })
				}
			>
				Set Sidesheet color
			</Button>
			<Button onClick={() => sidesheet.controller.throwError({ description: 'error', title: 'Oops' })}>
				Set error
			</Button>
			<Sidesheet controller={sidesheet.controller} />
		</div>
	);

	return <Workspace controller={controller} />;
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
			.addFusionPowerBI({ reportUri: 'pp-work-preparation' })
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
			.addGarden(gardenConfig)
			.addMiddleware((mediator) => {
				mediator.onMount(() => console.log('App mounted'));
				mediator.onUnMount(() => console.log('App unmounted'));
			})
			.addStatusBarItems(statusBar)
			.addModules([IndexedDbModule])
	);
};
