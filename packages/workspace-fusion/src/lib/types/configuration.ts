import { Provider, Tab } from '@equinor/workspace-react';
import { WorkspaceTabNames } from './tabs';

export type GetIdentifier<TData> = (item: TData) => string;
export type WorkspaceConfig<TData, TabNames extends string = WorkspaceTabNames> = {
  getIdentifier: GetIdentifier<TData>;
  defaultTab?: TabNames;
};

export type WorkspaceConfiguration = {
  Sidesheet?: () => JSX.Element;
  providers: Provider[];
  tabs: Tab[];
  defaultTab: string;
};
