import { useLayoutEffect } from 'react';
import { useVirtual } from 'react-virtual';

type Virtualizer = ReturnType<typeof useVirtual>;

/**
 *  Scrolls to column start when garden is grouped on certain keys
 * @param columnStart - Where to scroll to
 * @param columnVirtualizer - The garden virtualizer
 */
export function useScrollToColumnStart(columnStart: number | null, columnVirtualizer: Virtualizer) {
  useLayoutEffect(() => {
    if (columnStart) {
      columnVirtualizer.scrollToIndex(columnStart, { align: 'center' });
    }
  }, [columnStart]);
}
