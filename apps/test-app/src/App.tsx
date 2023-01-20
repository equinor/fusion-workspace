import Workspace, { WorkspaceConfig, WorkspaceController } from '@equinor/workspace-fusion';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { StatusBarConfig } from '@equinor/workspace-fusion/status-bar';
import { useCallback, useRef, useState } from 'react';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { BookmarksModule } from '@equinor/workspace-fusion-modules/bookmarks';
import { QueryClient, QueryClientProvider } from 'react-query';

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
	columnDefinitions: [
		{ field: 'id', valueGetter: (s) => 's.context.length' },
		{ field: 'contextId' },
		{ field: 'age' },
	],
};

const gardenOptions: GardenConfig<S> = {
	getDisplayName: (s) => s.id,
	initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
	// customViews: {
	// 	customItemView: memo((props) => {
	// 		const context = props.controller.useContext();

	// 		return <div>hello {JSON.stringify(context)}</div>;
	// 	}),
	// },
};

const filterOptions: FilterConfig<S> = {
	filterGroups: [
		{ name: 'id', valueFormatter: (s) => s.id },
		{ name: 'age', valueFormatter: (s) => s.age, isQuickFilter: true },
	],
};
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

const client = new QueryClient();

function App() {
	const workspaceApi = useRef<WorkspaceController<S, MyTypes, { length: number }> | null>(null);
	const [contextId, setContextId] = useState('abc');

	const getResponseAsync = useCallback(async () => {
		console.log('Look ma im a function');
		return new Promise<Response>((res, rej) =>
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
		<QueryClientProvider client={client}>
			<div className="App" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
				<button onClick={() => workspaceApi.current?.openSidesheet({ type: 'admin' })}>open Admin</button>
				<button onClick={() => workspaceApi.current?.openSidesheet({ type: 'custom2', props: { id: '123' } })}>
					Open custom2
				</button>
				<button onClick={() => workspaceApi.current?.openSidesheet({ type: 'create_sidesheet' })}>
					Open create
				</button>
				<Workspace
					contextOptions={contextOptions}
					statusBarOptions={statusBarOptions}
					workspaceOptions={options}
					gridOptions={gridOptions}
					gardenOptions={gardenOptions}
					filterOptions={filterOptions}
					sidesheetOptions={sidesheet}
					dataOptions={{
						getResponseAsync: getResponseAsync,
						queryKey: ['Workspace', contextId],
						initialData: [{ age: 178, contextId: '123', id: '123' }],
					}}
					modules={[
						BookmarksModule({
							getBookmark: async (id, signal) => {
								return {
									garden: {
										groupingKeys: { horizontalGroupingAccessor: 'age', verticalGroupingKeys: [] },
										selectedNodes: [],
									},
								};
							},
						}),
					]}
				/>
			</div>
		</QueryClientProvider>
	);
}

export default App;

const sidesheet: SidesheetConfig<S, { length: number }, MyTypes> = {
	type: 'default',
	CreateSidesheet: () => {
		return <div style={{ width: '300px' }}>Am create sideshet</div>;
	},
	DetailsSidesheet: (props) => {
		return (
			<div style={{ width: '300px' }}>
				am details
				<button onClick={() => props.controller.invalidate && props.controller.invalidate()}>Invalidate</button>
			</div>
		);
	},

	//type: "advanced"
	// Sidesheet: (test) => {
	// 	const { controller, ev } = test;

	// 	switch (ev.type) {
	// 		case 'admin':
	// 			return (
	// 				<div style={{ width: '200px' }}>
	// 					Admin sidesheet {JSON.stringify(ev)}
	// 					<button onClick={() => controller.close()}>close</button>
	// 				</div>
	// 			);
	// 		case 'custom2':
	// 			return (
	// 				<div>
	// 					Custom 2{JSON.stringify(ev)}
	// 					<button onClick={() => controller.close()}>close</button>
	// 				</div>
	// 			);
	// 		case 'details_sidesheet':
	// 			return (
	// 				<div style={{ width: '200px' }}>
	// 					<span>Details Sidesheet</span>
	// 					<button onClick={() => controller.close()}>close</button>
	// 					<div>{JSON.stringify(ev)}</div>
	// 				</div>
	// 			);
	// 		case 'create_sidesheet': {
	// 			return <div>create sidesheet</div>;
	// 		}
	// 	}
	// },
};

type Admin = {
	type: 'admin';
};

type Custom2 = {
	type: 'custom2';
	props: { id: string };
};

type MyTypes = Admin | Custom2;
