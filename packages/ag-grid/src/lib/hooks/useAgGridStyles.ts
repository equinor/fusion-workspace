import { useEffect } from 'react';
import { agStyles } from '../styles/styles';

export const useAgGridStyles = () =>
	useEffect(() => {
		const style = document.createElement('style');
		style.textContent = agStyles;
		style.id = 'Workspace-fusion-ag-grid-styles';
		document.head.appendChild(style);
		return () => {
			style.remove();
		};
	}, []);
