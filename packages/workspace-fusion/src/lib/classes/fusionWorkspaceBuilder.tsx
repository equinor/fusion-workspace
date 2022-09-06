import { GardenConfig } from '@equinor/garden';
import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';

import {
	DataFetchAsync,
	GridConfig,
	SidesheetConfig,
	WorkspaceTabNames,
	StatusBarConfig,
	FusionMediator,
	CustomTab,
	AppConfig,
	WorkspaceFusionModule,
} from '../types';
import {
	addCustomTab,
	addDataSource,
	addGrid,
	addSidesheet,
	addStatusBar,
	addGarden,
	addConfig,
	addViewController,
} from '../utils';
import { GetIdentifier } from '@workspace/workspace-core';

interface UIContext {
	appKey: string;
	color: string;
}

export interface WorkspaceContext {
	ui: UIContext;
}

export class FusionWorkspaceBuilder<TData, TError> {
	/** The name of your workspace/application */

	appKey?: string;

	private mediator: FusionMediator<TData, TError>;

	viewController: WorkspaceViewController<WorkspaceTabNames, TError>;

	constructor(getUniqueId: GetIdentifier<TData>) {
		this.mediator = new WorkspaceReactMediator(getUniqueId);
		this.viewController = new WorkspaceViewController<WorkspaceTabNames, TError>();

		this.mediator.onClick(({ item }) => {
			const id = this.mediator.getUniqueId(item);
			this.mediator.selection.setSelection([{ id }]);
		});

		addViewController(this.viewController, this.mediator);

		this.mediator.onIsLoadingChange(this.viewController.viewState.setIsLoading);
	}

	addConfig = (appConfig: AppConfig<WorkspaceTabNames>) => {
		addConfig(appConfig, this.viewController);
		this.appKey = appConfig.appKey;
		return this;
	};

	/**
	 * Add a function for providing data to the workspace
	 * @param dataFetch An async function returning a data array
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addDataSource = (dataFetch: DataFetchAsync<TData>) => {
		addDataSource(dataFetch, this.mediator);
		return this;
	};

	addMiddleware = (cb: (mediator: FusionMediator<TData, TError>) => void) => {
		cb(this.mediator);
		return this;
	};

	addModules = (modules: WorkspaceFusionModule[]) => {
		modules.forEach((s) => {
			console.log(`Adding module: ${s.name}`);
			s.setup(this.mediator);
		});
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
		addGarden(config, this.viewController, this.mediator, this.mediator.getUniqueId);
		return this;
	};

	/**
	 * Adds a AG-Grid tab to your workspace
	 * @param gridconfig the configuration object for ag grid.
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGrid = (gridConfig: GridConfig<TData>) => {
		addGrid(gridConfig, this.viewController, this.mediator, this.mediator.getUniqueId);
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
