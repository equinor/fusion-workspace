import { useEffect, useState } from 'react';
import { useGardenContext } from './useGardenContext';

export function useIsSelected(id: string) {
	const { selectedNodes } = useGardenContext();
	const [isHighlighted, setIsHighlighted] = useState(selectedNodes.value.includes(id));

	useEffect(() => {
		/** Complex if clauses on purpose to prevent unnecessary state changes */
		const unsub = selectedNodes.onChange((val) => {
			if (isHighlighted) {
				/** Node was highlighted and should now not be */
				if (!val.includes(id)) {
					setIsHighlighted(false);
				}
			} else {
				/** Node was not highlighted and should now be */
				if (val.includes(id)) {
					setIsHighlighted(true);
				}
			}
		});
		return unsub;
	}, [id, isHighlighted, selectedNodes]);

	return isHighlighted;
}
