import {
    FusionWorkspaceBase,
    FusionWorkspaceControllerInternal,
    FusionWorkspaceExtensions,
} from '../types/types';

/*
 * Merge fusionWorkspaceBase with fusionWorkspaceExtensions features
 * This function will merge properties of two objects
 */
export function controllerMerge<TData, TControllers, TContext>(
    fusionWorkspaceBase: FusionWorkspaceBase<TData, TControllers, TContext>,
    fusionWorkspaceExtensions: FusionWorkspaceExtensions<TData, TControllers, TContext>
) {
    for (const property in fusionWorkspaceExtensions) {
        fusionWorkspaceBase[property] = fusionWorkspaceExtensions[property];
    }
    return fusionWorkspaceBase as FusionWorkspaceControllerInternal<TData, TControllers, TContext>;
}
