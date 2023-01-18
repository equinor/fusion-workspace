import { GridController } from '@equinor/workspace-ag-grid';
import { FilterController } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/workspace-garden';
import { Provider, Tab, WorkspaceViewController } from '@equinor/workspace-react';
import { FusionWorkspaceError, FusionMediator } from './fusionController';
import { WorkspaceOnClick } from './event';
import { WorkspaceTabNames } from './tabs';
import { WorkspaceProps } from './workspaceProps';
import { BaseEvent } from '@equinor/workspace-core';

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

export type WorkspaceConfiguration<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = {
	Sidesheet?: () => JSX.Element;
	providers: Provider[];
	tabs: Tab[];
	defaultTab?: string;
};
