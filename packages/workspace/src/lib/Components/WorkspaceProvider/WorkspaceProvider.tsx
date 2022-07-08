import { QueryClient, QueryClientProvider } from 'react-query';
import { WorkspaceContext } from '../../Context';
import { FusionWorkspaceController } from '../../Models';

interface WorkspaceProviderLayerProps<T> {
    controller: FusionWorkspaceController<T>;
    children: React.ReactNode;
}

const queryClient = new QueryClient();

/**
 * Wraps the workspace in all the context providers that it needs
 */
export function WorkspaceProviderLayer<T>({
    controller,
    children,
}: WorkspaceProviderLayerProps<T>): JSX.Element {
    return (
        <div>
            <WorkspaceContext.Provider value={controller as any}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </WorkspaceContext.Provider>
        </div>
    );
}
