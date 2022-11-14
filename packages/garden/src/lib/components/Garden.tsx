import { Icon } from '@equinor/eds-core-react';
import { createContext } from 'react';
import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
interface GardenProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
}

Icon.add({ chevron_down, chevron_up });

export function Garden<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({ controller }: GardenProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>): JSX.Element | null {
	//TODO:Handle no data better in garden

	return (
		<GardenContext.Provider
			value={
				controller as unknown as GardenController<
					Record<PropertyKey, unknown>,
					string,
					BaseRecordObject<unknown>,
					BaseRecordObject<unknown>,
					Record<PropertyKey, unknown>
				>
			}
		>
			<VirtualContainer />
		</GardenContext.Provider>
	);
}

export const GardenContext = createContext<
	GardenController<
		Record<PropertyKey, unknown>,
		string,
		BaseRecordObject<unknown>,
		BaseRecordObject<unknown>,
		Record<PropertyKey, unknown>
	>
>({} as any);
