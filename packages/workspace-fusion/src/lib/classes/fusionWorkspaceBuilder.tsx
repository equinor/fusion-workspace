import { Garden, GardenConfig, GardenController } from '@equinor/garden';
import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import { GardenIcon } from '../icons/GardenIcon';
import {
	DataFetchAsync,
	GridConfig,
	SidesheetConfig,
	WorkspaceTabNames,
	StatusBarConfig,
	FusionWorkspaceController,
	CustomTab,
} from '../types';
import { addCustomTab, addDataSource, addGrid, addSidesheet, addStatusBar } from '../utils';

interface UIContext {
	appKey: string;
	color: string;
}

export interface WorkspaceContext {
	ui: UIContext;
}

export class FusionWorkspaceBuilder<TData, TError> {
	/** The name of your workspace/application */
	objectIdentifier: keyof TData;
	appKey: string;
	private mediator: FusionWorkspaceController<TData, TError>;
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>;
	constructor(appKey: string, color: string, objectIdentifier: keyof TData, defaultTab?: WorkspaceTabNames) {
		this.appKey = appKey;
		this.objectIdentifier = objectIdentifier;
		this.mediator = new WorkspaceReactMediator();
		this.viewController = new WorkspaceViewController<WorkspaceTabNames, TError>(appKey, [], 'grid', color);

		this.mediator.onClick(({ item }) => {
			const id = item[this.objectIdentifier] as unknown as string;
			this.mediator.highlightedItem.setValue(id);
		});
		this.mediator.highlightedItem.onchange((id) => {
			console.log(`Highlighted item with id of ${id}`);
		});
	}

	/**
	 * Add a function for providing data to the workspace
	 * @param dataFetch An async function returning a data array
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addDataSource = (dataFetch: DataFetchAsync<TData>) => {
		addDataSource(dataFetch, this.mediator);
		return this;
	};

	addMiddleware = (cb: (mediator: FusionWorkspaceController<TData, TError>) => void) => {
		cb(this.mediator);
		return this;
	};

	/**
	 * Adds a custom tab to your workspace
	 * Use the props to access data, onclick etc..
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addCustomTab = (tab: CustomTab<TData>) => {
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
		const gardenController = new GardenController(config);

		gardenController.clickEvents.onClickItem = (item) => {
			gardenController.setHighlightedNode(item[this.objectIdentifier] as unknown as string);
			this.mediator.click({ item: item });
		};

		this.viewController.tabs.push({
			Component: () => <Garden controller={gardenController} />,
			name: 'garden',
			HeaderComponent: GardenIcon,
		});

		this.mediator.onFilterDataChange(gardenController.data.setValue);
		return this;
	};

	/**
	 * Adds a AG-Grid tab to your workspace
	 * @param gridconfig the configuration object for ag grid.
	 * @returns an instance of the workspace builder (for method chaining)
	 */
	addGrid = (gridConfig: GridConfig<TData>) => {
		addGrid(gridConfig, this.viewController, this.mediator, this.objectIdentifier);
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
