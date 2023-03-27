import { Provider, Tab } from '@equinor/workspace-react';
import history from 'history/browser';
import { configureUrlWithHistory } from '../classes/fusionUrlHandler';
import { WorkspaceConfiguration, FusionMediator, WorkspaceProps, WorkspaceTabNames } from '../types';
import { sortFusionTabs } from './fusionTabOrder';
import { addCustomTabs } from './customTab';
import { addContext } from './context';

import { addFilter } from '../integrations/filter';
import { addStatusBar } from '../integrations/status-bar';
import { addSidesheet } from '../integrations/sidesheet';
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
): WorkspaceConfiguration {
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

  pushProvider(configureUrlWithHistory(mediator, history));

  pushProvider({ name: 'Header', Component: RootHeaderContext });
  pushProvider(addContext(props.contextOptions, mediator));

  tabs.concat(addCustomTabs(props.customTabs, mediator));

  props.modules &&
    props.modules.forEach((module) => {
      const config = module.setup(props, mediator);
      if (!config) return;
      pushProvider(config.provider);
      pushTab(config.tab);
    });

  pushProvider(addStatusBar(props.statusBarOptions, mediator));

  pushProvider(addFilter(props.filterOptions, mediator));

  const Sidesheet = addSidesheet(props.sidesheetOptions, mediator);

  sortFusionTabs(tabs);

  return {
    providers: providers,
    tabs: tabs,
    defaultTab: resolveDefaultTab(props.workspaceOptions.defaultTab, tabs),
    Sidesheet: Sidesheet,
  };
}

function resolveDefaultTab(defaultTab: string | undefined, tabs: Tab<string>[]) {
  const tabName = tabs.find((s) => s.name === defaultTab)?.name ?? !!tabs.length ? tabs?.[0].name : undefined;
  if (typeof tabName !== 'string') {
    throw new Error(`
    Failed to find any tabs\n
    please make sure you added configuration module for at least one tab\n
    check the docs: https://equinor.github.io/fusion-workspace/introduction/\n`);
  }
  return tabName;
}
