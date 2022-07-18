import { createContext } from 'react';
import { FusionWorkspaceController } from '../../Models';

export const WorkspaceContext = createContext<FusionWorkspaceController<unknown>>(
    {} as FusionWorkspaceController<unknown>
);
