import { useState, useEffect, useMemo } from 'react';
import { GardenGroups } from '../types';
import { defaultSortFunction } from '../utils/defaultSortFunction';
import { useGardenContext } from './useGardenContext';

export function useGardenGroups<TData extends Record<PropertyKey, unknown>>() {
	const controller = useGardenContext<TData>();
	const {
		fieldSettings,
		grouping: {
			value: { horizontalGroupingAccessor: gardenKey },
		},
	} = controller;

	const [groups, setGroups] = useState<GardenGroups<TData>>(controller.groups.value);

	useEffect(() => {
		const unsubscribe = controller.groups.onChange((val) => setGroups(val));
		return unsubscribe;
	}, []);

	const sortedColumns = useMemo(
		() =>
			groups.sort((a, b) => (fieldSettings?.[gardenKey]?.getColumnSort ?? defaultSortFunction)(a.value, b.value)),
		[groups, fieldSettings, gardenKey]
	);

	return sortedColumns;
}
