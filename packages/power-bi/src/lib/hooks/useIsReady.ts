import { useState, useEffect } from 'react';
import { PowerBiController } from '../classes';

/**
 * Hook for turning isReady into a react state
 */
export function useIsReady(controller: PowerBiController) {
	const [isReady, setIsReady] = useState(controller.isReady);

	useEffect(() => {
		const unsub = controller.onIsReadyChanged(setIsReady);
		return unsub;
	}, []);

	return isReady;
}
