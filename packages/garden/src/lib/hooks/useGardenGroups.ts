import { useState, useEffect, useMemo } from 'react';
import { useGardenContext } from '../components';
import { GardenGroups } from '../types';
import { defaultSortFunction } from '../utils/defaultSortFunction';

export function useGardenGroups() {
	const controller = useGardenContext();
	const {
		fieldSettings,
		grouping: {
			value: { horizontalGroupingAccessor: gardenKey },
		},
	} = controller;

	const [groups, setGroups] = useState<GardenGroups<unknown>>(controller.groups.value);

	useEffect(() => {
		const unsubscribe = controller.groups.onChange(setGroups);
		return unsubscribe;
	}, []);

	const sortedColumns = useMemo(
		() =>
			groups.sort((a, b) => (fieldSettings?.[gardenKey]?.getColumnSort ?? defaultSortFunction)(a.value, b.value)),
		[groups, fieldSettings, gardenKey]
	);

	return sortedColumns;
}
