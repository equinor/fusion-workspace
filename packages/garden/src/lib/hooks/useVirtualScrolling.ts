import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { cancelTimeout, requestTimeout } from '../utils/timeout';
/**
 * Hook for checking if the user is scrolling...
 * TODO: check if really necessary or just adding complexity...
 * @param ref The ref used for useVirtual hook
 * @returns
 */
export const useVirtualScrolling = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const isMountedRef = useRef<boolean>(false);
  const scrollingIdRef = useRef<{ id: number } | null>(null);
  const debouncedResetScrollingRef = useRef(() => {
    if (scrollingIdRef.current !== null) {
      cancelTimeout(scrollingIdRef.current);
    }
    scrollingIdRef.current = requestTimeout(() => {
      scrollingIdRef.current = null;

      if (isMountedRef.current) {
        setIsScrolling(false);
      }
    }, 200);
  });

  const scrollOffsetFn = useCallback(
    (event: any) => {
      if (event) {
        setIsScrolling(true);
        debouncedResetScrollingRef.current();
      }
      return ref.current ? ref.current['scrollLeft'] : 0;
    },
    [ref]
  );

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return { isScrolling, scrollOffsetFn };
};
