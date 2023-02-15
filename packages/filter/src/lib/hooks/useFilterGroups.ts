import { useEffect, useState } from 'react';
import { FilterGroup } from '../types';
import { useFilterContext } from './useFilterContext';

/** Use filter groups as state */
export function useFilterGroups() {
  const { onFilterValuesGenerated, filterGroups } = useFilterContext();
  const [groups, setGroups] = useState<FilterGroup[]>(filterGroups);

  useEffect(() => {
    const unsub = onFilterValuesGenerated((values) => {
      setGroups(values);
    });
    return unsub;
  }, []);

  return groups;
}
