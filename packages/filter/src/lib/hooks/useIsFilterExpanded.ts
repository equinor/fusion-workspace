import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

export function useIsFilterExpanded() {
  const { isFilterExpanded, onFilterExpandedChange } = useFilterContext();
  const [isExpanded, setIsExpanded] = useState(isFilterExpanded);

  useEffect(() => {
    const unsub = onFilterExpandedChange(setIsExpanded);
    return unsub;
  }, [onFilterExpandedChange]);

  return isExpanded;
}
