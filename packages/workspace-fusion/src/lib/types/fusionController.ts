import { GroupingKeys } from '@equinor/garden';
import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { WorkspaceContext } from '../classes/fusionWorkspaceBuilder';
import { WorkspaceOnClick } from './onClick';
import { WorkspaceTabNames } from './tabs';

export interface FusionBookmark<TData> {
	grid?: any;
	table?: any;
	filter?: any;
	powerBI?: any;
	garden?: {
		groupingKeys: GroupingKeys<TData>;
	};
	view?: ViewBookmark;
}

interface ViewBookmark {
	activeTab?: WorkspaceTabNames;
}

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<TData, TError> = WorkspaceReactMediator<
	TData,
	WorkspaceOnClick<TData>,
	TError,
	WorkspaceContext,
	FusionBookmark<TData>
>;
