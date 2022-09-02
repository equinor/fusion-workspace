import { Button } from '@equinor/eds-core-react';
import { createFusionWorkspace, FusionMediator } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';
import { useMemo } from 'react';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBar } from './workspaceConfig';

function FusionWorkspace() {
	const { controller, mediator } = useMemo(() => {
		let wsMediator = {} as FusionMediator<Handover, unknown>;
		const controller = createFusionWorkspace<Handover, unknown>('commpkgNo', ({ addDataSource }) =>
			addDataSource(dataSourceOptions)
				.addGrid(gridOptions)
				.addCustomTab(customTab)
				.addConfig({
					appColor: '#0084C4',
					appKey: 'Handover',
					defaultTab: 'grid',
				})
				.addSidesheet(sidesheetOptions)
				.addGarden({
					data: [],
					nodeLabelCallback: (s) => s.commpkgNo,
					objectIdentifier: 'commpkgNo',
					initialGrouping: { horizontalGroupingAccessor: 'id', verticalGroupingKeys: [] },
					fieldSettings: {},
				})
				.addMiddleware((mediator) => {
					wsMediator = mediator;
				})
				.addStatusBarItems(statusBar)
		);
		return { controller, mediator: wsMediator ?? {} };
	}, []);

	return (
		<div>
			<Button
				onClick={() =>
					mediator.bookmarkService.apply({
						view: { activeTab: 'grid' },
						grid: { selectedNodes: ['7601-H01', '8250-M42'], columnState: columnState },
						garden: {
							selectedNodes: ['7601-H01'],
							groupingKeys: { horizontalGroupingAccessor: 'area', verticalGroupingKeys: [] },
						},
					})
				}
			>
				Apply bookmark
			</Button>
			<Workspace controller={controller} />
		</div>
	);
}

export function App() {
	return <FusionWorkspace />;
}

export default App;

const columnState = [
	{
		colId: 'commPkgNo',
		width: 700,
		hide: false,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Description',
		width: 200,
		hide: false,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Disciplines',
		width: 200,
		hide: false,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Comm pkg status',
		width: 200,
		hide: false,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'MC status',
		width: 394,
		hide: false,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Responsible',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Area',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'System',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Priority 1',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Priority 2',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Priority 3',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'Planned start date',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'forecastStartDate',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'rfocPlannedDate 3',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
	{
		colId: 'rfocActualDate',
		width: 200,
		hide: true,
		pinned: null,
		sort: null,
		sortIndex: null,
		aggFunc: null,
		rowGroup: false,
		rowGroupIndex: null,
		pivot: false,
		pivotIndex: null,
		flex: null,
	},
];
