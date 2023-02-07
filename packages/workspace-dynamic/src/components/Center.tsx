import { PropsWithChildren } from 'react';

export const Center = ({ children }: PropsWithChildren) => (
	<div
		style={{
			height: '100%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			gap: '1em',
		}}
	>
		{children}
	</div>
);
