
import { FilterController } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/garden';
import { DataSourceController } from '@equinor/workspace-data-source';
import { dataSourceConfig, filterConfiguration, gardenConfig } from './config';
import { DataSourceConfigurator, FusionWorkspaceController, GardenConfigurator } from './types';

export const addGardenTab = <TData, TControllers, TContext>(
    controller: FusionWorkspaceController<TData, TControllers, TContext>,
    configurator: GardenConfigurator<TData, TControllers, TContext>
) => {
    controller.addTab<
        GardenController<TData>,
        FusionWorkspaceController<TData, TControllers, TContext>
    >({
        controller: new GardenController<TData>(configurator(controller)),

        name: 'garden',
        ViewComponent: () => null,
        config: gardenConfig,
    });
    return controller;
};

export const addDataSourceController = <TData, TControllers, TContext>(
    controller: FusionWorkspaceController<TData, TControllers, TContext>,
    configurator: DataSourceConfigurator<TData, TControllers, TContext>
) => {
    controller.addController<
        DataSourceController<TData>,
        FusionWorkspaceController<TData, TControllers, TContext>
    >({
        name: 'dataSource',
        controller: new DataSourceController(configurator(controller).dataSource),
        config: dataSourceConfig,
    });
    return controller;
};

export const addDataFilterController = <TData, TControllers, TContext>(
    controller: FusionWorkspaceController<TData, TControllers, TContext>
) => {
    controller.addController<
        FilterController<TData>,
        FusionWorkspaceController<TData, TControllers, TContext>
    >({
        name: 'filter',
        controller: new FilterController<TData>(),
        config: filterConfiguration,
    });
    return controller;
};
