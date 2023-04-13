import { Provider, Tab } from '@equinor/workspace-react';
import { FusionMediator, WorkspaceConfiguration, WorkspaceProps } from '../types';
import { sortFusionTabs } from './fusionTabOrder';

import { addStatusBar } from '../integrations/status-bar';
import { addSidesheet } from '../integrations/sidesheet';
import { BaseEvent } from '@equinor/workspace-core';
import { RootHeaderContext } from '../context';
import { FilterContextProvider } from '@equinor/workspace-filter';

export function createConfigurationObject<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  props: WorkspaceProps<TData, TContext, TCustomSidesheetEvents>,
  mediator: FusionMediator<never, TContext, TCustomSidesheetEvents>
): WorkspaceConfiguration {
  const tabs: Tab[] = [];
  const providers: Provider[] = [];

  const pushTab = (tab: Tab | undefined) => {
    if (!tab) return;
    tabs.push(tab);
  };

  const pushProvider = (provider: Provider | undefined) => {
    if (!provider) return;
    providers.push(provider);
  };

  pushProvider({
    Component: FilterContextProvider,
    name: 'filter_context',
  });

  // pushProvider(configureUrlWithHistory(mediator, history));

  pushProvider({ name: 'Header', Component: RootHeaderContext });

  // tabs.concat(addCustomTabs(props.customTabs, mediator));

  props.modules &&
    props.modules.forEach((module) => {
      const config = module.setup(props, mediator);
      if (!config) return;
      pushProvider(config.provider);
      pushTab(config.tab);
    });

  pushProvider(addStatusBar(props.statusBarOptions));

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
