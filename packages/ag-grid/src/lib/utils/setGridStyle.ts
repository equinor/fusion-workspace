import { agStyles } from '../styles/styles';

/**
 * Appends ag grid styling to document head
 * @returns function to remove style
 */
export function setGridStyle(): VoidFunction {
	const style = document.createElement('style');
	style.textContent = agStyles;
	style.id = 'workspace-fusion-ag-grid-styles';
	document.head.appendChild(style);

	return () => style.remove();
}
