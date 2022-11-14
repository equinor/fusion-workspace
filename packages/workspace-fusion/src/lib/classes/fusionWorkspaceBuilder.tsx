import history from 'history/browser';
import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import {
	SidesheetConfig,
	WorkspaceTabNames,
	FusionMediator,
	CustomTab,
	AppConfig,
	FusionWorkspaceModule,
	FusionWorkspaceError,
} from '../types';
import {
	addCustomTab,
	addDataSource,
	addGrid,
	addSidesheet,
	addStatusBar,
	addGarden,
	addFilter,
	addConfig,
	addViewController,
	switchTabOnNavigation,
	GetIdentifier,
} from '../utils';
import { configureUrlWithHistory, updateQueryParams } from './fusionUrlHandler';
import { addPowerBi } from '../utils/powerBI/addPowerBi';
import { FusionPowerBiConfigurator } from './fusionPowerBiConfig';
import { DumpsterFireDialog } from '../components/ErrorComponent';
import { Action } from 'history';
import { GardenConfig } from '../integrations/garden';
import { FilterConfig } from '../integrations/filter';
import { GridConfig } from '../integrations/grid';
import { FusionPowerBiConfig, PowerBiConfig } from '../integrations/power-bi';
import { StatusBarConfig } from '../integrations/status-bar';
import { DataSourceConfig } from '../integrations/data-source';
import { BehaviorSubject, Subscription } from 'rxjs';

export type WorkspaceContext = {
	ui: unknown;
};

export class FusionWorkspaceBuilder<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> {
	/** The name of your workspace/application */
	getIdentifier: GetIdentifier<TData>;

	private mediator: FusionMediator<TData> = new WorkspaceReactMediator();

	viewController = new WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>();
	#context = new BehaviorSubject<TContext>({} as TContext);
	appKey: string;

	constructor(getIdentifier: GetIdentifier<TData>, appKey: string) {
		this.getIdentifier = getIdentifier;
		this.appKey = appKey;

		this.viewController.ErrorComponent = ({ error }) => {
			return <DumpsterFireDialog text={error.detail} buttons={[]} />;
		};
		this.mediator.onUnMount(this.mediator.destroy);

		addViewController(this.viewController, this.mediator, history);

		configureUrlWithHistory(this.mediator, history);

		this.mediator.clickService.click$.subscribe(({ item }) => {
			const id = getIdentifier(item);
			this.mediator.selectionService.selectedNodes = [id];
			updateQueryParams([`item=${id}`], this.mediator, history);
		});

		history.listen(({ action }) => {
			if (action === Action.Pop) {
				//Navigation back or forward;
				switchTabOnNavigation(this.mediator, this.viewController);
			}
		});
	}
	currentSubscription: Subscription | undefined = undefined;
	addWorkspaceState = (cb: (filteredData: TData[]) => TContext) => {
		if (this.currentSubscription) throw new Error('addWorkspaceState can only be invoked once');
		this.currentSubscription = this.mediator.dataService.filteredData$.subscribe((filteredData) => {
			if (!filteredData) return;
			this.#context.next(cb(filteredData));
		});
		return this;
	};

	addPowerBi = (config: PowerBiConfig) => {
		addPowerBi(config, this.viewController, this.mediator);
		return this;
	};

	/** Requires fusion framework, and service discovery module */
	addFusionPowerBI({ reportUri }: FusionPowerBiConfig) {
		const getConfig = () => FusionPowerBiConfigurator.getEmbedInfo(reportUri);
		const getToken = () => FusionPowerBiConfigurator.getToken(reportUri);
		this.addPowerBi({ getConfig, getToken, reportUri });
		return this;
	}

	addConfig = (appConfig: AppConfig<WorkspaceTabNames>) => {
		addConfig(appConfig, this.viewController);
		return this;
	};

	/** Add modules from the workspace-fusion-modules package or bring your own */
	addModules = (modules: FusionWorkspaceModule<TData>[]) => {
		modules.forEach(this.runModuleSetup);
		return this;
	};

	/** Iterate over all setup modules */
	private runModuleSetup = (module: FusionWorkspaceModule<TData>) => {
		module.subModules?.forEach(this.runModuleSetup);
		module.setup(this.mediator, this.appKey);
	};

	/**
	 * Add a function for providing data to the workspace
	 * @param dataFetch - An async function returning a data array
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addDataSource = (dataFetch: DataSourceConfig<TData>) => {
		addDataSource(dataFetch, this.mediator);
		return this;
	};

	addMiddleware = (cb: (mediator: FusionMediator<TData>) => void) => {
		cb(this.mediator);
		return this;
	};

	/**
	 * Adds a custom tab to your workspace
	 * Use the props to access data, onclick etc..
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addCustomTab = (tab: CustomTab) => {
		addCustomTab(tab, this.viewController, this.mediator);
		return this;
	};

	/**
	 * Adds a garden tab to your workspace
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGarden = <
		TExtendedFields extends string = never,
		TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
	>(
		config: GardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TContext, TContext>
	) => {
		addGarden<TData, TExtendedFields, TCustomGroupByKeys, TContext, TContext, FusionWorkspaceError>(
			config,
			this.viewController,
			this.mediator,
			this.getIdentifier,
			this.#context
		);
		return this;
	};

	/**
	 * Adds a AG-Grid tab to your workspace
	 * @param gridconfig the configuration object for ag grid.
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGrid = (gridConfig: GridConfig<TData>) => {
		addGrid(gridConfig, this.viewController, this.mediator, this.getIdentifier);
		return this;
	};

	/**
	 * Adds a sidesheet to your workspace
	 * @param config the configuration object for sidesheet
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addSidesheet = (config: SidesheetConfig<TData>) => {
		addSidesheet(config, this.viewController, this.mediator);
		return this;
	};

	addFilter = (config: FilterConfig<TData>) => {
		addFilter(config, this.viewController, this.mediator);
		return this;
	};

	/**
	 * Adds a status bar to the top of your workspace.
	 * @param config Takes in data and returns one or multiple status objects
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addStatusBarItems = (config: StatusBarConfig<TData>) => {
		addStatusBar(config, this.viewController, this.mediator);
		return this;
	};
}
