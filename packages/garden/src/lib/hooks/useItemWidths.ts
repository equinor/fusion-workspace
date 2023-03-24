import { useEffect, useState } from 'react';

export function useItemWidths(columnCount: number) {
  const [widths, setWidths] = useState<number[]>([]);

  const amountOfColumns = columnCount;

  /**
   * How to calculate longest width?
   */
  useEffect(() => {
    if (amountOfColumns > 0) {
      const width = 300;
      setWidths(new Array(amountOfColumns).fill(width));
    }
  }, [amountOfColumns]);

  return widths;
}
