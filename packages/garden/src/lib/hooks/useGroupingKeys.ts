import { useEffect, useState } from 'react';
import { useGardenContext } from '../components';

export function useGroupingKeys() {
	const {
		grouping: { onChange, value },
	} = useGardenContext();

	const [gardenKey, setGardenKey] = useState(value.horizontalGroupingAccessor);
	const [groupByKeys, setGroupByKeys] = useState(value.verticalGroupingKeys);

	useEffect(() => {
		const unsub = onChange(({ horizontalGroupingAccessor, verticalGroupingKeys }) => {
			setGardenKey(horizontalGroupingAccessor);
			setGroupByKeys(verticalGroupingKeys);
		});
		return unsub;
	}, []);

	return {
		gardenKey,
		groupByKeys,
	};
}
