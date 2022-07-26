import { GardenConfig, GardenController } from '@equinor/garden';

import { DataSourceConfig, DataSourceController } from '@equinor/workspace-data-source';
import { FilterConfiguration, FilterController } from '@equinor/workspace-filter';
import { ReactWorkspaceController } from '@equinor/workspace-react';

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

export type FusionWorkspaceBase<TData, TControllers, TContext> = ReactWorkspaceController<
    TData,
    TControllers,
    ClickEvent<TData>,
    FusionWorkspaceError,
    TContext
>;

export type DataSourceConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => DataSourceConfig<TData>;

export type GardenConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => GardenConfig<TData>;

export type FilterConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => FilterConfiguration<TData>;

export interface FusionWorkspaceController<TData, TControllers, TContext>
    extends FusionWorkspaceBase<TData, TControllers, TContext> {
    context: TContext;
    addGarden: (
        configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addGrid: (
        configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addDataSource: (
        configurator: DataSourceConfigurator<TData, TControllers, TContext>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addFilter: (
        configurator?: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addSideSheet: (
        configurator: (workspace: FusionWorkspaceBase<TData, TControllers, TContext>) => void
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
}

export type FusionWorkspace<TData, TContext = any> = FusionWorkspaceController<
    TData,
    FusionWorkspaceControllers<TData>,
    TContext
>;
