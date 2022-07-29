import { Garden, GardenController } from '@equinor/garden';

import { GardenConfigurator } from '../types/configurator';
import { FusionWorkspaceControllerInternal } from '../types/types';

export const addGardenTab = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: GardenConfigurator<TData, TControllers, TContext>
): FusionWorkspaceControllerInternal<TData, TControllers, TContext> => {
    controller.addTab({
        controller: new GardenController<TData>(configurator(controller)),
        name: 'Garden',
        ViewComponent: Garden,
        config: (
            gc: GardenController<TData>,
            wc: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
        ) => {
            wc.onFilteredDataChanged((data) => gc.setData(data));

            wc.onFilteredDataChanged((data) => gc.setData(data as any));
            const old = gc.clickEvents.onClickItem;

            gc.clickEvents.onClickItem = (item, controller) => {
                old && old(item, controller);
                wc.click({
                    type: 'grid',
                    item,
                    controller,
                } as any);
            };
        },
    });
    return controller;
};
