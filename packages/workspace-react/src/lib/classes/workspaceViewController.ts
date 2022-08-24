import { Observable } from '@workspace/workspace-core';
import { FilterController } from './filterController';
import { StateController } from './stateController';
import { TabController } from './tabController';
import { WorkspaceSidesheetController } from './workspaceSidesheetController';

export class WorkspaceViewController<TTabNames extends string, TError> {
	appKey?: string;
	appColor?: string;

	viewState = new StateController();

	sidesheet: WorkspaceSidesheetController = new WorkspaceSidesheetController();
	filter = new FilterController();
	tabs = new TabController<TTabNames>();
	/** Component for handling errors */
	ErrorComponent?: (error: TError) => JSX.Element;
	/** Status bar component to be shown in left side of header */
	StatusBarComponent?: () => JSX.Element;

	/** Function for refetching data */
	refetchData?: () => Promise<void> | null;

	isMounted = new Observable();
}
