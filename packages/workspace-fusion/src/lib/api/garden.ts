import { GardenController } from '@equinor/garden';
import { GardenConfigurator } from '../types/configurator';
import { FusionWorkspaceControllerInternal } from '../types/types';

export function gardenConfig<TData, TControllers, TContext>(
    gc: GardenController<TData>,
    wc: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
) {
    wc.onFilteredDataChanged((data) => gc.setData(data));
}

export const addGardenTab = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: GardenConfigurator<TData, TControllers, TContext>
): FusionWorkspaceControllerInternal<TData, TControllers, TContext> => {
    controller.addTab<
        GardenController<TData>,
        FusionWorkspaceControllerInternal<TData, TControllers, TContext>
    >({
        controller: new GardenController<TData>(configurator(controller)),

        name: 'garden',
        ViewComponent: () => null,
        config: gardenConfig,
    });
    return controller;
};
