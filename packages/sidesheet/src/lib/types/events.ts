import { SidesheetController } from '../classes';
import { SidesheetState } from './sidesheetState';

export type SidesheetChangedCallback<T, TContext> = (
	state: SidesheetState,
	controller: SidesheetController<T, TContext>
) => void;

export type ItemChangedCallback<T, TContext> = (
	item: T | undefined,
	controller: SidesheetController<T, TContext>
) => void;
