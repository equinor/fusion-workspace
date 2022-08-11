import { StatusItem } from '@equinor/status-bar';
import { ColDef, GridOptions } from 'ag-grid-community';
import { WorkspaceOnClick } from './onClick';

export interface GridConfig<T> {
	columnDefinitions: [ColDef<T>, ...ColDef<T>[]];
	gridOptions?: GridOptions<T>;
}

export interface SidesheetConfig<TData> {
	Component: (props: WorkspaceOnClick<TData>) => JSX.Element;
}

export type DataFetchAsync<TData> = () => Promise<TData[]>;

export type GetStatusItem<TData> = (item: TData[]) => StatusItem;

interface StatusBar<TData> {
	getValue: GetStatusItem<TData>;
}

export type StatusBarConfig<TData> = [StatusBar<TData>, ...StatusBar<TData>[]];
