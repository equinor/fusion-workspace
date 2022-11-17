import './App.css';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { memo } from 'react';

const MOCK_DATA: S[] = [
	{
		id: '124',
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

const Workspace = createFusionWorkspace<S, { length: number }>(
	{ appKey: 'Handover', getIdentifier: (s) => s.id },
	(s) =>
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
			.addWorkspaceState((filteredData) => ({ length: filteredData.length }))
			.addGrid({
				columnDefinitions: [
					{ field: 'id' },
					{
						field: 'age',
						valueGetter: (s) => {
							return s.context.length;
						},
					},
				],
			})
			.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
			.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
			.addGarden<ExtendedFields, CustomGroupByKeys>({
				getDisplayName: (s) => s.age.toString(),
				initialGrouping: { horizontalGroupingAccessor: 'commPkgNo', verticalGroupingKeys: [] },
				visuals: {
					calculateItemWidth: () => 200,
					getDescription: (s) => {
						return 'test';
					},
				},
				customViews: {
					customHeaderView: memo((args) => {
						return <div style={{ backgroundColor: 'red' }}>{args.garden[args.columnIndex].value}</div>;
					}),
					customItemView: memo((args) => {
						return (
							<div>
								<div>am custom</div>
								{args.columnExpanded && <div>Custom desc</div>}
							</div>
						);
					}),
				},
				// customViews: {
				// 	customGroupView: memo(() => <div>am custom</div>),
				// 	customGroupByView: ({ controller }) => {
				// 		console.log(controller.customState);
				// 		controller.customState?.length;

				// 		return <div>{JSON.stringify(controller.customState) ?? null}</div>;
				// 	},
				// },
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
