import { tokens } from '@equinor/eds-tokens';
import { DateTime } from 'luxon';
import { Handover } from './components/types';

export const getFieldKeyBasedOnPlannedForecast = (groupBy: string, plannedForecast: string): keyof Handover => {
	switch (groupBy) {
		case 'RFOC':
			return plannedForecast === 'Forecast' ? 'forecastFinishDate' : 'plannedFinishDate';

		case 'RFCC':
			return plannedForecast === 'Forecast' ? 'forecastStartDate' : 'plannedStartDate';

		case 'TAC':
			return plannedForecast === 'Forecast' ? 'forecastTacDate' : 'plannedTacDate';

		case 'DCC':
			return plannedForecast === 'Forecast' ? 'demolitionForecastStartDate' : 'demolitionPlannedStartDate';

		case 'RFRC':
			return plannedForecast === 'Forecast' ? 'demolitionForecastFinishDate' : 'demolitionPlannedFinishDate';

		default:
			return 'plannedFinishDate';
	}
};

const getKeyData = (item: Handover, groupBy: keyof Handover): string => {
	const value = item[groupBy] as string;

	if (value) return value;

	const groupByPlanned = groupBy.replace('forecast', 'planned').replace('Forecast', 'Planned') as keyof Handover;
	return item[groupByPlanned] as string;
};
export const getYearAndWeekAndDayFromString = (dateString: string) => {
	const date = new Date(dateString);
	const dateTime = DateTime.fromJSDate(date);
	if (!dateTime.isValid) return 'N/A';
	return `${dateTime.year}-${dateTime.month}-${dateTime.day}`;
};

export const getYearAndWeekFromDate = (date: Date): string => {
	const dateTime = DateTime.fromJSDate(date);
	return `${dateTime.year}-${dateTime.weekNumber}`;
};

export const getYearAndWeekFromString = (dateString: string): string => {
	const date = new Date(dateString);
	return DateTime.fromJSDate(date).isValid ? getYearAndWeekFromDate(date) : 'N/A';
};

const getColumnDateKey = (handoverFieldKey, weeklyDaily, item): string => {
	const date = getKeyData(item, handoverFieldKey);
	return weeklyDaily === 'Weekly' ? getYearAndWeekFromString(date) : getYearAndWeekAndDayFromString(date);
};

export const getDateKey = (item, key, groupBy) => {
	const { plannedForecast, weeklyDaily } = groupBy;
	const handoverFieldKey = getFieldKeyBasedOnPlannedForecast(key as string, plannedForecast);
	return getColumnDateKey(handoverFieldKey, weeklyDaily, item);
};
export const sortByNumber = (a: string, b: string): number =>
	a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

export const getProgressKey = (item) => `${item.progress || '0'}%`;

export const itemSize = (volume: number, maxVolume: number) => {
	if (maxVolume <= 0) return 'small';
	const percentage = (volume / maxVolume) * 100;
	return percentage > 66 ? 'large' : percentage > 33 ? 'medium' : 'small';
};

export type FollowUpStatuses =
	| 'WO Finished'
	| 'Material and Workorder OK'
	| 'Material and Workorder Available'
	| 'Material and/or Workorder not Available';

export const followUpColorMapRecord: Record<FollowUpStatuses, string> = {
	'WO Finished': 'hsla(218, 100%, 52%, 1)',
	'Material and Workorder OK': 'hsla(123, 70%, 65%, 1)',
	'Material and Workorder Available': 'rgb(255, 255, 0)',
	'Material and/or Workorder not Available': 'hsla(12, 85%, 72%, 1)',
};

export type MaterialStatus = 'M10' | 'M12' | 'M2' | 'M6' | 'M7' | 'M9' | 'MN' | 'MN1' | 'MNX1' | 'MNX2';

export const materialStatusMap: Record<MaterialStatus, string> = {
	M10: 'Material requested to job site',
	M12: 'Material received on job site',
	M2: 'Materials linked to Smartpack/Jobcard',
	M6: 'Material partly delivered',
	M7: 'Materials fully delivered',
	M9: 'Material returned',
	MN: 'No Material required',
	MN1: 'Additional material to be issued Offshore from Min/Max Stock',
	MNX1: 'Materials not linked to Smartpack/Jobcard',
	MNX2: 'Materials partially linked to Smartpack/Jobcard',
};

export type Status =
	| 'PA'
	| 'PB'
	| 'RFOC Accepted'
	| 'RFOC Sent'
	| 'RFOC Rejected'
	| 'TAC Accepted'
	| 'TAC Sent'
	| 'TAC Rejected'
	| 'RFCC Rejected'
	| 'RFCC Accepted'
	| 'RFCC Sent'
	| 'DCC Accepted'
	| 'DCC Sent'
	| 'RFRC Accepted'
	| 'RFRC Sent'
	| 'OS'
	| 'No status'
	| 'OK';

export const colorMap: Record<Status, string> = {
	'No status': '#d1d1d1',
	'RFOC Sent': '#09CCF2',
	'RFOC Accepted': '#0035BC',
	'RFOC Rejected': '#FF3B3B',
	'RFCC Sent': '#C5E1A5',
	'RFCC Accepted': '#7CB342',
	'RFCC Rejected': '#FF3B3B',
	'TAC Sent': '#EDB882',
	'TAC Accepted': '#E77422',
	'TAC Rejected': '#FF3B3B',
	'DCC Sent': '#DCE775',
	'DCC Accepted': '#827717',
	'RFRC Sent': '#D7CCC8',
	'RFRC Accepted': '#5D4037',
	OS: '#D9E9F2',
	PB: '#ffc107',
	PA: '#ff4081',
	OK: '#00c853',
};

