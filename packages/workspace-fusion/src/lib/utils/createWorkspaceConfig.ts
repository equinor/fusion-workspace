import { Provider, Tab } from '@equinor/workspace-react';
import history from 'history/browser';
import { configureUrlWithHistory } from '../classes/fusionUrlHandler';
import { WorkspaceConfiguration, FusionMediator, WorkspaceProps } from '../types';
import { sortFusionTabs } from './fusionTabOrder';
import { addCustomTabs } from './customTab';
import { addContext } from './context';

import { addFilter } from '../integrations/filter';
import { addStatusBar } from '../integrations/status-bar';
import { addFusionPowerBi, addPowerBi } from '../integrations/power-bi';
import { addGarden } from '../integrations/garden';
import { addSidesheet } from '../integrations/sidesheet';
import { addGrid } from '../integrations/grid';
import { BaseEvent } from '@equinor/workspace-core';
import { RootHeaderContext } from '../context';

export function createConfigurationObject<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): WorkspaceConfiguration<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys> {
	const tabs: Tab[] = [];
	const providers: Provider[] = [];

	const pushTab = (e: Tab | undefined) => {
		if (!e) return;
		tabs.push(e);
	};

	const pushProvider = (e: Provider | undefined) => {
		if (!e) return;
		providers.push(e);
	};
	//@deprecated
	// addViewController(viewController, mediator, history);
	//@deprecated
	pushProvider(configureUrlWithHistory(mediator, history));

	pushProvider({ name: 'Header', Component: RootHeaderContext });
	pushProvider(addContext(props.contextOptions, mediator));
	pushTab(addFusionPowerBi(props.fusionPowerBiOptions));
	pushTab(addPowerBi(props.powerBiOptions));

	tabs.concat(addCustomTabs(props.customTabs, mediator));

	const garden = addGarden(props.gardenOptions, mediator);
	pushProvider(garden?.provider);
	pushTab(garden?.tab);

	const grid = addGrid(props.gridOptions, mediator);
	pushProvider(grid?.provider);
	pushTab(grid?.tab);

	pushProvider(addStatusBar(props.statusBarOptions, mediator));

	pushProvider(addFilter(props.filterOptions, mediator));

	const Sidesheet = addSidesheet(props.sidesheetOptions, mediator);

	//Consider entry hooks  "pre" | "post"
	// props.modules && props.modules.forEach((s) => s.setup(mediator, props.workspaceOptions.appKey, viewController));

	sortFusionTabs(tabs);

	return {
		providers: providers,
		tabs: tabs,
		defaultTab: props.workspaceOptions.defaultTab,
		Sidesheet: Sidesheet,
	};
}
