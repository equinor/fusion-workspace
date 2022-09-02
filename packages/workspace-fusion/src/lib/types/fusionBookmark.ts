import { GroupingKeys } from '@equinor/garden';
import { ColumnState } from 'ag-grid-community';
import { WorkspaceTabNames } from './tabs';

export interface FusionBookmark<TData> {
	grid?: GridBookmark;
	filter?: FilterBookmark;
	powerBI?: PowerBIBookmark;
	garden?: GardenBookmark<TData>;
	view?: ViewBookmark;
}

export interface ViewBookmark {
	activeTab?: WorkspaceTabNames;
}

export interface GardenBookmark<TData> {
	groupingKeys: GroupingKeys<TData>;
	selectedNodes: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GridBookmark {
	selectedNodes: string[] | undefined;
	columnState: ColumnState[] | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PowerBIBookmark {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FilterBookmark {}