export type HandoverStatus =
	| 'PA'
	| 'PB'
	| 'RFOC Accepted'
	| 'RFOC Sent'
	| 'RFOC Rejected'
	| 'TAC Accepted'
	| 'TAC Sent'
	| 'TAC Rejected'
	| 'RFCC Rejected'
	| 'RFCC Accepted'
	| 'RFCC Sent'
	| 'DCC'
	| 'RFRC'
	| 'OS'
	| 'No status'
	| 'OK';

export const dotsColorMap: Record<Extract<Status, 'OS'>, string> = {
	OS: '#9E9E9E',
};
export const getDotsColor = (status: HandoverStatus) => {
	switch (status) {
		case 'OS':
			return dotsColorMap.OS;
		case 'PA':
			return colorMap.PA;
		case 'PB':
			return colorMap.PB;
		default:
			return colorMap.OK;
	}
};

export const statusPriorityMap: Record<Status, number> = {
	'RFOC Accepted': 0,
	'RFOC Sent': 1,

	'TAC Accepted': 2,
	'TAC Sent': 3,

	'RFCC Accepted': 4,
	'RFCC Sent': 5,

	'RFRC Accepted': 6,
	'RFRC Sent': 7,
	'DCC Accepted': 8,
	'DCC Sent': 9,
	OS: 10,
	'No status': 11,

	'RFCC Rejected': 12,
	'TAC Rejected': 13,
	'RFOC Rejected': 14,
	PA: 14,
	PB: 15,
	OK: 16,
};

export const getStatus = (item: Handover): Status => {
	if (item.mcPkgsRFOCSigned > 0 && item.mcPkgsCount > 0 && item.mcPkgsRFOCSigned === item.mcPkgsCount)
		return 'RFOC Accepted';

	if (item.rfocIsRejected) return 'RFOC Rejected';

	if (item.mcPkgsRFOCShipped > 0 && item.mcPkgsCount > 0 && item.mcPkgsRFOCShipped === item.mcPkgsCount)
		return 'RFOC Sent';

	if (item.tacIsAccepted) return 'TAC Accepted';

	if (item.tacIsShipped) return 'TAC Sent';

	if (item.tacIsRejected) return 'TAC Rejected';

	if (item.mcPkgsRFCCSigned && item.mcPkgsCount && item.mcPkgsRFCCSigned === item.mcPkgsCount) return 'RFCC Accepted';

	if (item.rfccIsRejected) return 'RFCC Rejected';

	if (item.mcPkgsRFCCShippedCount > 0 && item.mcPkgsCount > 0 && item.mcPkgsRFCCShippedCount === item.mcPkgsCount)
		return 'RFCC Sent';

	if (item.isDemolition && item.demolitionActualFinishDate) return 'RFRC Accepted'; //D04

	if (item.isDemolition && item.demolitionRFRCShippedDate) return 'RFRC Sent'; //D03

	if (item.isDemolition && item.demolitionDCCAcceptedDate) return 'DCC Accepted'; //D02

	if (item.isDemolition && item.demolitionActualStartDate) return 'DCC Sent'; //D01

	return 'OS';
};

export const getTextColor = (status: Status): string =>
	['RFOC Accepted', 'RFRC Accepted', 'DCC Accepted'].includes(status)
		? tokens.colors.text.static_icons__primary_white.rgba
		: tokens.colors.text.static_icons__default.rgba;

export const createProgressGradient = (data: Handover, status: Status = getStatus(data)): string => {
	const color = colorMap[status];
	let progressWidth = 0;
	let progressColor = '';

	const renderMcProgress = (item: Handover, mcProgress: McProgress) => {
		const width = mcProgressPercentage(item, mcProgress.accessor);
		if (width === 0) return;
		progressWidth = Math.floor(width);
		progressColor = mcProgress.color(item);
	};

	mcProgressMap.forEach((mcProgress) => renderMcProgress(data, mcProgress));

	return progressWidth === 100 || progressWidth === 0
		? color
		: `linear-gradient(90deg,${progressColor} ${progressWidth}%,${color} ${progressWidth}%)`;
};

export type McProgress = {
	color: (item: Handover) => string;
	accessor: (item: Handover) => number;
};

export const mcProgressMap: McProgress[] = [
	{
		color: () => '#d9eaf2',
		accessor: (item) => item.mcPkgsCount,
	}, // OS
	{
		color: (item) => (item.rfccIsRejected ? colorMap[getStatus(item)] : colorMap['RFCC Sent']),
		accessor: (item) => item.mcPkgsRFCCShippedCount,
	},
	{
		color: (item) => {
			const status = getStatus(item);
			if (status.indexOf('TAC') > -1) return colorMap[status];
			return item.rfccIsRejected ? colorMap[status] : '#7cb342';
		},
		accessor: (item) => item.mcPkgsRFCCSigned,
	},
	{
		color: (item) => (item.rfocIsRejected ? colorMap[getStatus(item)] : colorMap['RFOC Sent']),
		accessor: (item) => item.mcPkgsRFOCShipped,
	},
	{
		color: (item) => (item.rfocIsRejected ? colorMap[getStatus(item)] : '#0035bc'),
		accessor: (item) => item.mcPkgsRFOCSigned,
	},
];

export const mcProgressPercentage = (item: Handover, accessor: (item: Handover) => number): number => {
	const count = accessor(item);
	return count < 1 ? 0 : item.mcPkgsCount === 0 ? 0 : (count / item.mcPkgsCount) * 100;
};

export const mcProgressPercentageWidth = (
	item: Handover,
	accessor: (item: Handover) => number,
	width: number
): number => {
	const toPercentage = mcProgressPercentage(item, accessor);
	return toPercentage < 1 ? 0 : Math.min(width, Math.ceil((width / 100) * toPercentage));
};
