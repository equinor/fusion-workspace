import { useEffect, useState } from 'react';
import { GridController } from '../types';

export function useRowData<TData extends Record<PropertyKey, unknown>>(controller: GridController<TData>) {
  const [rowData, setRowData] = useState(controller.rowData);

  useEffect(() => {
    const subscription = controller.rowData$.subscribe(setRowData);
    return () => {
      subscription.unsubscribe();
    };
  }, [controller]);

  return rowData;
}
