import { createContext } from 'react';
import { WorkspaceViewController } from '../classes';

export const controllerContext = createContext<WorkspaceViewController<any, any>>(new WorkspaceViewController());
