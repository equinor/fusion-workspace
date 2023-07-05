import { RefObject, useCallback, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  popoverRef: RefObject<T>,
  iconRef: RefObject<T>,
  handler: Handler
): void {
  const handleEvent = useCallback(
    (e: MouseEvent) => {
      if (
        popoverRef.current &&
        iconRef.current &&
        !iconRef.current.contains(e.target as Node) &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        handler(e);
      } else {
        return;
      }
    },
    [handler, popoverRef]
  );

  useEffect(() => {
    window.addEventListener('click', handleEvent);

    return () => {
      window.removeEventListener('click', handleEvent);
    };
  }, [handleEvent]);
}
