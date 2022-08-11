import { useEffect, useState } from 'react';
import { WorkspaceViewController } from '../classes';
import { useIsSidesheetOpen } from './useIsSidesheetOpen';

/**
 * Hook for returning sidesheet width
 * Will return 0 if the sidesheet is closed
 */
export function useSidesheetWidth(
  controller: WorkspaceViewController<any, any>
) {
  const isOpen = useIsSidesheetOpen(controller);

  const [sidesheetWidth, setSidesheetWidth] = useState<number>(
    controller.sidesheet.width
  );

  useEffect(() => {
    const { unsubscribe } =
      controller.sidesheet.onWidthChange(setSidesheetWidth);
    return unsubscribe;
  }, []);

  return isOpen ? sidesheetWidth : 0;
}
