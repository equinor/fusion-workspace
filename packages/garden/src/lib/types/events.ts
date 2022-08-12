import { GardenGroup } from '.';
import { GardenController } from '..';

export type OnClickItem<TData, TContext> = (item: TData, controller: GardenController<TData, TContext>) => void;

export type OnClickGroup<TData, TContext> = (
	item: GardenGroup<TData>,
	controller: GardenController<TData, TContext>
) => void;

export interface OnClickEvents<TData, TContext> {
	onClickItem?: OnClickItem<TData, TContext>;
	onClickGroup?: OnClickGroup<TData, TContext>;
}
