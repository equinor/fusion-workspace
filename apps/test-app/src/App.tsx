import './App.css';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { isSubGroup, getGardenItems } from '@equinor/workspace-fusion/garden';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { HandoverSidesheet } from './sidesheet/test-app-sidesheet/HandoverSidesheet';
import { useEffect, useRef, useState } from 'react';
import { ScopeChangeSidesheet } from './sidesheet/test-app-sidesheet/ScopeChangeSidesheet';
import { WorkOrderSidesheet } from './sidesheet/test-app-sidesheet/WorkorderSidesheet';
const MOCK_DATA: S[] = [
	{
		id: '594ed20c-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '594ed20c-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5ccd8d6a-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
];

type S = {
	id: string;
	age: number;
};

function App() {
	return (
		<div className="App" style={{ height: '100vh' }}>
			<Workspace />
		</div>
	);
}

export default App;

const Workspace = createFusionWorkspace<S>({ appKey: 'Handover', getIdentifier: (s) => s.id }, (s) =>
	s
		.addFilter({
			filterGroups: [
				{
					name: 'id',
					valueFormatter: (s) => s.id,
					isQuickFilter: true,
				},
			],
		})
		.addSidesheet({ Component: (click) => <WorkOrderSidesheet woId={click.item.id} /> })
		.addGrid({ columnDefinitions: [{ field: 'id' }, { field: 'age' }] })
		.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
		.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
		.addGarden<ExtendedFields, CustomGroupByKeys>({
			getDisplayName: (s) => s.age.toString(),
			initialGrouping: { horizontalGroupingAccessor: 'commPkgNo', verticalGroupingKeys: [] },

			customViews: {
				customGroupByView: (s) => {
					return <div></div>;
				},
			},
		})
);

type CustomState = {
	NotSure: 'not sure';
};

type CustomGroupByKeys = {
	SOmeKey: 'Some key';
};

type ExtendedFields = 'Yes' | 'no';

// customGroupByView: Controller<types>
