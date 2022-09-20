import { useState, useEffect } from 'react';
import { useGardenContext } from './useGardenContext';

/**Returns the selected nodes */
export function useSelected() {
	const { selectedNodes } = useGardenContext();
	const [selected, setSelected] = useState(selectedNodes.value);

	useEffect(() => {
		const unsub = selectedNodes.onChange(setSelected);
		return unsub;
	}, []);

	return selected;
}
