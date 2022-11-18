import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceProps } from '../components/Workspace';
import { Action } from 'history';
import history from 'history/browser';
import { FusionPowerBiConfigurator } from '../classes';
import { configureUrlWithHistory, updateQueryParams } from '../classes/fusionUrlHandler';
import { WorkspaceConfiguration, FusionMediator, WorkspaceTabNames, FusionWorkspaceError } from '../types';
import { addCustomTab } from './addCustomTab';
import { addDataSource } from './dataSource';
import { addFilter } from './filter';
import { sortFusionTabs } from './fusionTabOrder';
import { addGarden } from './garden';
import { addGrid } from './grid';
import { addPowerBi } from './powerBI/addPowerBi';
import { addSidesheet } from './sidesheet';
import { addStatusBar } from './statusBar';
import { addViewController, switchTabOnNavigation } from './viewController';

export function createConfigurationObject<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>
): WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys> {
	const mediator: FusionMediator<TData, TContext> = new WorkspaceReactMediator();
	const viewController = new WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>(
		props.workspaceOptions.defaultTab
	);
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
			mediator.contextService.setContext(props.contextOptions(data));
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
		addGarden(props.gardenOptions, viewController, mediator, props.workspaceOptions.getIdentifier);
	}
	if (props.gridOptions) {
		addGrid(props.gridOptions, viewController, mediator, props.workspaceOptions.getIdentifier);
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

	history.listen(({ action }) => {
		if (action === Action.Pop) {
			//Navigation back or forward;
			switchTabOnNavigation(mediator, viewController);
		}
	});

	sortFusionTabs(viewController);
	return configuration;
}
