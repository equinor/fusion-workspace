import { WorkspaceController } from '@workspace/workspace-core';
import {
	DataFetchAsync,
	GridConfig,
	SidesheetConfig,
	WorkspaceTabNames,
	StatusBarConfig,
	FusionWorkspaceController,
	CustomTab,
} from '../types';
import { addCustomTab, addDataSource, addGrid, addSidesheet, addStatusBar, addViewController } from '../utils';

interface UIContext {
	appKey: string;
	color: string;
}

export interface WorkspaceContext {
	ui: UIContext;
}

export class FusionWorkspaceBuilder<TData, TError> {
	/** The name of your workspace/application */
	appKey: string;
	private controller: FusionWorkspaceController<TData, TError>;
	constructor(appKey: string, color: string, defaultTab?: WorkspaceTabNames) {
		this.appKey = appKey;
		this.controller = new WorkspaceController();
		addViewController(this.controller);
		this.controller.controllers.view.activeTab = defaultTab ?? 'grid';
		this.controller.setContext((old) => ({ ...old, ui: { color, appKey: appKey } }));
	}

	/**
	 * Add a function for providing data to the workspace
	 * @param dataFetch An async function returning a data array
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addDataSource = (dataFetch: DataFetchAsync<TData>) => {
		addDataSource(dataFetch, this.controller);
		return this;
	};

	/**
	 * Adds a custom tab to your workspace
	 * Use the props to access data, onclick etc..
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addCustomTab = (tab: CustomTab<TData>) => {
		addCustomTab(tab, this.controller);
		return this;
	};

	/**
	 * Adds a garden tab to your workspace
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGarden = () => {
		return this;
	};

	/**
	 * Adds a AG-Grid tab to your workspace
	 * @param gridconfig the configuration object for ag grid.
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGrid = (gridConfig: GridConfig<TData>) => {
		addGrid(gridConfig, this.controller);
		return this;
	};
	/**
	 * Adds a sidesheet to your workspace
	 * @param config the configuration object for sidesheet
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addSidesheet = (config: SidesheetConfig<TData>) => {
		addSidesheet(config, this.controller);
		return this;
	};
	/**
	 * Adds a status bar to the top of your workspace.
	 * @param config Takes in data and returns one or multiple status objects
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addStatusBarItems = (config: StatusBarConfig<TData>) => {
		addStatusBar(config, this.controller);
		return this;
	};
	/**
	 * Call this function when you're finished to recieve a fully configured workspace
	 * @returns a configured workspace controller
	 */
	create = (): FusionWorkspaceController<TData, TError> => {
		this.controller.controllers.dataSource.fetch();
		return this.controller;
	};
}
