import { WorkspaceController } from '@workspace/workspace-core';
import { StatusBar, StatusItem } from '@equinor/status-bar';
import {
	DataFetchAsync,
	GridConfig,
	SidesheetConfig,
	WorkspaceOnClick,
	WorkspaceControllers,
	WorkspaceTabNames,
	StatusBarConfig,
} from '../types';
import { addDataSource, addGrid, addSidesheet, addStatusBar, addViewController } from '../utils';
import { useEffect, useState } from 'react';
import { StatusBarWrapper } from '../components';

export class FusionWorkspaceBuilder<TData, TError, TContext> {
	name: string;
	private controller: WorkspaceController<
		TData,
		WorkspaceControllers<TData>,
		WorkspaceOnClick<TData>,
		TError,
		TContext
	>;
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

	create = (): WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext> => {
		this.controller.controllers.dataSource.fetch();
		return this.controller;
	};
}
