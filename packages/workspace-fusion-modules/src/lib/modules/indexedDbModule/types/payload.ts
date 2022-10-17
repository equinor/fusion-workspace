import { GroupingKeys } from '@equinor/workspace-garden';
import { ColumnState } from 'ag-grid-community';

export type UserSettings<T> = {
	garden: GardenViewState<T>;
	grid: GridViewState;
	view: ViewState;
};

type ViewState = {
	activeTab?: string;
};

type GardenViewState<T> = {
	groupingKeys: GroupingKeys<T> | undefined;
};

type GridViewState = {
	columnState: ColumnState[] | undefined;
};
