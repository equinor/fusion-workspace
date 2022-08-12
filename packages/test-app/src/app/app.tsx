import { useState } from 'react';
import { FusionWorkspaceBuilder, WorkspaceOnClick } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { Button } from '@equinor/eds-core-react';

function createFusionWorkspace<TError>() {
	const controller = new FusionWorkspaceBuilder<DefaultInterface, TError>('Scope change request', 'purple')
		.addGrid({
			columnDefinitions: [
				{ field: 'id' },
				{ field: 'description' },
				{ field: 'title' },
				{ field: 'sequenceNumber' },
			],
		})
		.addCustomTab({
			Component: ({ data, onClick }) => <div onClick={() => onClick({ item: data[0] })}>{data.length}</div>,
			HeaderComponent: () => <div>Custom tab</div>,
			name: 'Lines',
		})
		.addSidesheet({ Component: SidesheetComponent })
		.addDataSource(async () => mockData)
		.addStatusBarItems([
			{ getValue: (data) => ({ title: 'Count', value: data.length }) },
			{
				getValue: (data) => ({
					title: 'Sum sequence numbers',
					value: data.reduce((prev, curr) => (prev = prev + curr.sequenceNumber), 0),
					description: 'Sums all the sequence numbers',
				}),
			},
		])
		.create();

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

	return (
		<div>
			<Button onClick={() => workspaceController.setFilteredData(mockData.splice(0, 2))}>Change data</Button>
			<Workspace controller={workspaceController.controllers.view} />
		</div>
	);
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
