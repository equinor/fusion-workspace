import { useEffect, useState } from 'react';

export function useItemWidths(columnCount: number, itemWidth: number) {
  const [widths, setWidths] = useState<number[]>([]);
  useEffect(() => {
    if (columnCount > 0) {
      setWidths(new Array(columnCount).fill(itemWidth));
    }
  }, [columnCount]);

  return widths;
}
