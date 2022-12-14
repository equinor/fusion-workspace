import { WorkspaceViewController } from '../classes';
import { useContext } from 'react';
import { ControllerContext } from '../context/controllerContext';

export const useControllerContext = <TTabNames extends string = string, TError = unknown>(): WorkspaceViewController<
	TTabNames,
	TError
> => {
	const context = useContext(ControllerContext);
	if (!context) {
		throw new Error('View controller context not found');
	}
	return context;
};
