import { useEffect, useState } from 'react';
import { useControllerContext } from './useControllerContext';

export function useIsLoading() {
	const { viewState } = useControllerContext();

	const [isLoading, setIsLoading] = useState(viewState.isLoading);

	useEffect(() => {
		const unsubscribe = viewState.onIsLoadingChanged(setIsLoading);
		return unsubscribe;
	}, []);

	return isLoading;
}
