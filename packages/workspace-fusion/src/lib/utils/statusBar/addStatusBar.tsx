import { WorkspaceViewController } from '@equinor/workspace-react';
import { createContext, useContext } from 'react';
import { StatusBarWrapper } from '../../components';
import { FusionMediator, WorkspaceTabNames } from '../../types';
import { StatusBarConfig } from '../../integrations/status-bar';

export function addStatusBar<TData, TError>(
	config: StatusBarConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData>
) {
	const StatusBarProvider = ({ children }) => (
		<StatusBarContext.Provider value={() => <StatusBarWrapper config={config} mediator={mediator} />}>
			{children}
		</StatusBarContext.Provider>
	);
	viewController.addProvider({
		Component: StatusBarProvider,
		name: 'Status bar',
	});
}
const StatusBarContext = createContext<React.FC | undefined>(undefined);

export const useStatusBar = () => useContext(StatusBarContext);
