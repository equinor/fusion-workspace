import { useLayoutEffect } from 'react';
import { ReactiveValue } from '../classes/reactiveValue';
import { GroupingKeys } from '../types';

export function useResetScrollOnKeysChange<TData extends Record<PropertyKey, unknown>>(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  grouping: ReactiveValue<GroupingKeys<TData>>
) {
  useLayoutEffect(() => {
    const unsub = grouping.onChange(() => {
      parentRef.current?.scrollTo({ left: 0, top: 0 });
    });
    return () => unsub();
  }, [parentRef]);
}
