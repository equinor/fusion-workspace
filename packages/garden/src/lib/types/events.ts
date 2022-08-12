import { GardenGroup } from '.';
import { GardenController } from '..';

/** Function signature for clicking an item */
export type OnClickItem<TData, TContext> = (item: TData, controller: GardenController<TData, TContext>) => void;
/** Function signature for clicking a group containing children in the garden */
export type OnClickGroup<TData, TContext> = (
	item: GardenGroup<TData>,
	controller: GardenController<TData, TContext>
) => void;

/**Onclick events for garden */
export interface OnClickEvents<TData, TContext> {
	/** Fires when an item is clicked */
	onClickItem?: OnClickItem<TData, TContext>;
	/** Fires when a group containing children is clicked */
	onClickGroup?: OnClickGroup<TData, TContext>;
}
