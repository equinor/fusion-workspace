import Workspace, { WorkspaceConfig, WorkspaceController } from '@equinor/workspace-fusion';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { StatusBarConfig } from '@equinor/workspace-fusion/status-bar';
import { useCallback, useRef, useState } from 'react';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { BookmarksModule } from '@equinor/workspace-fusion-modules/bookmarks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
	const [shouldRender, setShouldRender] = useState(true);

	const getResponseAsync = useCallback(async () => {
		console.log('Look ma im a function');
		return new Promise<Response>((res, rej) =>
			setTimeout(
				() =>
					rej({
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
				<Button color={shouldRender ? 'danger' : 'primary'} onClick={() => setShouldRender((s) => !s)}>
					{shouldRender ? 'Unmount' : 'Mount'}
				</Button>
				{shouldRender && (
					<>
						<button onClick={() => workspaceApi.current?.openSidesheet({ type: 'admin' })}>
							open Admin
						</button>
						<button
							onClick={() =>
								workspaceApi.current?.openSidesheet({ type: 'custom2', props: { id: '123' } })
							}
						>
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
							powerBiOptions={{
								getEmbed: async () => ({
									embedUrl:
										'https://app.powerbi.com/reportEmbed?reportId=4b6a3f7e-7a4a-48f4-aa09-c162cb858fa9&groupId=bc434a80-6a54-41da-96e0-d9ff43e1cb0f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1ILVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVNhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVBhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YUV4cG9ydFRvIjp0cnVlfX0%3d',
									reportId: '4b6a3f7e-7a4a-48f4-aa09-c162cb858fa9',
								}),
								getErrorMessage: async () => RLSError,
								getToken: async () => {
									throw Error('Failed', { cause: new Response(undefined, { status: 200 }) });
								},
								reportUri: 'Handover-analytics',
							}}
							sidesheetOptions={sidesheet}
							dataOptions={{
								getResponseAsync: getResponseAsync,
								queryKey: ['Workspace', contextId],
								// initialData: [{ age: 178, contextId: '123', id: '123' }],
							}}
							modules={[
								BookmarksModule({
									getBookmark: async (id, signal) => {
										return {
											garden: {
												groupingKeys: {
													horizontalGroupingAccessor: 'age',
													verticalGroupingKeys: [],
												},
												selectedNodes: [],
											},
										};
									},
								}),
							]}
						/>
					</>
				)}
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

const RLSError = `## Row-Level security requirements:


*Your user type is **"Consultant"***


### Username (filter) would have been provided if: 
*Your user profile matched **Any** of the following requirement(s):* 
- User type: (**PermanentEmployee or ExtHire or Consultant**) 
- At least one of the following project base positions: (**Economic Analyst** or **Financial Controller** or **Project Control Manager** or **Project Director** or **Project Manager D&W** or **Project Manager Facilities** or **Project Manager Operation** or **Project Manager Petech** or **SURF manager** or **Project Procurement Manager (PPM)** or **Quality and Risk Manager** or **Technical Manager** or **Commercial manager** or **SSU and Authority Manager**) 


### Your generated effective identity used as row-level security argument:



`;
