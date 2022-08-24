import { GridConfig, SidesheetConfig, StatusBarConfig, WorkspaceOnClick } from '@equinor/workspace-fusion';
import { Handover } from './types';
import { mockData } from './mockData';
import styled from 'styled-components';

export const gridOptions: GridConfig<Handover> = {
	columnDefinitions: [
		{
			field: 'commPkgNo',
			valueGetter: (s) => s.data?.commpkgNo,
			onCellClicked: undefined,
			cellRenderer: (props) => <a href="gooogle.com">{props.valueFormatted ?? props.value}</a>,
		},
		{ field: 'Description', valueGetter: (s) => s.data?.description },
		{ field: 'Disciplines', valueGetter: (s) => s.data?.mcDisciplineCodes },
		{
			field: 'Comm pkg status',
			valueGetter: (s) => s.data?.commpkgStatus,
			cellRenderer: (props) => RenderStatus(props.valueFormatted ?? props.value),
		},
		{
			field: 'MC status',
			valueGetter: (s) => s.data?.mcStatus,
			cellRenderer: (props) => RenderStatus(props.valueFormatted ?? props.value),
		},
		{ field: 'Responsible', valueGetter: (s) => s.data?.responsible },
		{ field: 'Area', valueGetter: (s) => s.data?.area },
		{ field: 'System', valueGetter: (s) => s.data?.system },
	],
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
	Component: ({ data, onClick }) => <div onClick={() => onClick({ item: data[0] })}>{data.length}</div>,
	HeaderComponent: () => <div>Custom tab</div>,
	name: 'Lines',
};

export const sidesheetOptions: SidesheetConfig<Handover> = {
	Component: SidesheetComponent,
	getTitle: (ev) => {
		return ev.item.commpkgNo;
	},
};

export const dataSourceOptions = async (): Promise<Handover[]> =>
	new Promise((resolve) => {
		setTimeout(() => resolve(mockData), Math.random() * (5000 - 500) + 500);
	});

export const statusBarConfig: StatusBarConfig<Handover> = [
	{ getValue: (data) => ({ title: 'Total CP', value: data.length }) },
	{
		getValue: (data) => ({
			title: 'RFO accepted',
			value: data.map((s) => s.rfocIsAccepted).reduce((prev, curr) => (prev = prev + (curr ? 1 : 0)), 0),
		}),
	},
];

export function SidesheetComponent(ev: WorkspaceOnClick<Handover>) {
	return (
		<div style={{ height: '100%', width: '100%', margin: '5px 32px' }}>
			<h2>{ev.item.commpkgNo}</h2>

			<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
				<Detail title="Description" value={ev.item.description} />
				<Detail title="Comm pkg status" value={ev.item.commpkgStatus} />
				<Detail title="MC status" value={ev.item.mcStatus} />
			</div>
		</div>
	);
}

interface DetailProps {
	title: string;
	value: string;
}
const Detail = ({ title, value }: DetailProps) => {
	return (
		<div style={{ display: 'flex', gap: '0.2em', flexDirection: 'column' }}>
			<div style={{ fontSize: '14px' }}>{title}:</div>
			<div style={{ fontSize: '16px' }}>{value}</div>
		</div>
	);
};
