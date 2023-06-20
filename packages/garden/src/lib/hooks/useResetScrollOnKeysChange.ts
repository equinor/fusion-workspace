import { useLayoutEffect, useRef } from 'react';

export function useResetScrollOnKeysChange<TData extends Record<PropertyKey, unknown>>(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  grouping: string[]
) {
  const initialRef = useRef(grouping);

  useLayoutEffect(() => {
    if (grouping === initialRef.current) return;
    parentRef.current?.scrollTo({ left: 0, top: 0 });
  }, [grouping, parentRef]);
}
