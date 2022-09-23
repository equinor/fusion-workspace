import { ReactNode, Fragment } from 'react';
import { useControllerContext } from '../../hooks';
import { Provider } from '../../types';

interface WorkspaceProvidersProps {
	children: ReactNode;
}

/**
 * Will recursively nest the providers you give it
 */
export function ContextProviders({ children }: WorkspaceProvidersProps) {
	const { providers } = useControllerContext();

	return (
		<>{providers.length > 0 ? <ProviderHandler providers={providers} children={children} /> : <>{children}</>}</>
	);
}

interface ProviderHandlerProps {
	providers: Provider[];
	children: ReactNode;
}
function ProviderHandler({ providers, children }: ProviderHandlerProps) {
	let isLast = false;
	// eslint-disable-next-line prefer-const
	let [Current, Next] = providers.map((s) => s.Component);
	if (!Next) {
		isLast = true;
		// eslint-disable-next-line react/jsx-no-useless-fragment
		Next = () => <Fragment>{children}</Fragment>;
	}

	return (
		<Current>
			<Next>{!isLast && <ProviderHandler providers={providers.slice(1)} children={children} />}</Next>
		</Current>
	);
}