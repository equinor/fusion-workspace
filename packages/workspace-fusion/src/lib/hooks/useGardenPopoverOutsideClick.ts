import { MutableRefObject, useEffect } from 'react';

export const useOutsideClick = (
  handler: (e: MouseEvent, el: HTMLElement) => void,
  ...refs: MutableRefObject<HTMLElement | null>[]
) => {
  const onOutsideClick = (e: MouseEvent) => {
    /** Eds input LI is removed from dom before callback runs */
    if (!document.contains(e.target as Node)) {
      return;
    }

    // updated this to use the passed componentRef
    const inMain = refs.some((s) => s.current?.contains(e.target as HTMLElement));
    const isOutside = !inMain;
    if (isOutside) {
      handler(e, e.target as HTMLElement);
    }
  };
  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, [refs]);
};
