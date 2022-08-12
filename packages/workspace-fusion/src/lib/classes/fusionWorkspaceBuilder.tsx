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

interface FusionUI {
	name: string;
	color: string;
}

export interface FusionContext {
	ui: FusionUI;
}

export class FusionWorkspaceBuilder<TData, TError> {
	name: string;
	private controller: FusionWorkspaceController<TData, TError>;
	constructor(name: string, color: string, defaultTab?: WorkspaceTabNames) {
		this.name = name;
		/**
		 * TODO: Extract
		 * Init default controllers
		 */
		this.controller = new WorkspaceController();
		addViewController(this.controller);
		this.controller.controllers.view.activeTab = defaultTab ?? 'grid';
		this.controller.setContext((s) => ({ ...s, ui: { color, name } }));
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

	create = (): FusionWorkspaceController<TData, TError> => {
		this.controller.controllers.dataSource.fetch();
		return this.controller;
	};
}
