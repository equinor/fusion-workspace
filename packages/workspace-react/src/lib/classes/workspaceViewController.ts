import { Observable, OnchangeCallback } from '@workspace/workspace-core';
import { FilterController } from './filterController';
import { StateController } from './stateController';
import { TabController } from './tabController';
import { WorkspaceSidesheetController } from './workspaceSidesheetController';

type Component = () => JSX.Element;
export class WorkspaceViewController<TTabNames extends string, TError> {
	appKey?: string;

	appColor?: string;

	viewState = new StateController();

	sidesheet: WorkspaceSidesheetController = new WorkspaceSidesheetController();

	filter = new FilterController();

	tabs = new TabController<TTabNames>();

	addStatusBarComponent = (comp: Component) => {
		this.StatusBarComponent = comp;
	};

	addSidesheetComponent = (comp: Component) => {
		this.sidesheet.Component = comp;
	};

	constructor() {
		const error = new Observable<TError | undefined>(undefined);
		this.setError = error.setValue;
		this.onError = error.onchange;

		error.onchange((val) => {
			this.error = val;
		});
	}

	error?: TError;

	setError: (value: TError | undefined) => void;

	onError: (callback: OnchangeCallback<TError | undefined>) => () => void;

	/** Component for handling errors */
	ErrorComponent?: (error: ErrorProps<TError>) => JSX.Element;

	/** Status bar component to be shown in left side of header */
	StatusBarComponent?: () => JSX.Element;

	/** Function for refetching data */
	refetchData?: () => Promise<void> | null;

	isMounted = new Observable(false, (a, b) => a === b);
}

type ErrorProps<TError> = {
	error: TError;
};
