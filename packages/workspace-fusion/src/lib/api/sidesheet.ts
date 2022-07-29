import { SidesheetController } from '@equinor/workspace-sidesheet';

import { FusionWorkspaceControllerInternal } from '../types/types';

export const addSidesheet = <TData, TControllers, TContext>(
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>
): FusionWorkspaceControllerInternal<TData, TControllers, TContext> => {
    controller.addController({
        controller: new SidesheetController(),
        name: 'sidesheet',
        config: (sc, wc) => {
            wc.onClick((ev) => {
                sc.setItem(ev.item);
                sc.setSidesheetState(true);
            });
        },
    });
    return controller;
};
