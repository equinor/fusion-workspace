import './App.css';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { memo } from 'react';
import { CustomItemView } from '@equinor/workspace-fusion/garden';

const MOCK_DATA: S[] = [
	{
		id: '124',
		age: 18,
	},
	{
		id: '594ed20c-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5ccd8d6a-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '5eb8a128-642b-11ed-81ce-0242ac120002',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
	{
		id: '123',
		age: 18,
	},
];

type S = {
	id: string;
	age: number;
};

const MemoGardenItem = memo(HandoverGardenItem);

function App() {
	return (
		<div className="App" style={{ height: '100vh' }}>
			<Workspace />
		</div>
	);
}

export default App;

const Workspace = createFusionWorkspace<S, { length: number }>(
	{ appKey: 'Handover', getIdentifier: (s) => s.id },
	(s) =>
		s
			.addFilter({
				filterGroups: [
					{
						name: 'id',
						valueFormatter: (s) => s.id,
						isQuickFilter: true,
					},
				],
			})
			.addWorkspaceState((filteredData) => ({ length: filteredData.length }))
			.addGrid({
				columnDefinitions: [
					{ field: 'id' },
					{
						field: 'age',
						valueGetter: (s) => {
							return s.context.length;
						},
					},
				],
			})
			.addStatusBarItems((s) => [{ title: 'count', value: s.length }])
			.addMiddleware((s) => (s.dataService.data = MOCK_DATA))
			.addGarden<ExtendedFields, CustomGroupByKeys>({
				getDisplayName: (s) => s.age.toString(),
				initialGrouping: { horizontalGroupingAccessor: 'commPkgNo', verticalGroupingKeys: [] },

				customViews: {
					customItemView: MemoGardenItem,
					customGroupByView: ({ controller }) => {
						const context = controller.useContext();

						console.log(context);
						context?.length;

						return <div>{JSON.stringify(context) ?? null}</div>;
					},
				},
			})
);

type CustomState = {
	NotSure: 'not sure';
};

type CustomGroupByKeys = {
	SOmeKey: 'Some key';
};

type ExtendedFields = 'Yes' | 'no';

// customGroupByView: Controller<types>

function HandoverGardenItem({
	data,
	controller,
	onClick,
	columnExpanded,
	depth,
	width: itemWidth = 300,
	isSelected,
	rowStart,
	columnStart,
	parentRef,
}: CustomItemView<S, ExtendedFields, CustomGroupByKeys>): JSX.Element {
	const {
		getDisplayName,
		getIdentifier,
		useContext,
		useSelectedNodes,
		onClickItem,
		useCurrentGroupingKeys,
		useCustomGroupByKeys,
		useData,
		useGroups,
	} = controller;

	const displayName = getDisplayName(data);
	const uniqueId = getIdentifier(data);
	const context = useContext();
	/** Will re-render when nodes change */
	const [nodes, setNodes] = useSelectedNodes();
	const click = onClickItem;
	/** Will re-render when grouping changes */
	const groups = useGroups();
	/** Will re-render when filtered data changes */
	const filteredData = useData();
	/** Will re-render when grouping changes */
	const { horizontalGroupingAccessor, verticalGroupingKeys } = useCurrentGroupingKeys();
	/** Will re-render when keys change */
	const customGroupByKeys = useCustomGroupByKeys();

	return (
		<>
			<div>Am garden item</div>
			<div>{JSON.stringify(context)}</div>
		</>
	);
}
