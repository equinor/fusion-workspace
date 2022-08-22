import { Observable, WorkspaceMediator } from '@workspace/workspace-core';
import { Tab } from '../types';
import { WorkspaceSidesheetController } from './workspaceSidesheetController';

export class WorkspaceController<TTabNames extends string, TData, TOnClick, TContext, TError> extends WorkspaceMediator<
	TData,
	TOnClick,
	TError,
	TContext
> {
	constructor(appKey: string, tabs: Tab<TTabNames>[], initialTab: TTabNames) {
		super();
		this.appKey = appKey;
		this.tabs = tabs;
		this.activeTab.setValue(initialTab);
	}
	appKey: string;

	/** The tabs for your workspace */
	tabs: Tab<TTabNames>[];
	sidesheet: WorkspaceSidesheetController = new WorkspaceSidesheetController();
	/** The filter component to render in the header */
	FilterComponent?: () => JSX.Element;
	/** Component for handling errors */
	ErrorComponent?: () => JSX.Element;
	/** Status bar component to be shown in left side of header */
	StatusBarComponent?: () => JSX.Element;
	/** The current active tab name */
	activeTab = new Observable<TTabNames>();
	/** true when data is loading */
	isLoading = new Observable(false);
	isFilterActive = new Observable(false);
	/** Function for refetching data */
	refetchData?: () => Promise<void> | null;
	/** true if the component is currently being rendered */
	isMounted = new Observable(false);
}
