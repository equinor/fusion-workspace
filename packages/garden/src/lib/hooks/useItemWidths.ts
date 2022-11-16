import { useEffect, useMemo, useState } from 'react';
import { useGardenContext } from './useGardenContext';
import { useGardenGroups } from './useGardenGroups';

export function useItemWidths() {
	const [widths, setWidths] = useState<number[]>([]);
	const groups = useGardenGroups();

	const amountOfColumns = useMemo(() => groups.length, [groups]);

	const {
		visuals: { calculateItemWidth },
		grouping: {
			value: { horizontalGroupingAccessor },
		},
		customGroupByKeys,
	} = useGardenContext();

	useEffect(() => {
		if (groups && amountOfColumns > 0) {
			const width = calculateItemWidth(groups, horizontalGroupingAccessor, customGroupByKeys?.value);
			setWidths(new Array(amountOfColumns).fill(width));
		}
	}, [amountOfColumns, groups, calculateItemWidth, customGroupByKeys, horizontalGroupingAccessor]);

	return widths;
}
