import React, { Fragment, useMemo, useState } from 'react';
import { HttpClientMsal, useHttpClient } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, RenderStatus, sidesheetOptions, statusBar } from './workspaceConfig';
import { gardenConfig } from './gardenConfig';
import { createSidesheet, useObservable, useSidesheet } from '@equinor/sidesheet';
import { Button } from '@equinor/eds-core-react';

const HandoverSidesheet = createSidesheet<{ id: string; title: string }, { title: string; description: string }>()
	.addConfig({
		defaultActiveTab: 'Workflow',
		defaultWidth: 200,
		maxWidth: 1000,
		minWidth: 200,
		color: 'orange',
	})
	.addGetItemAsync(async (id: string) => Promise.resolve({ id, title: 'Some handover item' }))
	.addMenuOptions([])
	.addProvider(({ children }) => {
		return <Fragment>{children}</Fragment>;
	})
	.addTab({
		name: 'Workflow',
		viewComponent: ({ item }) => {
			const { item$ } = useSidesheet();

			const a = useObservable(item$);
			console.log(a, item);

			return <div>Am tab {item.title}</div>;
		},
	})
	.addTab({ name: 'Details', viewComponent: () => <div>Am different</div> })
	.addSubHeadings((val) => [{ title: 'Phase', value: val.id }])
	.addTitle((s) => s.title).Create;

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	const [id, setId] = useState('123');

	return (
		<div>
			<Button onClick={() => setId((s) => s.concat(s).replaceAll(',', ''))}>SetId</Button>
			<HandoverSidesheet itemId={id} />
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
