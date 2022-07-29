import { GardenController } from '@equinor/garden';
import { Controller, MiddlewareConfigFunction } from '@equinor/workspace-core';

import { FilterController } from '@equinor/filter';
import { DataSourceController } from '@equinor/workspace-data-source';
import { ReactWorkspaceController, Tab } from '@equinor/workspace-react';
import { SidesheetController } from '@equinor/workspace-sidesheet';
import { ClickEvent } from './click';
import { DataSourceConfigurator, FilterConfigurator, GardenConfigurator } from './configurator';

export interface FusionWorkspaceControllers<TData> {
    dataSource: DataSourceController<TData>;
    garden: GardenController<TData>;
    filter: FilterController<TData>;
    sidesheet: SidesheetController<TData>;
}

export interface FusionWorkspaceError {}

export type FusionWorkspaceBase<
    TData,
    TControllers,
    TContext = any,
    TClickEvent extends ClickEvent<TData> = ClickEvent<TData>,
    TError extends FusionWorkspaceError = FusionWorkspaceError
> = ReactWorkspaceController<TData, TControllers, TClickEvent, TError, TContext>;

export type FusionWorkspaceController<TData, TControllers, TContext> = FusionWorkspaceExtensions<
    TData,
    TControllers,
    TContext
> &
    Omit<
        FusionWorkspaceBase<TData, TControllers, TContext>,
        'addTab' | 'addMiddleware' | 'addController'
    >;

export type FusionWorkspaceControllerInternal<TData, TControllers, TContext> = FusionWorkspaceBase<
    TData,
    TControllers,
    TContext
> &
    FusionWorkspaceExtensions<TData, TControllers, TContext>;

export type FusionWorkspace<TData, TContext = any> = FusionWorkspaceController<
    TData,
    FusionWorkspaceControllers<TData>,
    TContext
>;
export interface FusionWorkspaceExtensions<TData, TControllers, TContext> {
    context: TContext;
    config: (config: any) => FusionWorkspaceController<TData, TControllers, TContext>;
    addGarden: (
        configurator: GardenConfigurator<TData, TControllers, TContext>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
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
    addCustomController: <
        ControllerType,
        TWController extends FusionWorkspaceControllerInternal<
            TData,
            TControllers,
            TContext
        > = FusionWorkspaceControllerInternal<TData, TControllers, TContext>
    >(
        controller: Controller<ControllerType, TWController>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
    addCustomMiddleware: <
        TWController extends FusionWorkspaceControllerInternal<
            TData,
            TControllers,
            TContext
        > = FusionWorkspaceControllerInternal<TData, TControllers, TContext>
    >(
        config: MiddlewareConfigFunction<TWController>
    ) => FusionWorkspaceController<TData, TControllers, TContext>;
}
