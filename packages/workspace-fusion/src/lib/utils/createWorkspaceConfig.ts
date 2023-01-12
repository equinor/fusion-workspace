import { Provider, WorkspaceReactMediator, WorkspaceViewController } from '@equinor/workspace-react';
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
import { addGrid } from '../integrations/grid';
import { BaseEvent } from '@equinor/workspace-core';

export function createConfigurationObject<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>,
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>
): WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys> {
	const configuration: WorkspaceConfiguration<
		TData,
		TContext,
		TCustomSidesheetEvents,
		TExtendedFields,
		TCustomGroupByKeys
	> = {
		mediator,
		viewController,
		workspaceConfig: props.workspaceOptions,
		rawOptions: props,
	};

	addViewController(viewController, mediator, history);
	configureUrlWithHistory(mediator, history);
	addContext(props.contextOptions, viewController, mediator);
	addFusionPowerBi(props.fusionPowerBiOptions, viewController, mediator);
	addPowerBi(props.powerBiOptions, viewController, mediator);
	addCustomTabs(props.customTabs, viewController, mediator);
	addGarden(props.gardenOptions, viewController, mediator);
	addGrid(props.gridOptions, viewController, mediator);
	addSidesheet(props.sidesheetOptions, viewController, mediator);
	addStatusBar(props.statusBarOptions, viewController, mediator);
	addFilter(props.filterOptions, viewController, mediator);

	//Consider entry hooks  "pre" | "post"
	props.modules && props.modules.forEach((s) => s.setup(mediator, props.workspaceOptions.appKey, viewController));

	sortFusionTabs(viewController);

	return configuration;
}
