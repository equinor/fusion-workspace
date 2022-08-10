import { useEffect, useState } from 'react';
import { WorkspaceViewController } from '../classes';

export function useIsSidesheetOpen(
  controller: WorkspaceViewController<any, any>
) {
  const [isSidesheetOpen, setIsSidesheetOpen] = useState(
    controller.sidesheet.isOpen
  );

  useEffect(() => {
    const { unsubscribe } =
      controller.sidesheet.onOpenOrClosedChanged(setIsSidesheetOpen);
    return unsubscribe;
  }, []);

  return isSidesheetOpen;
}
