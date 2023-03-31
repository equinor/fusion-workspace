import { useEffect, useState } from 'react';

export function useItemWidths(columnCount: number) {
  const [widths, setWidths] = useState<number[]>([]);

  /**
   * How to calculate longest width?
   */
  useEffect(() => {
    if (columnCount > 0) {
      const width = 300;
      setWidths(new Array(columnCount).fill(width));
    }
  }, [columnCount]);

  return widths;
}
