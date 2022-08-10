import { useEffect, useState } from 'react';
import { WorkspaceViewController } from '../classes';

export function useIsSidesheetOpen(
  controller: WorkspaceViewController<any, any>
) {
  const [isSidesheetOpen, setIsSidesheetOpen] = useState(
    controller.isSidesheetOpen
  );

  useEffect(() => {
    const { unsubscribe } =
      controller.onSidesheetOpenOrClosedChanged(setIsSidesheetOpen);
    return unsubscribe;
  }, []);

  return isSidesheetOpen;
}
