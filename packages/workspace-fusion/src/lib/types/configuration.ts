import { GridController } from '@equinor/workspace-ag-grid';
import { FetchController } from '@equinor/workspace-data-source';
import { FilterController } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionWorkspaceError, FusionMediator } from './fusionController';
import { WorkspaceOnClick } from './event';
import { WorkspaceTabNames } from './tabs';
import { WorkspaceProps } from '../components/Workspace';

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

export type WorkspaceConfiguration<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = {
	gardenController?: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
	viewController: WorkspaceViewController<WorkspaceTabNames, FusionWorkspaceError>;
	gridController?: GridController<TData>;
	workspaceConfig: WorkspaceConfig<TData>;
	mediator: FusionMediator<TData, TContext>;
	filterController?: FilterController<TData>;
	dataSourceController?: FetchController<TData>;
	rawOptions: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>;
};
