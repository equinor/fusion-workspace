import { ReactiveValue } from '../classes/reactiveValue';
import { useState, useEffect } from 'react';

export const valueToState = <T>({ onChange, value }: ReactiveValue<T>) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    const unsub = onChange(setVal);
    return () => unsub();
  }, [onChange]);

  return val;
};
