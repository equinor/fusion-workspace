import { WorkspaceViewController } from '@equinor/workspace-react';
import { createContext, useContext } from 'react';
import { StatusBarWrapper } from '../../components';
import { FusionMediator, WorkspaceTabNames } from '../../types';
import { StatusBarConfig } from '../../integrations/status-bar';

export function addStatusBar<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never
>(
	config: StatusBarConfig<TData>,
	viewController: WorkspaceViewController<WorkspaceTabNames, TError>,
	mediator: FusionMediator<TData, TContext>
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
