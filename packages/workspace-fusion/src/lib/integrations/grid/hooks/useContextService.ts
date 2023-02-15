import { GridController } from '@equinor/workspace-ag-grid';
import { FusionMediator } from '../../../types';
import { useEffect } from 'react';

export const useContextService = (mediator: FusionMediator<any, any, any>, gridController: GridController<any, any>) =>
  useEffect(() => {
    const sub = mediator.contextService.context$.subscribe((s) => {
      gridController.context = s;
    });
    return () => {
      return sub.unsubscribe();
    };
  }, [mediator, gridController]);
