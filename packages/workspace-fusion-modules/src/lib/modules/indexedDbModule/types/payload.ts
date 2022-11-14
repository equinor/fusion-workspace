import { ColumnState } from '@equinor/workspace-fusion/grid';
import { GroupingKeys } from '@equinor/workspace-fusion/garden';

export type UserSettings<T extends Record<PropertyKey, unknown>> = {
	garden: GardenViewState<T>;
	grid: GridViewState;
	view: ViewState;
};

type ViewState = {
	activeTab?: string;
};

type GardenViewState<T extends Record<PropertyKey, unknown>> = {
	groupingKeys: GroupingKeys<T> | undefined;
};

type GridViewState = {
	columnState: ColumnState[] | undefined;
};
