import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import { WorkspaceProps } from '../components/Workspace';
import history from 'history/browser';
import { configureUrlWithHistory } from '../classes/fusionUrlHandler';
import { WorkspaceConfiguration, FusionMediator, WorkspaceTabNames, FusionWorkspaceError } from '../types';
import { addDataSource } from './dataSource';
import { addFilter } from './filter';
import { sortFusionTabs } from './fusionTabOrder';
import { addGarden } from './garden';
import { addGrid } from './grid';
import { addPowerBi } from './powerBI/addPowerBi';
import { addSidesheet } from './sidesheet';
import { addStatusBar } from './statusBar';
import { addViewController } from './viewController';
import { addFusionPowerBi } from './powerBI/addFusionPowerBi';
import { addCustomTabs } from './customTab';
import { addContext } from './context';

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
	const configuration: WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys> = {
		mediator,
		viewController,
		workspaceConfig: props.workspaceOptions,
		rawOptions: props,
	};

	addViewController(viewController, mediator, history);
	configuration.dataSourceController = addDataSource(props.dataOptions, mediator);
	configureUrlWithHistory(mediator, history, props.workspaceOptions.getIdentifier);
	addContext(props.contextOptions, viewController, mediator);
	addFusionPowerBi(props.fusionPowerBiOptions, viewController, mediator);
	addPowerBi(props.powerBiOptions, viewController, mediator);
	addCustomTabs(props.customTabs, viewController, mediator);
	addGarden(props.gardenOptions, viewController, mediator, props.workspaceOptions.getIdentifier);
	addGrid(props.gridOptions, viewController, mediator, props.workspaceOptions.getIdentifier);
	addSidesheet(props.sidesheetOptions, viewController, mediator, props.workspaceOptions.getIdentifier);
	addStatusBar(props.statusBarOptions, viewController, mediator);
	addFilter(props.filterOptions, viewController, mediator);
	sortFusionTabs(viewController);

	return configuration;
}
