import { GridConfig, SidesheetConfig, StatusBarConfig } from '@equinor/workspace-fusion';
import { Handover } from './types';
import styled from 'styled-components';
import { Icon } from '@equinor/eds-core-react';
import { HandoverSidesheet } from './HandoverSidesheet/HandoverSidesheet';
import { FilterValueType } from '@equinor/filter';
import React from 'react';
import { home } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { Tab } from 'packages/workspace-react/src/lib/types';
import { StarredItemsDb } from './HandoverApp';
Icon.add({ home });

export const gridOptions: GridConfig<Handover> = {
	columnDefinitions: [
		{
			field: 'isStarred',
			onCellClicked: async (props) => {
				if (props.data?.commpkgNo) {
					await StarredItemsDb.save({ action: 'save', id: props.data?.commpkgNo });
				}
			},
			cellRenderer: (props) => {
				return <Icon name={'star_filled'} />;
			},
		},
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

export const customTab: Tab<string> = {
	Component: CustomTab,
	TabIcon: () => <Icon name="home" color="#6F6F6F" />,
	name: 'Home',
	ignoreLoading: true,
};

export const sidesheetOptions: SidesheetConfig<Handover> = {
	Component: HandoverSidesheet,
	getTitle: (ev) => {
		return ev.item.commpkgNo;
	},
};

export const statusBar: StatusBarConfig<Handover> = (data: Handover[]) => [
	{ title: 'Total CP', value: data.reduce((prev) => prev + 1, 0) },
	{ title: 'RFO Accepted', value: data.reduce((prev, curr) => prev + (curr.rfocIsAccepted ? 1 : 0), 0) },
];

export function CustomTab() {
	return (
		<StyledCustomTab>
			<Header>Handover Garden</Header>
			<Paragraph>
				Handover Garden monitors commissioning package progress in a project and presents the status visually.
				It is used to keep track of and plan handover from construction to commissioning, and commissioning to
				operations. By using the Handover Garden all stakeholders and project personnel are easily updated on
				commissioning status, and decisions are based on the same information. NB: All information is imported
				from Procosys and must be available in Procosys to be displayed in Fusion. The main window shows
				weekly/daily handover plan The header indicates the week number (or date) for planned handover of
				commissioning packages, giving an overview of a project. Clicking a week (date) will expand the week and
				show package descriptions in the garden. Different handover milestones can be selected, with RFOC, RFCC
				and TAC most commonly used. There are also other options available for grouping the garden, such as
				system or package responsible, found under the “Group by” section to the right. Commissioning package
				status Package background colors indicate package milestone, as shown in the table below. No handover
				certificate signed DCC Sent/Accepted RFRC Sent/Accepted RFCC Sent/Accepted TAC Sent/Accepted RFOC
				Sent/Accepted D-01 / D-02 D-03 / D-04 C-01 / C-02 C-06 C-07 / C-08 Package colors will show partly
				handover where some of the MC packages in a commissioning package are handed over.
			</Paragraph>
		</StyledCustomTab>
	);
}

const Paragraph = styled.div`
	width: 50%;
	font-size: 16px;
	color: ${tokens.colors.text.static_icons__default.hex};
`;

const Header = styled.h1`
	font-size: 32px;
	color: ${tokens.colors.text.static_icons__default.hex};
`;

const StyledCustomTab = styled.div`
	height: 100%;
	width: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export function RenderStatus(val: FilterValueType) {
	return (
		<div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
			<Circle color={getCircleColor(val)} />
			<div>{val}</div>
		</div>
	);
}

const Circle = styled.div<{ color: string }>`
	border-radius: 50%;
	background-color: ${(s) => s.color};
	height: 12px;
	width: 12px;
`;

const getCircleColor = (val: FilterValueType) => {
	if (!val) return '';
	switch (val) {
		case 'OS': {
			return 'rgb(158, 158, 158)';
		}
		case 'OK': {
			return 'rgb(0, 200, 83)';
		}
		case 'PA': {
			return 'rgb(255, 64, 129)';
		}
		case 'PB': {
			return 'rgb(255, 193, 7)';
		}
		default: {
			return 'black';
		}
	}
};
