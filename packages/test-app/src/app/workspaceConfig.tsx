import {
	GridConfig,
	SidesheetConfig,
	StatusBarConfig,
	WorkspaceOnClick,
	useWorkspace,
} from '@equinor/workspace-fusion';
import { DefaultInterface } from './types';
import { mockData } from './mockData';

import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
import { Button } from '@equinor/eds-core-react';

export const gridOptions: GridConfig<DefaultInterface> = {
	columnDefinitions: [{ field: 'id' }, { field: 'description' }, { field: 'title' }, { field: 'sequenceNumber' }],
};

export const customTab = {
	Component: CustomTab,
	HeaderComponent: () => <div>Custom tab</div>,
	name: 'Lines',
};

export const sidesheetOptions: SidesheetConfig<DefaultInterface> = {
	Component: SidesheetComponent,
	getTitle: (ev) => {
		return ev.item.title;
	},
};

export const dataSourceOptions = async () => mockData;

export const statusBarConfig: StatusBarConfig<DefaultInterface> = [
	{ getValue: (data) => ({ title: 'Count', value: data.length }) },
	{
		getValue: (data) => ({
			title: 'Sum sequence numbers',
			value: data.reduce((prev, curr) => (prev = prev + curr.sequenceNumber), 0),
			description: 'Sums all the sequence numbers',
		}),
	},
];

export function SidesheetComponent(ev: WorkspaceOnClick<DefaultInterface>) {
	const { filteredData } = useWorkspace();

	return (
		<div style={{ height: '100%', width: '100%', backgroundColor: 'green' }}>
			{ev.item.title}
			{ev.item.description}
			{filteredData?.length}
		</div>
	);
}

export function CustomTab() {
	const { click, data, filteredData, isLoading, setFilteredData } = useWorkspace();

	return (
		<StyledCustomTab>
			<ul>
				<li>Data length: {data?.length}</li>
				<li>Filtered data length: {filteredData?.length}</li>
				<li>isLoading: {isLoading}</li>
			</ul>
			<Button onClick={() => click({ item: data?.[0] })}>Open sidesheet</Button>
			<Button onClick={() => setFilteredData(filteredData?.slice(0, 2) ?? [])}>Change data</Button>
		</StyledCustomTab>
	);
}

const StyledCustomTab = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${tokens.colors.ui.background__medium.hex};
`;
