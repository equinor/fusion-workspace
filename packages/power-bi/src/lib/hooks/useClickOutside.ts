import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = (elementRef: RefObject<Element>, callback: () => void, isActive = true) => {
  const callbackRef = useRef(callback);

  const isClickInsideElement = (target: EventTarget | null): boolean => {
    return elementRef.current ? elementRef.current.contains(target as Node) : false;
  };

  const handleClick = (e: MouseEvent) => {
    if (isActive && !isClickInsideElement(e.target)) {
      callbackRef.current();
    }
  };

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mouseup', handleClick);
      return () => {
        document.removeEventListener('mouseup', handleClick);
      };
    }
  }, [isActive, elementRef]);
};

export default useClickOutside;
