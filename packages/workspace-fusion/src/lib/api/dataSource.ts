import { DataSourceController } from '@equinor/workspace-data-source';
import { DataSourceConfigurator } from '../types/configurator';
import { FusionWorkspaceControllerInternal } from '../types/types';

export const addDataSourceController = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: DataSourceConfigurator<TData, TControllers, TContext>
) => {
    const dataSourceController = new DataSourceController<TData>(
        configurator(controller).dataSource
    );

    controller.addController({
        name: 'dataSource',
        controller: dataSourceController,
        config: (
            dc: DataSourceController<TData>,
            wc: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
        ) => {
            dc.onDataChanged((data: TData[]) => {
                wc.setData(data);
            });
        },
    });
    return controller;
};
