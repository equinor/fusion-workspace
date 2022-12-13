import { Tab, useControllerContext } from '@equinor/workspace-react';
import { createContext, ReactNode, useContext } from 'react';

type WorkspaceHeaderComponents = {
	analyticsTabs: Tab<string>[];
	viewTabs: Tab<string>[];
	icons: HeaderIcon[];
};

type HeaderIcon = {
	name: string;
	Icon: () => JSX.Element;
	placement: 'left' | 'right';
};

const defaultState: WorkspaceHeaderComponents = {
	analyticsTabs: [],
	icons: [],
	viewTabs: [],
};

export const WorkspaceHeaderComponents = createContext<WorkspaceHeaderComponents>(defaultState);

export const useWorkspaceHeaderComponents = () => useContext(WorkspaceHeaderComponents);

type RootProps = {
	children: ReactNode;
};

export const RootHeaderContext = ({ children }: RootProps) => {
	const {
		tabController: { tabs },
	} = useControllerContext();

	const analyticsTabs = tabs.filter((s) => s.name === 'powerbi');

	const viewTabs = tabs.filter((s) => s.name !== 'powerbi');
	return (
		<WorkspaceHeaderComponents.Provider
			value={{
				...defaultState,
				analyticsTabs: analyticsTabs,
				viewTabs: viewTabs,
			}}
		>
			{children}
		</WorkspaceHeaderComponents.Provider>
	);
};
