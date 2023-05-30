import { FallbackProps } from 'react-error-boundary';

export const WorkspaceError = ({ error }: FallbackProps) => {
  return <div>Ops... {error.message}</div>;
};
