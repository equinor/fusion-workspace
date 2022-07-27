import {
    FusionWorkspaceBase,
    FusionWorkspaceControllerInternal,
    FusionWorkspaceExtensions,
} from '../types/types';

/*
 * Merge createReactWorkspaceController with fusionWorkspaceController features
 * Merge properties of two objects
 */
export function controllerMerge<TData, TControllers, TContext>(
    obj1: FusionWorkspaceBase<TData, TControllers, TContext>,
    obj2: FusionWorkspaceExtensions<TData, TControllers, TContext>
) {
    for (const p in obj2) {
        obj1[p] = obj2[p];
    }
    return obj1 as FusionWorkspaceControllerInternal<TData, TControllers, TContext>;
}
