import { GridConfig, SidesheetConfig, StatusBarConfig, useWorkspace } from '@equinor/workspace-fusion';
import { Handover } from './types';
import { mockData } from './mockData';
import styled from 'styled-components';
import { Button } from '@equinor/eds-core-react';
import { HandoverSidesheet } from './HandoverSidesheet/HandoverSidesheet';

export const gridOptions: GridConfig<Handover> = {
	columnDefinitions: [
		{
			field: 'commPkgNo',
			valueGetter: (valueGetter) => valueGetter.data?.commpkgNo,
			onCellClicked: undefined,
			cellRenderer: (props) => <a href="gooogle.com">{props.valueFormatted ?? props.value}</a>,
		},
		{ field: 'Description', valueGetter: (s) => s.data?.description },
		{ field: 'Disciplines', valueGetter: (s) => s.data?.mcDisciplineCodes, enableRowGroup: true },
		{
			field: 'Comm pkg status',
			valueGetter: (s) => s.data?.commpkgStatus,
			cellRenderer: (props) =>
				(props.value || props.valueFormatted) && RenderStatus(props.valueFormatted ?? props.value),
		},
		{
			field: 'MC status',
			valueGetter: (s) => s.data?.mcStatus,
			cellRenderer: (props) => RenderStatus(props.valueFormatted ?? props.value),
		},
		{ field: 'Responsible', valueGetter: (s) => s.data?.responsible },
		{ field: 'Area', valueGetter: (s) => s.data?.area },
		{ field: 'System', valueGetter: (s) => s.data?.system },
		{ field: 'Priority 1', valueGetter: (s) => s.data?.priority1 },
		{ field: 'Priority 2', valueGetter: (s) => s.data?.priority2 },
		{ field: 'Priority 3', valueGetter: (s) => s.data?.priority3 },
		{ field: 'Planned start date', valueGetter: (s) => s.data?.plannedStartDate, headerName: 'Planned RFC' },
		{ field: 'forecastStartDate', headerName: 'Forecast RFC' },
		{ field: 'rfocPlannedDate 3', headerName: 'Planned RFO', initialHide: true },
		{ field: 'rfocActualDate', headerName: 'Actual RFO' },
	],
	gridOptions: {
		pagination: true,
		paginationPageSize: 100,
	},
};

/** Will render MC or Comm pkg status symbol */
const RenderStatus = (value: string) => {
	return (
		<span style={{ display: 'flex', alignItems: 'center' }}>
			<StyledCircle color={value === 'OK' ? 'green' : 'grey'} />
			{value}
		</span>
	);
};

const StyledCircle = styled.div<{ color: string }>`
	height: 16px;
	width: 16px;
	background-color: ${({ color }) => color};
	border-radius: 50%;
`;

export const customTab = {
	Component: CustomTab,
	HeaderComponent: () => <div>Custom tab</div>,
	name: 'Lines',
};

export const sidesheetOptions: SidesheetConfig<Handover> = {
	Component: HandoverSidesheet,
	getTitle: (ev) => {
		return ev.item.commpkgNo;
	},
};

export const dataSourceOptions = async (signal?: AbortSignal): Promise<Handover[]> =>
	new Promise((resolve) => {
		setTimeout(() => resolve(mockData), Math.random() * (5000 - 500) + 500);
	});

export const statusBar: StatusBarConfig<Handover> = (data: Handover[]) => [
	{ title: 'Total CP', value: data.reduce((prev) => prev + 1, 0) },
	{ title: 'RFO Accepted', value: data.reduce((prev, curr) => prev + (curr.rfocIsAccepted ? 1 : 0), 0) },
];

export function CustomTab() {
	const { clickService, dataService, isLoading } = useWorkspace();
	const { data, filteredData, setFilteredData } = dataService;
	return (
		<StyledCustomTab>
			<ul>
				<li>Data length: {data?.length}</li>
				<li>Filtered data length: {filteredData?.length}</li>
				<li>isLoading: {isLoading}</li>
			</ul>
			<Button onClick={() => clickService.click({ item: data?.[0] })}>Open sidesheet</Button>
			<Button onClick={() => setFilteredData(filteredData?.slice(0, 2) ?? [])}>Change data</Button>
		</StyledCustomTab>
	);
}

const StyledCustomTab = styled.div`
	height: 100%;
	width: 100%;
	background-color: rebeccapurple;
`;
