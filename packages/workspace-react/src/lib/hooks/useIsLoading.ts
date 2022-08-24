import { useEffect, useState } from 'react';
import { useControllerContext } from './useControllerContext';

export function useIsLoading() {
	const controller = useControllerContext();

	const [isLoading, setIsLoading] = useState(controller.isLoading);

	useEffect(() => {
		const { unsubscribe } = controller.onIsLoadingChanged(setIsLoading);
		return unsubscribe;
	}, []);

	return isLoading;
}
