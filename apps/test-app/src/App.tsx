import './App.css';
import Workspace, { FusionMediator, WorkspaceConfig } from '@equinor/workspace-fusion';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { StatusBarConfig } from '@equinor/workspace-fusion/status-bar';
import { useCallback, useRef, useState } from 'react';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { DataSourceConfig } from '@equinor/workspace-fusion/data-source';
import { Button } from '@equinor/eds-core-react';

// const MOCK_DATA: S[] = [
// 	{
// 		id: '124',
// 		age: 18,
// 	},
// 	{
// 		id: '594ed20c-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5ccd8d6a-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// 	{
// 		id: '123',
// 		age: 18,
// 	},
// ];

type S = {
	id: string;
	age: number;
	contextId: string;
};

const options: WorkspaceConfig<S> = {
	getIdentifier: (s) => s.id,
};

const gridOptions: GridConfig<S> = {
	columnDefinitions: [{ field: 'id', valueGetter: (s) => s.context.length }, { field: 'contextId' }],
};

const gardenOptions: GardenConfig<S> = {
	getDisplayName: (s) => s.id,
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
};

const filterOptions: FilterConfig<S> = { filterGroups: [{ name: 'id', valueFormatter: (s) => s.id }] };

const statusBarOptions: StatusBarConfig<S> = (data) => [{ title: 'Count', value: data.length }];

const getItems = (contextId: string) => [
	{ age: 2, id: '123', contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
];

function App() {
	const workspaceApi = useRef<null | FusionMediator<S>>(null);
	const [contextId, setContextId] = useState('abc');

	const getResponseAsync = useCallback(async () => {
		return new Promise<Response>((res) =>
			setTimeout(
				() =>
					res({
						status: 200,
						json: async () => getItems(contextId),
					} as Response),
				2000
			)
		);
	}, [contextId]);

	return (
		<div className="App" style={{ height: '100vh' }}>
			<Button onClick={() => setContextId((Math.random() * 16).toString())}>Switch context</Button>
			<Workspace
				onWorkspaceReady={(ev) => {
					workspaceApi.current = ev.api;
				}}
				contextOptions={contextOptions}
				statusBarOptions={statusBarOptions}
				workspaceOptions={options}
				gridOptions={gridOptions}
				gardenOptions={gardenOptions}
				filterOptions={filterOptions}
				dataOptions={{
					getResponseAsync: getResponseAsync,
					// responseParser: responseParser,
				}}
			/>
		</div>
	);
}

export default App;

const contextOptions = (data: S[]) => ({ length: data.length });

// const Workspace = createFusionWorkspace<S, { length: number }>(
// 	{ appKey: 'Handover', getIdentifier: (s) => s.id },
// 	(s) =>
// 		s
// 			.addFilter({
// 				filterGroups: [
// 					{
// 						name: 'id',
// 						valueFormatter: (s) => s.id,
// 						isQuickFilter: true,
// 					},
// 				],
// 			})
// 			.addWorkspaceState((filteredData) => ({ length: filteredData.length }))
// 			.addGrid({
// 				columnDefinitions: [
// 					{ field: 'id' },
// 					{
// 						field: 'age',
// 						valueGetter: (s) => {
// 							return s.context.length;
// 						},
// 					},
// 				],
// 			})
// 			.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
// 			.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
// 			.addGarden<ExtendedFields, CustomGroupByKeys>({
// 				getDisplayName: (s) => s.age.toString(),
// 				initialGrouping: { horizontalGroupingAccessor: 'commPkgNo', verticalGroupingKeys: [] },

// 				customViews: {
// 					customGroupByView: ({ controller }) => {
// 						console.log(controller.customState);
// 						controller.customState?.length;

// 						return <div>{JSON.stringify(controller.customState) ?? null}</div>;
// 					},
// 				},
// 			})
// );

type CustomState = {
	NotSure: 'not sure';
};

type CustomGroupByKeys = {
	SOmeKey: 'Some key';
};

type ExtendedFields = 'Yes' | 'no';

// customGroupByView: Controller<types>
