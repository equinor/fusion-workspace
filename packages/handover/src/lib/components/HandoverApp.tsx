import React, { useMemo } from 'react';
import { HttpClientMsal, useHttpClient } from '@equinor/fusion-framework-react-app/http';
import { createFusionWorkspace, FusionClient } from '@equinor/workspace-fusion';
import { IndexedDbModule } from '@equinor/workspace-fusion-modules';
import { Workspace } from '@equinor/workspace-react';

import { Handover } from './types';
import { customTab, gridOptions, RenderStatus, sidesheetOptions, statusBar } from './workspaceConfig';
import { gardenConfig } from './gardenConfig';

export function HandoverApp() {
	const client = useHttpClient('portal');

	const controller = useMemo(() => {
		return createWorkspaceController(client);
	}, []);

	return <Workspace controller={controller} />;
}

const createWorkspaceController = (client: HttpClientMsal) => {
	return createFusionWorkspace<Handover>({ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo }, (builder) =>
		builder
			// .addDataSource({
			// 	getResponseAsync: async (signal) =>
			// 		await client.fetch(
			// 			'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover',
			// 			{ signal }
			// 		),
			// })
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
				mediator.dataService.setData([
					{
						commpkgNo: '1732-12',
						actualFinishDate: new Date().toLocaleDateString(),
						actualStartDate: new Date().toLocaleDateString(),
						area: 'aa8',
						commpkgStatus: 'OS',
						createdDate: new Date().toLocaleDateString(),
						demolitionActualFinishDate: new Date().toLocaleDateString(),
						demolitionActualStartDate: new Date().toLocaleDateString(),
						demolitionDCCAcceptedDate: new Date().toLocaleDateString(),
						demolitionForecastFinishDate: new Date().toLocaleDateString(),
						demolitionForecastStartDate: new Date().toLocaleDateString(),
						demolitionPlannedFinishDate: new Date().toLocaleDateString(),
						demolitionPlannedStartDate: new Date().toLocaleDateString(),
						demolitionRFRCShippedDate: new Date().toLocaleDateString(),
						description: '12',
						forecastFinishDate: new Date().toLocaleDateString(),
						forecastStartDate: new Date().toLocaleDateString(),
						forecastTacDate: new Date().toLocaleDateString(),
						hasBlueLineMarkup: true,
						hasMaintenanceProgram: true,
						hasOperationAgreement: true,
						hasUnsignedActions: true,
						hasYellowLineMarkup: true,
						id: '12',
						isDemolition: false,
						isInOperation: true,
						isReadyForStartup: true,
						isSubsea: true,
						mcDisciplineCodes: [],
						mcPkgsCount: 0,
					} as unknown as Handover,
				]);
				mediator.onMount(() => console.log('App mounted'));
				mediator.onUnMount(() => console.log('App unmounted'));
			})
			.addStatusBarItems(statusBar)
			.addModules([IndexedDbModule])
	);
};
