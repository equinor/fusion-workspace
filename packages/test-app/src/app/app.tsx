import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { Grid, GridController } from '@workspace/grid';
import { tokens } from '@equinor/eds-tokens';
import { useState } from 'react';
import { WorkspaceController } from '@workspace/workspace-core';
import { Button } from '@equinor/eds-core-react';
import { ICellRendererParams } from 'ag-grid-community';
const StyledApp = styled.div`
	background-color: ${tokens.colors.ui.background__default.hex};
	height: 100%;
	width: 100%;
`;

const StyledNavbar = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1.5em;
	background-color: ${tokens.colors.ui.background__medium.hex};
	padding: 0px 20px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${tokens.colors.text.static_icons__default.hex};
	font-size: 22px;
`;

function Navbar() {
	return (
		<StyledNavbar>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/garden">Garden</StyledLink>
			<StyledLink to="/grid">Grid</StyledLink>
			<StyledLink to="/workspace">Workspace</StyledLink>
		</StyledNavbar>
	);
}

interface Controllers<T> {
	grid: GridController<T>;
}

function createGridController() {
	const gridController = new GridController();
	gridController.columnDefs = [
		{
			field: 'id',
			resizable: true,
			sortable: true,
			cellRenderer: (cell: ICellRendererParams) => {
				return `SCR-${cell.value}`;
			},
		},
		{ field: 'title', resizable: true, sortable: true },
		{ field: 'sequenceNumber', resizable: true, sortable: true },
		{ field: 'description', resizable: true, sortable: true },
	];

	return gridController;
}

function createWorkspaceController() {
	const wc = new WorkspaceController<DefaultInterface, Controllers<DefaultInterface>, unknown, unknown, unknown>();
	wc.setData(mockData);
	wc.setFilteredData(mockData);
	wc.addController({
		controller: createGridController(),
		name: 'grid',
		config: (gc, wc) => {
			gc.setRowData(wc.getFilteredData());
			wc.onFilteredDataChanged((data) => gc.setRowData(data));
		},
	});

	return wc;
}

export function App() {
	const [workspaceController] = useState(createWorkspaceController());

	return (
		<StyledApp>
			<Navbar />
			<Button
				onClick={() =>
					workspaceController.setFilteredData([
						{
							id: '1213',
							title: 'String',
							sequenceNumber: 1212,
							description: 'Some desc',
						} as any,
					])
				}
			>
				Change filtered data
			</Button>
			<Routes>
				<Route path="/" element={<div></div>} />
				<Route
					path="/grid"
					element={
						<div>
							<Grid controller={workspaceController.controllers.grid} />
						</div>
					}
				/>
			</Routes>
			{/* END: routes */}
		</StyledApp>
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
];
