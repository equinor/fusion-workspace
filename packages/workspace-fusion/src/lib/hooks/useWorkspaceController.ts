import { useContext } from 'react';
import { WorkspaceControllerContext } from '../context/WorkspaceControllerContext';

export const useWorkspaceController = () => {
  const context = useContext(WorkspaceControllerContext);
  if (!context) {
    throw new Error('Context invoked out of bounds');
  }
  return context;
};
