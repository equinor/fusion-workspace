import { FilterOptions } from '@equinor/filter';
import { GardenConfig } from '@equinor/garden';
import { DataSourceConfig } from '@equinor/workspace-data-source';
import { FusionWorkspaceBase } from './types';

export type DataSourceConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => DataSourceConfig<TData>;

export type FilterConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => FilterOptions<TData>;

export type GardenConfigurator<TData, TControllers, TContext> = (
    workspace: FusionWorkspaceBase<TData, TControllers, TContext>
) => GardenConfig<TData>;

// export type GirdConfigurator<TData, TControllers, TContext> = (
//     workspace: FusionWorkspaceBase<TData, TControllers, TContext>
// ) => GridConfig<TData>;

// export type PowerBiConfigurator<TData, TControllers, TContext> = (
//     workspace: FusionWorkspaceBase<TData, TControllers, TContext>
// ) => PowerBiConfig<TData>;
