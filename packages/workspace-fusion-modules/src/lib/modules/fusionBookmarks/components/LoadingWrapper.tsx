import { CircularProgress } from '@equinor/eds-core-react';

export const LoadingWrapper = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<CircularProgress size={48} />
			<p>Loading bookmark...</p>
		</div>
	);
};
