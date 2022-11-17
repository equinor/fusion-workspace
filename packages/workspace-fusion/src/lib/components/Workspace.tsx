import { useRef } from 'react';
import { Action } from 'history';
import history from 'history/browser';
import { BehaviorSubject } from 'rxjs';
import {
	useEffectOnce,
	Workspace as WorkspaceView,
	WorkspaceReactMediator,
	WorkspaceViewController,
} from '@equinor/workspace-react';
import {
	addCustomTab,
	addDataSource,
	addFilter,
	addGarden,
	addGrid,
	addSidesheet,
	addStatusBar,
	addViewController,
	sortFusionTabs,
	switchTabOnNavigation,
} from '../utils';
import {
	CustomTab,
	FusionMediator,
	FusionWorkspaceError,
	WorkspaceConfig,
	WorkspaceConfiguration,
	WorkspaceTabNames,
} from '../types';
import { DataSourceConfig } from '../integrations/data-source';
import { FilterConfig } from '../integrations/filter';
import { GardenConfig } from '../integrations/garden';
import { GridConfig } from '../integrations/grid';
import { StatusBarConfig } from '../integrations/status-bar';
import { SidesheetConfig } from '../integrations/sidesheet';
import { FusionPowerBiConfig, PowerBiConfig } from '../integrations/power-bi';
import { configureUrlWithHistory, updateQueryParams } from '../classes/fusionUrlHandler';
import { didOptionsChange } from '../utils/optionsChanged/didOptionsChange';
import { FusionPowerBiConfigurator } from '../classes';
import { addPowerBi } from '../utils/powerBI/addPowerBi';

type OnWorkspaceReadyEvent<TData extends Record<PropertyKey, unknown>> = {
	api: FusionMediator<TData>;
};

export type WorkspaceProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = {
	gardenOptions?: GardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TContext, TContext>;
	gridOptions?: GridConfig<TData>;
	filterOptions?: FilterConfig<TData>;
	dataOptions?: DataSourceConfig<TData>;
	statusBarOptions?: StatusBarConfig<TData>;
	sidesheetOptions?: SidesheetConfig<TData>;
	workspaceOptions: WorkspaceConfig<TData>;
	customTabs?: CustomTab[];
	onWorkspaceReady?: (ev: OnWorkspaceReadyEvent<TData>) => void;
	fusionPowerBiOptions?: FusionPowerBiConfig;
	powerBiOptions?: PowerBiConfig;
	contextOptions?: (filteredData: TData[]) => TContext;
	//modules?
	//Workspace state
};

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>) {
	const configuration = useRef<WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>>(
		createConfigurationObject(props)
	);

	/**
	 * Triggers on every parent render and updates configuration accordingly
	 * Careful with doing complex operations in here
	 */
	didOptionsChange(createConfigurationObject(props), configuration.current);

	useEffectOnce(() => {
		if (props.onWorkspaceReady) {
			props.onWorkspaceReady({ api: configuration.current.mediator });
		}
	});

	return <WorkspaceView controller={configuration.current.viewController} />;
}

function createConfigurationObject<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>
): WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys> {
	//Switch to contextService
	const context = new BehaviorSubject<TContext>({} as TContext);

	const mediator: FusionMediator<TData> = new WorkspaceReactMediator();
	const viewController = new WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>();
	addViewController(viewController, mediator, history);
	configureUrlWithHistory(mediator, history);
	const configuration: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys> = {
		mediator,
		viewController,
		workspaceConfig: props.workspaceOptions,
		rawOptions: props,
	};
	if (props.contextOptions) {
		mediator.dataService.filteredData$.subscribe((data) => {
			if (!data || !props.contextOptions) return;
			context.next(props.contextOptions(data));
		});
	}
	if (props.fusionPowerBiOptions) {
		const reportUri = props.fusionPowerBiOptions.reportUri;
		const getConfig = () => FusionPowerBiConfigurator.getEmbedInfo(reportUri);
		const getToken = () => FusionPowerBiConfigurator.getToken(reportUri);
		addPowerBi({ getConfig, getToken, reportUri }, viewController, mediator);
	}
	if (props.powerBiOptions) {
		addPowerBi(props.powerBiOptions, viewController, mediator);
	}
	if (props.dataOptions) {
		configuration.dataSourceController = addDataSource(props.dataOptions, mediator);
	}
	if (props.customTabs) {
		props.customTabs.forEach((s) => addCustomTab(s, viewController, mediator));
	}
	if (props.filterOptions) {
		addFilter(props.filterOptions, viewController, mediator);
	} else {
		//TODO: Extract
		//bypass filterdata
		mediator.dataService.data$.subscribe((val) => {
			if (!val) return;
			mediator.dataService.filteredData = val;
		});
	}
	if (props.gardenOptions) {
		addGarden(props.gardenOptions, viewController, mediator, props.workspaceOptions.getIdentifier, context);
	}
	if (props.gridOptions) {
		addGrid(props.gridOptions, viewController, mediator, props.workspaceOptions.getIdentifier, context);
	}
	if (props.sidesheetOptions) {
		addSidesheet(props.sidesheetOptions, viewController, mediator);
	}
	if (props.statusBarOptions) {
		addStatusBar(props.statusBarOptions, viewController, mediator);
	}

	mediator.clickService.click$.subscribe(({ item }) => {
		const id = props.workspaceOptions.getIdentifier(item);
		mediator.selectionService.selectedNodes = [id];
		updateQueryParams([`item=${id}`], mediator, history);
	});

	//do it later
	// this.mediator.onUnMount(() => this.#context.complete());

	history.listen(({ action }) => {
		if (action === Action.Pop) {
			//Navigation back or forward;
			switchTabOnNavigation(mediator, viewController);
		}
	});

	sortFusionTabs(viewController);
	return configuration;
}
