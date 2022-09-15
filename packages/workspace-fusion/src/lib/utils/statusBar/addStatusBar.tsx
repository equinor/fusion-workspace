import { WorkspaceViewController } from '@equinor/workspace-react';
import React, { createContext, useContext } from 'react';
import { StatusBarWrapper } from '../../components';
import { FusionMediator, StatusBarConfig, WorkspaceTabNames } from '../../types';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TError>
) {
	viewController.addProvider(({ children }) => (
		<StatusBarContext.Provider value={() => <StatusBarWrapper config={config} mediator={mediator} />}>
			{children}
		</StatusBarContext.Provider>
	));
}
const StatusBarContext = createContext<React.FC | undefined>(undefined);

export const useStatusBar = () => useContext(StatusBarContext);
