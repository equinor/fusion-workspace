import { GardenController } from '@equinor/garden';

import { DataSourceController } from '@equinor/workspace-data-source';
import { FilterController } from '@equinor/workspace-filter';
import { ReactWorkspaceController, Tab } from '@equinor/workspace-react';
import { DataSourceConfigurator, FilterConfigurator, GardenConfigurator } from './configurator';

export interface GardenClickEvent<T> {
    type: 'garden';
    item: T;
    controller: GardenController<T>;
}

export type ClickEvent<T> = GardenClickEvent<T>;

export interface FusionWorkspaceControllers<TData> {
    dataSource: DataSourceController<TData>;
    garden: GardenController<TData>;
    filter: FilterController<TData>;
}

export interface FusionWorkspaceError {}

export type FusionWorkspaceBase<
    TData,
    TControllers,
    TContext = any,
    TClickEvent extends ClickEvent<TData> = ClickEvent<TData>,
    TError extends FusionWorkspaceError = FusionWorkspaceError
> = ReactWorkspaceController<TData, TControllers, TClickEvent, TError, TContext>;

export interface FusionWorkspaceApi<TData, TControllers, TContext> {
    context: TContext;
    config: (config: any) => FusionWorkspaceController<TData, TControllers, TContext>;
    addGarden: (
        configurator: GardenConfigurator<TData, TControllers, TContext>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    // addTable: (
    //     configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    // ) => FusionWorkspaceController<TData, TControllers, TContext>;
    // addPowerBi: (
    //     configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    // ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addGrid: (
        configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addDataSource: (
        configurator: DataSourceConfigurator<TData, TControllers, TContext>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addFilter: (
        configurator: FilterConfigurator<TData, TControllers, TContext>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addSideSheet: (
        configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addCustomTab: <TController, WSController>(
        tab: Tab<TController, WSController>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    // addWidget: (
    //     configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    // ) => FusionWorkspaceController<TData, TControllers, TContext>;
}

export type FusionWorkspaceController<TData, TControllers, TContext> = FusionWorkspaceBase<
    TData,
    TControllers,
    TContext
> &
    FusionWorkspaceApi<TData, TControllers, TContext>;

export type FusionWorkspace<TData, TContext = any> = FusionWorkspaceController<
    TData,
    FusionWorkspaceControllers<TData>,
    TContext
>;
