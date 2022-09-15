import { ReactNode, Fragment } from 'react';
import { Provider } from '../../classes/workspaceViewController';
import { useControllerContext } from '../../hooks';

interface WorkspaceProvidersProps {
	children: ReactNode;
}

/**
 * Will recursively nest the providers you give it
 */
export function WorkspaceProviders({ children }: WorkspaceProvidersProps) {
	const { providers } = useControllerContext();

	return (
		<div>
			{providers.length > 0 ? (
				<ProviderHandler providers={providers} children={children} />
			) : (
				<div>{children}</div>
			)}
		</div>
	);
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
		Next = () => <Fragment>{children}</Fragment>;
	}

	return (
		<Current>
			<Next>{!isLast && <ProviderHandler providers={providers.slice(1)} children={children} />}</Next>
		</Current>
	);
}
