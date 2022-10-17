import { GroupingKeys } from '@equinor/workspace-garden';
import { ColumnState } from 'ag-grid-community';
import { WorkspaceTabNames } from './tabs';

export type FusionBookmark<TData> = {
	grid?: GridBookmark;
	filter?: FilterBookmark;
	powerBI?: PowerBIBookmark;
	garden?: GardenBookmark<TData>;
	view?: ViewBookmark;
};

export type ViewBookmark = {
	activeTab?: WorkspaceTabNames;
};

export type GardenBookmark<TData> = {
	groupingKeys: GroupingKeys<TData>;
	selectedNodes: string[];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type GridBookmark = {
	selectedNodes: string[] | undefined;
	columnState: ColumnState[] | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type PowerBIBookmark = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type FilterBookmark = Record<string, unknown>;
