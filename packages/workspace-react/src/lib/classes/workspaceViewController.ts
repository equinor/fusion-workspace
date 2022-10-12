import { Observable, OnchangeCallback } from '@workspace/workspace-core';
import { Subject } from 'rxjs';
import { Provider } from '../types';
import { StateController } from './stateController';
import { TabController } from './tabController';
import { WorkspaceSidesheetController } from './workspaceSidesheetController';

type Component = () => JSX.Element;
export class WorkspaceViewController<TTabNames extends string, TError> {
	appKey?: string;

	appColor?: string;

	viewState = new StateController();

	sidesheet: WorkspaceSidesheetController = new WorkspaceSidesheetController();

	tabController = new TabController<TTabNames>();

	providers: Provider[] = [];

	addProvider = (provider: Provider) => {
		this.providers.push(provider);
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

	/** Function for refetching data */
	refetchData?: () => Promise<void> | null;

	mount$ = new Subject();

	unMount$ = new Subject();

	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}

type ErrorProps<TError> = {
	error: TError;
};
