import './App.css';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { isSubGroup, getGardenItems } from '@equinor/workspace-fusion/garden';
import { HandoverSidesheet } from './sidesheet/test-app-sidesheet/HandoverSidesheet';
import { useEffect, useRef, useState } from 'react';
import { ScopeChangeSidesheet } from './sidesheet/test-app-sidesheet/ScopeChangeSidesheet';
import { WorkOrderSidesheet } from './sidesheet/test-app-sidesheet/WorkorderSidesheet';
const MOCK_DATA: S[] = [
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
	const ref = useRef<HTMLDivElement | null>(null);
	const mounted = useRef(false);
	useEffect(() => {
		let cleanup: () => void;
		if (!mounted.current) {
			cleanup = WorkOrderSidesheet({ el: ref.current as HTMLDivElement });
			mounted.current = true;
			return;
		}
		return () => cleanup();
	}, []);

	return (
		<div className="App" style={{ height: '100vh' }}>
			<div ref={ref}></div>
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
		.addGrid({ columnDefinitions: [{ field: 'id' }, { field: 'age' }] })
		.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
		.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
);
