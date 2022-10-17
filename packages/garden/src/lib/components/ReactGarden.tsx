import { useMemo } from 'react';
import { GardenController } from '../classes';
import { BaseRecordObject, FieldSettings, HorizontalGroupingAccessor, NodeLabelCallback } from '../types';
import { Garden } from './Garden';

export type ReactGardenProps<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>
> = {
	fieldSettings: FieldSettings<TData, TCustomGroupByKeys, string>;
	data: TData[];
	initialGrouping: {
		horizontalGroupingAcccessor: HorizontalGroupingAccessor<TData>;
		verticalGroupingAccessor: string[];
	};
	nodeLabelCallback: NodeLabelCallback<TData>;
};

export function ReactGarden<
	TData,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = BaseRecordObject<unknown>,
	TCustomState extends BaseRecordObject<TCustomState> = BaseRecordObject<unknown>
>({
	fieldSettings,
	data,
	initialGrouping,
	nodeLabelCallback,
}: ReactGardenProps<TData, TCustomGroupByKeys, TCustomState>): JSX.Element | null {
	//TODO:Handle no data better in garden

	const controller = useMemo(() => {
		const s = new GardenController<TData, TCustomGroupByKeys, TCustomState>({
			data,
			getIdentifier: () => '',
			initialGrouping: {
				horizontalGroupingAccessor: initialGrouping.horizontalGroupingAcccessor,
				verticalGroupingKeys: initialGrouping.verticalGroupingAccessor,
			},
			nodeLabelCallback,
			fieldSettings,
		});
		return s;
	}, [
		data,
		fieldSettings,
		initialGrouping.horizontalGroupingAcccessor,
		initialGrouping.verticalGroupingAccessor,
		nodeLabelCallback,
	]);

	return <Garden controller={controller} />;
}
