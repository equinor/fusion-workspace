import './App.css';
import Workspace, { FusionMediator, WorkspaceConfig } from '@equinor/workspace-fusion';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { StatusBarConfig } from '@equinor/workspace-fusion/status-bar';
import { memo, useCallback, useRef, useState } from 'react';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { DataSourceConfig } from '@equinor/workspace-fusion/data-source';
import { microsoft_excel } from '@equinor/eds-icons';
import { Button } from '@equinor/eds-core-react';

type S = {
	id: string;
	age: number;
	contextId: string;
};

const options: WorkspaceConfig<S> = {
	getIdentifier: (s) => s.id,
	appKey: 'Handover',
	defaultTab: 'grid',
};

const gridOptions: GridConfig<S> = {
	columnDefinitions: [{ field: 'id', valueGetter: (s) => s.context.length }, { field: 'contextId' }],
};

const gardenOptions: GardenConfig<S> = {
	getDisplayName: (s) => s.id,
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
	customViews: {
		customItemView: memo((props) => {
			const context = props.controller.useContext();

			return <div>hello {JSON.stringify(context)}</div>;
		}),
	},
};

const filterOptions: FilterConfig<S> = { filterGroups: [{ name: 'id', valueFormatter: (s) => s.id }] };
const contextOptions = (data: S[]) => ({ length: data.length });
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
	const workspaceApi = useRef<null | FusionMediator<S, { length: number }>>(null);
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
				sidesheetOptions={{
					Sidesheet: (props) => {
						console.log(props);

						return <div>am sidesheet </div>;
					},
				}}
				dataOptions={{
					getResponseAsync: getResponseAsync,
				}}
			/>
		</div>
	);
}

export default App;
