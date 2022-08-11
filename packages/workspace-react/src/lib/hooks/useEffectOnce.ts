import { useEffect, useRef } from 'react';

type VoidFunction = () => void;

/**
 * UseEffect that only fires once on mount
 * @param cb The function to be called when the component mounts
 */
export function useEffectOnce(cb: VoidFunction) {
	const isInitialized = useRef(false);
	useEffect(() => {
		if (!isInitialized.current) {
			isInitialized.current = true;
			cb();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
