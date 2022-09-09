import { createContext } from 'react';
import { WorkspaceViewController } from '../classes';

export const ControllerContext = createContext<WorkspaceViewController<any, any>>(new WorkspaceViewController());
