import { useEffect, useState } from 'react';
import { useGardenContext } from './useGardenContext';

export function useIsSelected(id: string) {
	const { highlightedNode } = useGardenContext();
	const [isHighlighted, setIsHighlighted] = useState(id === highlightedNode.value);

	useEffect(() => {
		/** Complex if clauses on purpose to prevent unnecessary state changes */
		const unsub = highlightedNode.onChange((val) => {
			if (isHighlighted) {
				/** Node was highlighted and should now not be */
				if (val !== id) {
					setIsHighlighted(false);
				}
			} else {
				/** Node was not highlighted and should now be */
				if (val === id) {
					setIsHighlighted(true);
				}
			}
		});
		return unsub;
	}, [highlightedNode, id, isHighlighted]);

	return isHighlighted;
}
