import { useEffect, useState } from 'react';
import { useFilterContext } from './useFilterContext';

/** Hook for using filtered data from filter controller as state */
export function useOnFilteredDataChanged() {
  const { filteredData, onFilteredDataChanged } = useFilterContext();
  const [data, setData] = useState(filteredData);

  useEffect(() => {
    const unsub = onFilteredDataChanged(setData);
    return unsub;
  }, []);

  return data;
}
