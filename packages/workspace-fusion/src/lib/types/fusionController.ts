import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionBookmark } from './fusionBookmark';
import { WorkspaceOnClick } from './onClick';

//TODO: Generic, temp
type WorkspaceContext = {
	id: string;
};

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<TData extends Record<PropertyKey, unknown>> = WorkspaceReactMediator<
	TData,
	WorkspaceOnClick<TData>,
	FusionWorkspaceError,
	WorkspaceContext,
	FusionBookmark<TData>
>;

export type FusionWorkspaceError = {
	code: number;
	detail: string;
	title: string;
};
