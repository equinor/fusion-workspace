import { WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
import history from 'history/browser';
import { configureUrlWithHistory } from '../classes/fusionUrlHandler';
import {
	WorkspaceConfiguration,
	FusionMediator,
	WorkspaceTabNames,
	FusionWorkspaceError,
	WorkspaceProps,
} from '../types';
import { sortFusionTabs } from './fusionTabOrder';
import { addViewController } from './viewController';
import { addCustomTabs } from './customTab';
import { addContext } from './context';

import { addFilter } from '../integrations/filter';
import { addStatusBar } from '../integrations/status-bar';
import { addFusionPowerBi, addPowerBi } from '../integrations/power-bi';
import { addGarden } from '../integrations/garden';
import { addSidesheet } from '../integrations/sidesheet';
import { addDataSource } from '../integrations/data-source';
import { addGrid } from '../integrations/grid';

export function createConfigurationObject<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>
): WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys> {
	const mediator: FusionMediator<TData, TContext> = new WorkspaceReactMediator(props.workspaceOptions.getIdentifier);

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
	configureUrlWithHistory(mediator, history);
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
