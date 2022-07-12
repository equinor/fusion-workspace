import { useContext } from 'react';
import { WorkspaceContext } from '../Context';

export function useWorkspaceController() {
    return useContext(WorkspaceContext);
}
