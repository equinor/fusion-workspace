import { GardenController } from '@equinor/garden';
import { GardenConfigurator } from '../types/configurator';
import { FusionWorkspaceController } from '../types/types';

export function gardenConfig<TData, TControllers, TContext>(
    gc: GardenController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    wc.onFilteredDataChanged((data) => gc.setData(data));
}

export const addGardenTab = <TData, TControllers, TContext>(
    controller: FusionWorkspaceController<TData, TControllers, TContext>,
    configurator: GardenConfigurator<TData, TControllers, TContext>
): FusionWorkspaceController<TData, TControllers, TContext> => {
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
