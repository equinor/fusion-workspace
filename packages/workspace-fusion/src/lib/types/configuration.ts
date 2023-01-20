import { Provider, Tab } from '@equinor/workspace-react';
import { WorkspaceOnClick } from './event';
import { WorkspaceTabNames } from './tabs';

export type GetIdentifier<TData> = (item: TData) => string;
export type CustomTabProps<TData> = {
	data: TData[];
	onClick: (ev: WorkspaceOnClick<TData>) => void;
};

export type WorkspaceConfig<TData, TabNames extends string = WorkspaceTabNames> = {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
	defaultTab?: TabNames;
};

export type CustomTabComponent = () => JSX.Element;

export type CustomTab = {
	name: string;
	TabIcon: () => JSX.Element;
	Component: CustomTabComponent;
	CustomHeader?: () => JSX.Element;
};

export type AppConfig<TabNames extends string> = {
	appKey: string;
	appColor: string;
	defaultTab: TabNames;
};

export type WorkspaceConfiguration = {
	Sidesheet?: () => JSX.Element;
	providers: Provider[];
	tabs: Tab[];
	defaultTab?: string;
};
