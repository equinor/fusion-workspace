import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { FusionBookmark } from './fusionBookmark';

/**
 * Workspace controller for fusion with some predefined types
 */
export type FusionMediator<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = WorkspaceReactMediator<TData, WorkspaceNode<TData>, FusionWorkspaceError, TContext, FusionBookmark<TData>>;

export type WorkspaceNode<TData> = {
	id: string;
	item?: TData;
};

export type FusionWorkspaceError = {
	code: number;
	detail: string;
	title: string;
};

/** API for manipulating the workspace */
export type WorkspaceController<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	/**
	 * Sets the data supplied to the workspace
	 * !important a new call to fetch data will overwrite this
	 */
	setData: (newData: TData[]) => void;
	/**
	 * Sets a new error on workspace
	 */
	setError: (error: FusionWorkspaceError) => void;
	/** Sets a custom view state for one or more components in the workspace */
	setBookmark: (bookmark: FusionBookmark<TData>) => void;
	/**
	 * Calculates a new context to supply to the workspace
	 * Will be overwritten if contextOptions are supplied
	 */
	setContext: (newContext: (filteredData: TData[]) => TContext) => void;
};
