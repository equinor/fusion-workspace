import { Observable } from '@workspace/workspace-core';
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

	providers: Provider[] = [];

	addProvider = (provider: Provider) => {
		this.providers.push(provider);
	};

	/** Component for handling errors */
	ErrorComponent?: (error: TError) => JSX.Element;

	/** Function for refetching data */
	refetchData?: () => Promise<void> | null;

	isMounted = new Observable(false, (a, b) => a === b);

	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}

export type Provider = React.FC<{ children: ReactNode }>;
