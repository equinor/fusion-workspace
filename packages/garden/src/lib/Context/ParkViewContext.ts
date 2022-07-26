import { createContext } from 'react';
import { GardenController } from '../Classes';
import { GardenGroup } from '../Models/data';
import { GardenOptions } from '../Models/gardenOptions';

export interface CustomItemViewProps<T> {
    data: T;
    itemKey: string;
    onClick: () => void;
}

export interface CustomGroupViewProps<T> {
    data: GardenGroup<T>;
    onClick: () => void;
}

export type GardenViewState<T> = GardenOptions<T> & {
    data: T[] | undefined;
    onSelect: (item: unknown) => string;
    onGroupeSelect: (item: unknown) => string;
};

export interface GardenViewProviderProps<T> {
    children: React.ReactNode;
    controller: GardenController<T>;
}

export const GardenViewContext = createContext({} as GardenController<unknown>);
