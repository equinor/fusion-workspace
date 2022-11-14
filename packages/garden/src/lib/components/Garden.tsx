import { Icon } from '@equinor/eds-core-react';
import { createContext } from 'react';
import { GardenController } from '../classes';
import { BaseRecordObject } from '../types';
import { VirtualContainer } from './VirtualContainer/VirtualContainer';

import { chevron_down, chevron_up } from '@equinor/eds-icons';
interface GardenProps<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
> {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
}

Icon.add({ chevron_down, chevron_up });

export function Garden<
	TData,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>,
	TContext = unknown
>({ controller }: GardenProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>): JSX.Element | null {
	//TODO:Handle no data better in garden

	return (
		<GardenContext.Provider
			value={
				controller as unknown as GardenController<
					unknown,
					string,
					BaseRecordObject<unknown>,
					BaseRecordObject<unknown>,
					unknown
				>
			}
		>
			<VirtualContainer />
		</GardenContext.Provider>
	);
}

export const GardenContext = createContext<
	GardenController<unknown, string, BaseRecordObject<unknown>, BaseRecordObject<unknown>, unknown>
>({} as any);
