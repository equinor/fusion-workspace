import './App.css';
import { Workspace, createFusionWorkspace } from '@equinor/workspace-fusion';

type S = {
	id: string;
	age: number;
};

function App() {
	return (
		<div className="App" style={{ height: '100vh' }}>
			<Workspace controller={createWorkspace()} />
		</div>
	);
}

export default App;

function createWorkspace() {
	const controller = createFusionWorkspace<S>({ appKey: 'Handover', getIdentifier: (s) => s.id }, (s) =>
		s
			.addFilter([
				{
					name: 'id',
					valueFormatter: (s) => s.id,
					isQuickFilter: true,
				},
			])
			.addGrid({ columnDefinitions: [{ field: 'id' }, { field: 'age' }] })
			.addGarden({
				data: [],
				getIdentifier: (s) => s.id,
				initialGrouping: {
					horizontalGroupingAccessor: 'id',
					verticalGroupingKeys: [],
				},
				nodeLabelCallback: (s) => s.id,
			})
			.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
			.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
	);

	return controller;
}

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
