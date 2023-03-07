import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { WorkspaceError } from './WorkspaceError';

type WorkspaceBoundaryProps = {
  children: ReactNode;
};

export const WorkspaceBoundary = ({ children }: WorkspaceBoundaryProps) => {
  return <ErrorBoundary FallbackComponent={WorkspaceError}>{children}</ErrorBoundary>;
};
