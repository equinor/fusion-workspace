import { Dialog } from '@equinor/eds-core-react';
import { ReactNode, useEffect, useState } from 'react';
import { useControllerContext } from '../../hooks';

interface WorkspaceErrorBoundaryProps {
	children: ReactNode;
}

export function WorkspaceErrorBoundary({ children }: WorkspaceErrorBoundaryProps): JSX.Element {
	const { ErrorComponent = DefaultErrorComponent, onError, error: initialError } = useControllerContext();

	const [error, setError] = useState<unknown | undefined>(initialError);

	useEffect(() => {
		const unsub = onError(setError);
		return unsub;
	}, [onError]);

	try {
		if (error) {
			return <ErrorComponent error={error} />;
		}
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <>{children}</>;
	} catch (e) {
		setError(e);
		// eslint-disable-next-line react/jsx-no-useless-fragment
		//Will never happen
		return <></>;
	}
}

//TODO: make default component
export function DefaultErrorComponent() {
	return (
		<Dialog open={true}>
			<Dialog.Header>Unrecoverable error encountered</Dialog.Header>
		</Dialog>
	);
}
