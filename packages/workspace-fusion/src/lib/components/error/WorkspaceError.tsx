import { Button } from '@equinor/eds-core-react';
import { FallbackProps } from 'react-error-boundary';

export const WorkspaceError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <div>
        An unknown error has occurred in the workspace
        <div>{error.message}</div>
        <pre>{error?.stack}</pre>
      </div>
      <Button
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        Try again
      </Button>
    </div>
  );
};
