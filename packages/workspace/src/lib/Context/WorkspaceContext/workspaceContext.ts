import { createContext } from 'react';
import { WorkspaceController } from '../../Classes';

export const WorkspaceContext = createContext<WorkspaceController<unknown>>(
    {} as WorkspaceController<unknown>
);
