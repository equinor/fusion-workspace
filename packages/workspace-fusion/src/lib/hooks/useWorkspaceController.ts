import { useContext } from 'react';
import { WorkspaceContext } from '../context/WorkspaceControllerContext';

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('Context invoked out of bounds');
  }
  return context;
};
