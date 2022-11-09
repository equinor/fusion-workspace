import { StatusItem } from '../integrations/status-bar';
import { WorkspaceOnClick } from './onClick';

export type SidesheetConfig<TData> = {
	Component: (props: WorkspaceOnClick<TData>) => JSX.Element;
	getTitle: (clickEv: WorkspaceOnClick<TData>) => string;
};

export type DataSourceOptions<TData> = {
	/** Function for getting response object from server */
	getResponseAsync: (signal?: AbortSignal) => Promise<Response>;
	/**
	 * Function for parsing response
	 * Can be omitted if all you do is .json();
	 */
	responseParser?: (response: Response) => TData[] | Promise<TData[]>;
};

export type StatusBarConfig<TData> = (data: TData[]) => [StatusItem, ...StatusItem[]];

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

export type PowerBiConfig = {
	reportUri: string;
	getConfig: (reportUri: string) => Promise<any>;
	getToken: (reportUri: string) => Promise<PowerBiToken>;
};
/**
 * Configuration for adding a fusion power bi client
 * Requires client configured for fusion reports api
 */
export type FusionPowerBiConfig = {
	reportUri: string;
};

type PowerBiToken = {
	token: string;
};

/** Any http client, with fusion scope */
export type FusionClient = {
	fetch: (uri: string, init?: RequestInit) => Promise<Response>;
};
