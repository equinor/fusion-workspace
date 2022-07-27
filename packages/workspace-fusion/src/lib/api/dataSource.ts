import { DataSourceController } from '@equinor/workspace-data-source';
import { DataSourceConfigurator } from '../types/configurator';
import { FusionWorkspaceControllerInternal } from '../types/types';

export function dataSourceConfig<TData, TControllers, TContext>(
    dc: DataSourceController<TData>,
    wc: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
) {
    dc.onDataChanged((data: TData[]) => {
        wc.setData(data);
    });
}

export const addDataSourceController = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: DataSourceConfigurator<TData, TControllers, TContext>
) => {
    controller.addController<
        DataSourceController<TData>,
        FusionWorkspaceControllerInternal<TData, TControllers, TContext>
    >({
        name: 'dataSource',
        controller: new DataSourceController(configurator(controller).dataSource),
        config: dataSourceConfig,
    });
    return controller;
};
