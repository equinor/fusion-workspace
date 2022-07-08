import { useQuery } from 'react-query';
import { DataSourceController } from '../../Classes';
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

export function WorkspaceDataLoader<T>({ children }: WorkspaceDataLayerProps) {
    const { controllers } = useWorkspaceController();
    /**
     * Convert interface so it has properties like dataSourceController.
     */
    const dataSourceController = controllers.find((s) => s.name === 'DataSource')
        ?.controller as DataSourceController<T>;
    if (!dataSourceController) {
        throw 'No data source controller added';
    }

    /**
     * TODO: Extend the data source controller to have fields from react query like, isloading, error etc etct. Make a hook to mirror state
     * This will allow workspace controller to set isLoading and force loading spinner
     */
    const { isLoading } = useQuery(['Workspace data'], dataSourceController.fetchData, {
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return <WorkspaceLoadingSpinner />;
    }

    return <>{children}</>;
}
