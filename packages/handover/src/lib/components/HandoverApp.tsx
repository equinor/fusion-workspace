import React, { useMemo } from 'react';
import { HttpClientMsal, useHttpClient } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace, FusionClient, useWorkspace } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, RenderStatus, sidesheetOptions, statusBar } from './workspaceConfig';
import { gardenConfig } from './gardenConfig';
import { CircularProgress, Icon } from '@equinor/eds-core-react';
import { star_circle, star_filled, star_half, star_outlined } from '@equinor/eds-icons';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { openDB } from 'idb';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { GanttChart } from './GanttChart';

Icon.add({ star_circle, star_filled, star_half, star_outlined });

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	return <Workspace controller={controller} />;
}

const createWorkspaceController = (client: HttpClientMsal) => {
	return createFusionWorkspace<Handover>(
		{ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo },
		(builder) =>
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
				.addCustomTab({
					name: 'favorited',
					TabIcon: () => <Icon name="star_outlined" color={'#6F6F6F'} />,
					Component: () => (
						<QueryClientProvider client={new QueryClient()}>
							<StarredItems />
						</QueryClientProvider>
					),
				})
				.addCustomTab({
					Component: GanttChart,
					name: 'gantt',
					TabIcon: () => <div>gantt</div>,
				})
				.addConfig({
					appColor: 'purple',
					appKey: 'Handover',
					defaultTab: 'Home',
				})
				.addSidesheet(sidesheetOptions)
				.addGarden(gardenConfig)
				.addMiddleware((mediator) => {
					mediator.onMount(() => console.log('App mounted'));
					mediator.onUnMount(() => console.log('App unmounted'));
				})
				.addStatusBarItems(statusBar)
		// .addModules([IndexedDbModule])
	);
};

const StarredItems = () => {
	const { dataService } = useWorkspace();

	if (!dataService.filteredData) {
		return <div></div>;
	}

	const { data: starred, isLoading } = useQuery('starred', { queryFn: () => StarredItemsDb.read('starred') });

	if (isLoading) {
		return <CircularProgress />;
	}

	console.log(starred);

	return (
		<div style={{ height: '1000px', width: '1000px' }} className="ag-theme-alpine">
			<AgGridReact
				columnDefs={gridOptions.columnDefinitions}
				rowData={(dataService.filteredData as Handover[]).filter((s) => starred?.includes(s.commpkgNo))}
			/>
		</div>
	);
};

const TABLE_NAME = 'Starred';
const DB_NAME = 'Workspace';

export class StarredItemsDb {
	static save = async (action: SaveAction) => {
		await this.patchUserSettings(action);
	};

	private static patchUserSettings = async (payload: SaveAction) => {
		const db = await this.openDb();
		const existing = await StarredItemsDb.read('starred');
		await db.put(
			TABLE_NAME,
			[...existing, payload.id].filter((v, i, a) => a.indexOf(v) === i),
			'starred'
		);
		db.close();
	};

	private static openDb = async () => {
		return await openDB(DB_NAME, 1, {
			upgrade(db) {
				db.createObjectStore(TABLE_NAME);
			},
		});
	};

	static read = async (key: string): Promise<string[]> => {
		const starred: string[] = await (await this.openDb()).get(TABLE_NAME, key);

		return starred;
	};
}

type SaveAction = {
	action: 'save';
	id: string;
};
