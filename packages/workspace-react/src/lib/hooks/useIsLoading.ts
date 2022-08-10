import { useEffect, useState } from 'react';
import { WorkspaceViewController } from '../classes';

export function useIsLoading(
  controller: WorkspaceViewController<any, any>
) {
  const [isLoading, setIsLoading] = useState(
    controller.isLoading
  );

  useEffect(() => {
    const { unsubscribe } =
      controller.onIsLoadingChanged(setIsLoading);
    return unsubscribe;
  }, []);

  return isLoading;
}
