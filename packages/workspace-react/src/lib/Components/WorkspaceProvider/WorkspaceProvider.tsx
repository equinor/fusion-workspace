import { QueryClient, QueryClientProvider } from 'react-query';
import { WorkspaceContext, WorkspaceControllerContext } from '../../Context';

interface WorkspaceProviderLayerProps<TData, TControllers, TOnClick, TError, TContext> {
    controller: WorkspaceControllerContext<TData, TControllers, TOnClick, TError, TContext>;
    children: React.ReactNode;
}

const queryClient = new QueryClient();

/**
 * Wraps the workspace in all the context providers that it needs
 */
export function WorkspaceProviderLayer<TData, TControllers, TOnClick, TError, TContext>({
    controller,
    children,
}: WorkspaceProviderLayerProps<TData, TControllers, TOnClick, TError, TContext>): JSX.Element {
    return (
        <div>
            <WorkspaceContext.Provider value={controller as any}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </WorkspaceContext.Provider>
        </div>
    );
}
