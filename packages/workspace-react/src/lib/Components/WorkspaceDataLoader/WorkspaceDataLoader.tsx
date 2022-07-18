import { useQuery } from 'react-query';

import { useWorkspaceController } from '../../Hooks';
import { WorkspaceLoadingSpinner } from '../WorkspaceLoadingSpinner';

interface WorkspaceDataLayerProps {
    children: React.ReactNode;
}

/**
 * Component that renders a loading spinner while data is fetching
 * @param children Children to render when data is done loading
 * @returns
 */

export function WorkspaceDataLoader({ children }: WorkspaceDataLayerProps) {
    const { dataSource } = useWorkspaceController();

    /**
     * TODO: Extend the data source controller to have fields from react query like, isloading, error etc etct. Make a hook to mirror state
     * This will allow workspace controller to set isLoading and force loading spinner
     */
    const { isLoading } = useQuery(['Workspace data'], () => dataSource.fetchData(), {
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return <WorkspaceLoadingSpinner />;
    }

    return <>{children}</>;
}
