import { useEffect, useState } from 'react';
import { SidesheetController } from '../classes';

export function useSidesheetState<TItem, TContext = any>({
  onSidesheetStateChanged,
  isSidesheetOpen,
}: SidesheetController<TItem, TContext>) {
  const [isOpen, setIsOpen] = useState<boolean>(isSidesheetOpen());

  useEffect(() => {
    const { unsubscribe } = onSidesheetStateChanged(() => {
      setIsOpen(isSidesheetOpen());
    });
    return unsubscribe;
  }, [isSidesheetOpen, onSidesheetStateChanged]);

  return isOpen;
}
