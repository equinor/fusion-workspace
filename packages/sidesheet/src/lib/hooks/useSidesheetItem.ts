import { useEffect, useState } from 'react';
import { SidesheetController } from '../classes';

export function useSidesheetItem<TItem, TContext = any>({
  item,
  onItemChanges,
}: SidesheetController<TItem, TContext>) {
  const [sidesheetItem, setItem] = useState<TItem | undefined>(item);

  useEffect(() => {
    const { unsubscribe } = onItemChanges(setItem);
    return unsubscribe;
  }, [onItemChanges]);

  return sidesheetItem;
}
