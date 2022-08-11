import { WorkspaceController } from '@workspace/workspace-core';
import {
	DataFetchAsync,
	GridConfig,
	SidesheetConfig,
	WorkspaceTabNames,
	StatusBarConfig,
	FusionWorkspaceController,
} from '../types';
import { addDataSource, addGrid, addSidesheet, addStatusBar, addViewController } from '../utils';

export class FusionWorkspaceBuilder<TData, TError, TContext> {
	name: string;
	private controller: FusionWorkspaceController<TData, TError, TContext>;
	constructor(name: string, defaultTab?: WorkspaceTabNames) {
		this.name = name;
		/**
		 * TODO: Extract
		 * Init default controllers
		 */
		this.controller = new WorkspaceController();
		addViewController(this.controller);
		this.controller.controllers.view.activeTab = defaultTab ?? 'grid';
	}

	addDataSource = (dataFetch: DataFetchAsync<TData>) => {
		addDataSource(dataFetch, this.controller);
		return this;
	};

	addGarden = () => {
		return this;
	};

	addGrid = (gridConfig: GridConfig<TData>) => {
		addGrid(gridConfig, this.controller);
		return this;
	};

	addSidesheet = (config: SidesheetConfig<TData>) => {
		addSidesheet(config, this.controller);
		return this;
	};

	addStatusBarItems = (config: StatusBarConfig<TData>) => {
		addStatusBar(config, this.controller);
		return this;
	};

	create = (): FusionWorkspaceController<TData, TError, TContext> => {
		this.controller.controllers.dataSource.fetch();
		return this.controller;
	};
}
