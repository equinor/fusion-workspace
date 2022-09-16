import { FilterOptions } from '@equinor/filter';
import history from 'history/browser';
import { Action } from 'history';
import { GardenConfig } from '@equinor/garden';
import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';

import {
	GridConfig,
	SidesheetConfig,
	WorkspaceTabNames,
	StatusBarConfig,
	FusionMediator,
	CustomTab,
	AppConfig,
	FusionWorkspaceModule,
	DataSourceOptions,
	PowerBiConfig,
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

export interface WorkspaceContext {
	ui: unknown;
}

export class FusionWorkspaceBuilder<TData, TError> {
	/** The name of your workspace/application */
	getIdentifier: GetIdentifier<TData>;

	private mediator: FusionMediator<TData, TError> = new WorkspaceReactMediator();

	viewController = new WorkspaceViewController<WorkspaceTabNames, TError>();

	appKey: string;

	constructor(getIdentifier: GetIdentifier<TData>, appKey: string) {
		this.getIdentifier = getIdentifier;
		this.appKey = appKey;

		this.mediator.onUnMount(this.mediator.destroy);

		addViewController(this.viewController, this.mediator, history);

		configureUrlWithHistory(this.mediator, history);

		this.mediator.clickService.onClick(({ item }) => {
			const id = getIdentifier(item);
			this.mediator.selectionService.setSelection([{ id }]);
			updateQueryParams([`item=${id}`], this.mediator, history);
		});

		history.listen(({ action }) => {
			if (action === Action.Pop) {
				//Navigation back or forward;
				switchTabOnNavigation(this.mediator, this.viewController);
			}
		});
	}

	addPowerBi = (config: PowerBiConfig) => {
		addPowerBi(config, this.viewController, this.mediator);
		return this;
	};

	addConfig = (appConfig: AppConfig<WorkspaceTabNames>) => {
		addConfig(appConfig, this.viewController);
		return this;
	};

	/** Add modules from the workspace-fusion-modules package or bring your own */
	addModules = (modules: FusionWorkspaceModule<TData, TError>[]) => {
		modules.forEach(this.runModuleSetup);
		return this;
	};

	/** Iterate over all setup modules */
	private runModuleSetup = (module: FusionWorkspaceModule<TData, TError>) => {
		module.subModules?.forEach(this.runModuleSetup);
		module.setup(this.mediator, this.appKey);
	};

	/**
	 * Add a function for providing data to the workspace
	 * @param dataFetch - An async function returning a data array
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addDataSource = (dataFetch: DataSourceOptions<TData>) => {
		addDataSource(dataFetch, this.mediator);
		return this;
	};

	addMiddleware = (cb: (mediator: FusionMediator<TData, TError>) => void) => {
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
	addGarden = <TCustomGroupByKeys, TCustomState, TContext>(
		config: GardenConfig<TData, TCustomGroupByKeys, TCustomState, TContext>
	) => {
		addGarden(config, this.viewController, this.mediator, this.getIdentifier);
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

	addFilter = (config: FilterOptions<TData>) => {
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
