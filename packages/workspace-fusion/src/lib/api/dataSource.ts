import { DataSourceController } from '@equinor/workspace-data-source';
import { DataSourceConfigurator, FusionWorkspaceController } from '../types/types';

export function dataSourceConfig<TData, TControllers, TContext>(
    dc: DataSourceController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    dc.onDataChanged((data: TData[]) => {
        wc.setData(data);
    });
}

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
