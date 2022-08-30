import { StatusItem } from '@equinor/status-bar';
import { ColDef, GridOptions } from 'ag-grid-community';
import { WorkspaceOnClick } from './onClick';

export interface GridConfig<T> {
	columnDefinitions: [ColDef<T>, ...ColDef<T>[]];
	gridOptions?: GridOptions<T>;
}

export interface SidesheetConfig<TData> {
	Component: (props: WorkspaceOnClick<TData>) => JSX.Element;
	getTitle: (clickEv: WorkspaceOnClick<TData>) => string;
}

export type DataFetchAsync<TData> = () => Promise<TData[]>;

export type StatusBarConfig<TData> = (data: TData[]) => [StatusItem, ...StatusItem[]];

export interface CustomTabProps<TData> {
	data: TData[];
	onClick: (ev: WorkspaceOnClick<TData>) => void;
}

export type CustomTabComponent = () => JSX.Element;

export interface CustomTab {
	name: string;
	HeaderComponent: () => JSX.Element;
	Component: CustomTabComponent;
}

export interface AppConfig<TabNames extends string> {
	appKey: string;
	appColor: string;
	defaultTab: TabNames;
}
