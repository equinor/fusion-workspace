import { GardenController } from '@equinor/garden';

import { GardenConfigurator } from '../types/configurator';
import { FusionWorkspaceControllerInternal } from '../types/types';

export const addGardenTab = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: GardenConfigurator<TData, TControllers, TContext>
): FusionWorkspaceControllerInternal<TData, TControllers, TContext> => {
    controller.addTab({
        controller: new GardenController<TData>(configurator(controller)),
        name: 'garden',
        ViewComponent: () => null,
        config: (
            gc: GardenController<TData>,
            wc: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
        ) => {
            wc.onFilteredDataChanged((data) => gc.setData(data));
        },
    });
    return controller;
};
