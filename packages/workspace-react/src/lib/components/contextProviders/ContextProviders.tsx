import { ReactNode, Fragment } from 'react';
import { Provider } from '../../types';

interface WorkspaceProvidersProps {
  children: ReactNode;
  providers: Provider[];
}

/**
 * Will recursively nest the providers you give it
 */
export function ContextProviders({ children, providers }: WorkspaceProvidersProps) {
  return <>{providers.length > 0 ? <ProviderHandler providers={providers} children={children} /> : <>{children}</>}</>;
}

interface ProviderHandlerProps {
  providers: Provider[];
  children: ReactNode;
}
function ProviderHandler({ providers, children }: ProviderHandlerProps) {
  let isLast = false;
  // eslint-disable-next-line prefer-const
  let [Current, Next] = providers;
  if (!Next) {
    isLast = true;
    // eslint-disable-next-line react/jsx-no-useless-fragment
    Next = { name: 'Content', Component: () => <Fragment>{children}</Fragment> };
  }

  return (
    <Current.Component key={Current.name}>
      <Next.Component>
        {!isLast && <ProviderHandler providers={providers.slice(1)} children={children} />}
      </Next.Component>
    </Current.Component>
  );
}
