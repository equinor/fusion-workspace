import { GardenController } from '@equinor/garden';
import { GridController } from '@equinor/workspace-ag-grid';

export interface GardenClickEvent<T> {
    type: 'Garden';
    item: T;
    controller: GardenController<T>;
}

export interface GridClickEvent<T> {
    type: 'Grid';
    item: T;
    controller: GridController<T>;
}

export type ClickEvent<T> = GardenClickEvent<T> | GridClickEvent<T>;
