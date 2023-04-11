import { useEffect, useState } from 'react';

export const defaultGardenPackageWidth = 300;

export function useItemWidths(columnCount: number) {
  const [widths, setWidths] = useState<number[]>([]);

  /**
   * How to calculate longest width?
   */
  useEffect(() => {
    if (columnCount > 0) {
      setWidths(new Array(columnCount).fill(defaultGardenPackageWidth));
    }
  }, [columnCount]);

  return widths;
}
