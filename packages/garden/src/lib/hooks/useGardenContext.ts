import { GardenController } from 'lib/classes';
import { useContext } from 'react';
import { GardenContext } from '../components';

export const useGardenContext = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = never
>() => {
	const context = useContext(GardenContext);
	if (!context) throw new Error('Garden context invoked out of bounds');
	return context as GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};
