import './App.css';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { isSubGroup, getGardenItems } from '@equinor/workspace-fusion/garden';
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
		.addGrid({ columnDefinitions: [{ field: 'id' }, { field: 'age' }] })
		.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
		.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
		.addGarden<ExtendedFields, CustomGroupByKeys, CustomState>({
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
