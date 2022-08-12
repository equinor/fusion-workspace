import { useState, useEffect } from 'react';
import { ReactiveValue } from '../classes/reactiveValue';

export function useReactiveValue<TData>(reactiveValue: ReactiveValue<TData>) {
	const [value, setValue] = useState(reactiveValue.value);

	useEffect(() => {
		const unsubscribe = reactiveValue.onChange(setValue);
		return unsubscribe;
	}, []);

	return value;
}
