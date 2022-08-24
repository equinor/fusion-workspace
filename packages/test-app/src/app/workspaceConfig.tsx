import { GridConfig, SidesheetConfig, StatusBarConfig, WorkspaceOnClick } from '@equinor/workspace-fusion';
import { DefaultInterface } from './types';
import { mockData } from './mockData';

export const gridOptions: GridConfig<DefaultInterface> = {
	columnDefinitions: [{ field: 'id' }, { field: 'description' }, { field: 'title' }, { field: 'sequenceNumber' }],
};

export const customTab = {
	Component: ({ data, onClick }) => <div onClick={() => onClick({ item: data[0] })}>{data.length}</div>,
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
	return (
		<div style={{ height: '100%', width: '100%', margin: '5px 32px' }}>
			<h2>{ev.item.title}</h2>

			<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
				<Detail title="Description" value={ev.item.description} />
				<Detail title="Change category" value={ev.item.changeCategory.name} />
				<Detail title="Phase" value={ev.item.phase} />
				<Detail title="Scope" value={ev.item.scope.name} />
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
