import { ActionType, createCustomAction } from 'typesafe-actions';
import { DataAction } from './ParkViewContext';

export const actions = {
    setGroupKeys: createCustomAction(DataAction.setGroupKeys, (groupKeys: string[]) => ({
        groupKeys,
    })),
    setCustomGroupKeys: createCustomAction(
        DataAction.setCustomGroupKeys,
        (groupKeys: Record<string, unknown>) => ({
            groupKeys,
        })
    ),

    setGardenKey: createCustomAction(DataAction.setGardenKey, (gardenKey?: string) => ({
        gardenKey,
    })),

    setData: createCustomAction(DataAction.setData, (data: unknown[]) => ({
        data,
    })),

    setCustomState: createCustomAction(
        DataAction.setCustomState,
        (data: Record<string, unknown>) => ({
            data,
        })
    ),
};

export type Actions = ActionType<typeof actions>;
