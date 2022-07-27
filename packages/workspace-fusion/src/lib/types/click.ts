import { GardenController } from '@equinor/garden';

export interface GardenClickEvent<T> {
    type: 'garden';
    item: T;
    controller: GardenController<T>;
}

export type ClickEvent<T> = GardenClickEvent<T>;
