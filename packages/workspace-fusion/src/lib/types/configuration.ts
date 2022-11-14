import { WorkspaceOnClick } from './onClick';

export type SidesheetConfig<TData> = {
	Component: (props: WorkspaceOnClick<TData>) => JSX.Element;
};

export type CustomTabProps<TData> = {
	data: TData[];
	onClick: (ev: WorkspaceOnClick<TData>) => void;
};

export type CustomTabComponent = () => JSX.Element;

export type CustomTab = {
	name: string;
	TabIcon: () => JSX.Element;
	Component: CustomTabComponent;
	CustomHeader?: () => JSX.Element;
	/**
	 * Will add the tab if the async function returns true
	 * e.g access checks for conditional rendering
	 */
	predicate?: () => Promise<boolean>;
};

export type AppConfig<TabNames extends string> = {
	appKey: string;
	appColor: string;
	defaultTab: TabNames;
};

/** Any http client, with fusion scope */
export type FusionClient = {
	fetch: (uri: string, init?: RequestInit) => Promise<Response>;
};
