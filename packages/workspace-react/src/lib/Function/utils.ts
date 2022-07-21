/**
 * Internal Function for creating unique id
 * @memberof reactWorkspaceController
 */
export const generateUniqueId = (): string => {
    return (Math.random() * 16).toString();
};

/*
 * Merge  properties of two controllers
 */
export function mergeControllers(obj1: any, obj2: any) {
    for (const p in obj2) {
        obj1[p] = obj2[p];
    }
    return obj1;
}
