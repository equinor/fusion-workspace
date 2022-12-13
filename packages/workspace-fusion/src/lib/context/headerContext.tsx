import { Tab, useControllerContext } from '@equinor/workspace-react';
import { createContext, ReactNode, useContext } from 'react';

type WorkspaceHeaderComponents = {
	analyticsTabs: Tab<string>[];
	viewTabs: Tab<string>[];
	BookmarksIcon: null | (() => JSX.Element);
	CreateIcon: null | (() => JSX.Element);
};

const defaultState: WorkspaceHeaderComponents = {
	analyticsTabs: [],
	BookmarksIcon: null,
	CreateIcon: null,
	viewTabs: [],
};

export const HeaderContext = createContext<WorkspaceHeaderComponents>(defaultState);

export const useWorkspaceHeaderComponents = () => useContext(HeaderContext);

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
		<HeaderContext.Provider
			value={{
				...defaultState,
				analyticsTabs: analyticsTabs,
				viewTabs: viewTabs,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
};
