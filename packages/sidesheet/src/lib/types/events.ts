import { SidesheetController } from '../classes';
import { SidesheetState } from './sidesheetState';

export type SidesheetChangedCallback<T> = (
    state: SidesheetState,
    controller: SidesheetController<T>
) => void;

export type ItemChangedCallback<T> = (
    item: T | undefined,
    controller: SidesheetController<T>
) => void;
