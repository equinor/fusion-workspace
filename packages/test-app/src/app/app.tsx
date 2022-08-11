import { useEffect, useState } from 'react';
import { FusionWorkspaceBuilder, WorkspaceOnClick } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';

function createFusionWorkspace<TError, TContext>() {
	const controller = new FusionWorkspaceBuilder<DefaultInterface, TError, TContext>('Scope change')
		.addGrid({
			columnDefinitions: [
				{ field: 'id' },
				{ field: 'description' },
				{ field: 'title' },
				{ field: 'sequenceNumber' },
			],
		})
		.addSidesheet({ Component: SidesheetComponent })
		.addDataSource(async () => mockData)
		.create();

	//TODO:  Will not reflect data changes
	//Possible solution workspace-react takes in a status bar item component to mount, will be wrapped around a data listener
	controller.controllers.view.statusBarItems = [
		{ title: 'Requests', value: 2 },
		{ title: 'Something else', value: 5 },
	];

	return controller;
}

function SidesheetComponent(ev: WorkspaceOnClick<DefaultInterface>) {
	return (
		<div style={{ height: '100%', width: '100%', backgroundColor: 'green' }}>
			{ev.item.title}
			{ev.item.description}
		</div>
	);
}

export function App() {
	const [workspaceController] = useState(createFusionWorkspace());

	return <Workspace controller={workspaceController.controllers.view} />;
}

export default App;

interface DefaultInterface {
	id: string;
	sequenceNumber: number;
	title: string;
	description: string;
	phase: string;
	originSource: string;
	originSourceId: string | null;
	changeCategory: ChangeCategory;
	scope: Scope;
}

interface ChangeCategory {
	id: string;
	name: string;
}
interface Scope {
	id: string;
	name: string;
}

const mockData = [
	{
		id: '30dfd9a8-6ac2-4ef5-0a66-08da58f76728',
		sequenceNumber: 895,
		title: 'Test for å lage draft',
		description: 'Test',
		phase: 'IC',
		originSource: 'NotApplicable',
		originSourceId: null,
		changeCategory: {
			id: 'd632b852-cdd8-4bc5-1adf-08da10a71e28',
			name: 'Quality',
		},
		scope: {
			id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06115',
			name: 'Hull',
		},
	},
	{
		id: 'dd220b54-5e7f-4d7c-e9cf-08da5830f332',
		sequenceNumber: 894,
		title: 'xxx',
		description: 'dsa',
		phase: 'IC',
		originSource: 'NotApplicable',
		originSourceId: null,
		changeCategory: {
			id: 'a4cda724-0290-4274-1ae1-08da10a71e18',
			name: 'EPma activity only',
		},
		scope: {
			id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06112',
			name: 'Cargo Deck',
		},
	},
	{
		id: 'dd220b54-5e7f-4d7c-e9cf-08da5830f332',
		sequenceNumber: 893,
		title: 'xxx',
		description: 'dsa',
		phase: 'IC',
		originSource: 'NotApplicable',
		originSourceId: null,
		changeCategory: {
			id: 'a4cda724-0290-4274-1ae1-08da10a71e18',
			name: 'EPma activity only',
		},
		scope: {
			id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06112',
			name: 'Cargo Deck',
		},
	},
	{
		id: 'dd220b54-5e7f-4d7c-e9cf-08da5830f332',
		sequenceNumber: 892,
		title: 'xxx',
		description: 'dsa',
		phase: 'IC',
		originSource: 'NotApplicable',
		originSourceId: null,
		changeCategory: {
			id: 'a4cda724-0290-4274-1ae1-08da10a71e18',
			name: 'EPma activity only',
		},
		scope: {
			id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06112',
			name: 'Cargo Deck',
		},
	},
	{
		id: 'dd220b54-5e7f-4d7c-e9cf-08da5830f332',
		sequenceNumber: 891,
		title: 'xxx',
		description: 'dsa',
		phase: 'IC',
		originSource: 'NotApplicable',
		originSourceId: null,
		changeCategory: {
			id: 'a4cda724-0290-4274-1ae1-08da10a71e18',
			name: 'EPma activity only',
		},
		scope: {
			id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06112',
			name: 'Cargo Deck',
		},
	},
];
