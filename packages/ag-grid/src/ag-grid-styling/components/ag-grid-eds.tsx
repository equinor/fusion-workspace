import { ReactNode } from 'react';
import { useAgStyles } from '../hooks';

type AgGridEdsStyleProviderProps = {
	children: ReactNode;
};

export const AgGridEdsStyleProvider = ({ children }: AgGridEdsStyleProviderProps) => {
	const themeName = useAgStyles();
	return <div className={themeName}>{children}</div>;
};
