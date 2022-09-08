import { GroupingKeys } from '@equinor/garden';
import { ColumnState } from 'ag-grid-community';

export interface UserSettings<T> {
	garden: GardenViewState<T>;
	grid: GridViewState;
}

interface GardenViewState<T> {
	groupingKeys: GroupingKeys<T> | undefined;
}

interface GridViewState {
	columnState: ColumnState[] | undefined;
}
