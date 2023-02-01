import Workspace, { WorkspaceConfig, WorkspaceController } from '@equinor/workspace-fusion';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { StatusBarConfig } from '@equinor/workspace-fusion/status-bar';
import { useCallback, useReducer, useRef, useState } from 'react';
import { GardenConfig } from '@equinor/workspace-fusion/garden';
import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { BookmarksModule } from '@equinor/workspace-fusion-modules/bookmarks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Button, Checkbox, Popover } from '@equinor/eds-core-react';
import { PowerBiConfig } from '@equinor/workspace-fusion/power-bi';

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

const reducer = (
	state: Debugger,
	action: { type: 'RESPONSE' | 'RENDER' | 'GRID' | 'GARDEN' | 'POWERBI' }
): Debugger => {
	switch (action.type) {
		case 'RESPONSE':
			return { ...state, shouldFailDataset: !state.shouldFailDataset };
		case 'RENDER':
			return { ...state, shouldRender: !state.shouldRender };

		case 'GRID':
			return {
				...state,
				tabs: state.tabs.includes('grid') ? state.tabs.filter((s) => s !== 'grid') : [...state.tabs, 'grid'],
			};
		case 'GARDEN':
			return {
				...state,
				tabs: state.tabs.includes('garden')
					? state.tabs.filter((s) => s !== 'garden')
					: [...state.tabs, 'garden'],
			};
		case 'POWERBI':
			return {
				...state,
				tabs: state.tabs.includes('powerbi')
					? state.tabs.filter((s) => s !== 'powerbi')
					: [...state.tabs, 'powerbi'],
			};

		default:
			return state;
	}
};

type Debugger = {
	shouldRender: boolean;
	shouldFailDataset: boolean;
	tabs: ('grid' | 'garden' | 'powerbi')[];
};

const initial: Debugger = {
	shouldFailDataset: true,
	shouldRender: true,
	tabs: ['grid', 'garden', 'powerbi'],
};

function App() {
	const [{ shouldFailDataset, shouldRender, tabs }, dispatch] = useReducer(reducer, initial);
	const workspaceApi = useRef<WorkspaceController<S, MyTypes, { length: number }> | null>(null);
	const [contextId, setContextId] = useState('abc');

	const getResponseAsync = async () =>
		new Promise<Response>((res, rej) =>
			setTimeout(
				() =>
					shouldFailDataset
						? rej({ status: 400 })
						: res({
								status: 200,
								json: async () => getItems(contextId),
						  } as Response),
				2000
			)
		);

	return (
		<QueryClientProvider client={client}>
			<div className="App" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
				<Button color={shouldRender ? 'danger' : 'primary'} onClick={() => dispatch({ type: 'RENDER' })}>
					{shouldRender ? 'Unmount' : 'Mount'}
				</Button>
				<Button
					color={!shouldFailDataset ? 'danger' : 'primary'}
					onClick={() => dispatch({ type: 'RESPONSE' })}
				>
					{shouldFailDataset ? 'success_dataset' : 'Fail_dataset'}
				</Button>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Checkbox onChange={(e) => dispatch({ type: 'GRID' })} checked={tabs.includes('grid')} /> Grid
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Checkbox onChange={(e) => dispatch({ type: 'GARDEN' })} checked={tabs.includes('garden')} /> Garden
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Checkbox onChange={(e) => dispatch({ type: 'POWERBI' })} checked={tabs.includes('powerbi')} />{' '}
					Powerbi
				</div>

				{shouldRender && (
					<>
						<Workspace
							contextOptions={contextOptions}
							statusBarOptions={statusBarOptions}
							workspaceOptions={options}
							gridOptions={tabs.includes('grid') ? gridOptions : undefined}
							gardenOptions={tabs.includes('garden') ? gardenOptions : undefined}
							filterOptions={filterOptions}
							sidesheetOptions={sidesheet}
							powerBiOptions={tabs.includes('powerbi') ? powerbiOptions : undefined}
							dataOptions={{
								getResponseAsync: getResponseAsync,
								queryKey: ['Workspace', shouldFailDataset ? 'true' : 'false'],
								// initialData: [{ age: 178, contextId: '123', id: '123' }],
							}}
						/>
					</>
				)}
			</div>
		</QueryClientProvider>
	);
}

const powerbiOptions: PowerBiConfig = {
	getEmbed: async () => {
		throw new Error('', { cause: new Response(undefined, { status: 403 }) });
	},
	getErrorMessage: async () => {
		throw new Error('', { cause: new Response(undefined, { status: 403 }) });
	},
	getToken: async () => {
		throw new Error('', { cause: new Response(undefined, { status: 403 }) });
	},
	reportUri: 'unknown',
	ReportMetaData: ({ reportUri }) => (
		<>
			<Popover.Header>{reportUri}</Popover.Header>
			<Popover.Content>Last updated: {new Date().toLocaleDateString()}</Popover.Content>
		</>
	),
};

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
